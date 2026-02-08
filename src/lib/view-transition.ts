/**
 * Circular reveal (expanding circle) for theme toggle.
 * Uses a lightweight overlay + mask animation instead of the View Transitions API
 * for smoother performance (no full-page snapshot).
 * Respects prefers-reduced-motion.
 */

const DURATION_MS = 280;
const EASING = (t: number) => 1 - Math.pow(1 - t, 3); // easeOutCubic

function getMaxRadius(x: number, y: number): number {
  const w = window.innerWidth;
  const h = window.innerHeight;
  return Math.ceil(
    Math.max(Math.hypot(x, y), Math.hypot(w - x, y), Math.hypot(x, h - y), Math.hypot(w - x, h - y))
  );
}

function getComputedBackground(): string {
  const style = getComputedStyle(document.documentElement);
  const bg = style.getPropertyValue('--background').trim();
  if (bg) return bg;
  return document.documentElement.classList.contains('dark')
    ? 'oklch(0.141 0.005 285.823)'
    : 'oklch(1 0 0)';
}

export function startViewTransitionWithCircle(
  updateCallback: () => void | Promise<void>,
  triggerElement: HTMLElement | null
): Promise<void> {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!triggerElement || prefersReducedMotion) {
    const result = updateCallback();
    return result instanceof Promise ? result : Promise.resolve();
  }

  const { left, top, width, height } = triggerElement.getBoundingClientRect();
  const x = left + width / 2;
  const y = top + height / 2;
  const maxRadius = getMaxRadius(x, y);

  // Capture old theme background before switching
  const overlayBackground = getComputedBackground();

  // Switch theme first so the page under the overlay is already the new theme
  const callbackResult = updateCallback();

  const finish = () => {
    overlay.remove();
  };

  const overlay = document.createElement('div');
  overlay.setAttribute('aria-hidden', 'true');
  overlay.style.cssText = `
    position: fixed;
    inset: 0;
    z-index: 2147483647;
    background: ${overlayBackground};
    pointer-events: none;
    transform: translateZ(0);
    -webkit-mask-image: radial-gradient(circle at ${x}px ${y}px, transparent 0px, transparent 0px, black 0px);
    mask-image: radial-gradient(circle at ${x}px ${y}px, transparent 0px, transparent 0px, black 0px);
    -webkit-mask-size: 100% 100%;
    mask-size: 100% 100%;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
  `;
  document.body.appendChild(overlay);

  const runReveal = () => {
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / DURATION_MS, 1);
      const r = EASING(progress) * maxRadius;
      const mask = `radial-gradient(circle at ${x}px ${y}px, transparent 0px, transparent ${r}px, black ${r}px)`;
      overlay.style.webkitMaskImage = mask;
      overlay.style.maskImage = mask;
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        finish();
      }
    };
    requestAnimationFrame(tick);
  };

  // Wait for theme to apply (React/next-themes flush) then run the reveal
  const waitForTheme = (p: void | Promise<void>) => {
    if (p instanceof Promise) {
      p.then(() => {
        requestAnimationFrame(() => requestAnimationFrame(runReveal));
      });
    } else {
      requestAnimationFrame(() => requestAnimationFrame(runReveal));
    }
  };

  waitForTheme(callbackResult);
  return Promise.resolve();
}
