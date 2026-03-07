import { type SVGProps } from 'react';

type SvglProxyIcon = (props: SVGProps<SVGSVGElement>) => JSX.Element;

function createSvglProxyIcon(file: string): SvglProxyIcon {
  return function SvglIcon(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 128 128"
        width="1em"
        height="1em"
        {...props}
      >
        <image
          href={`/svgl/${file}`}
          x="0"
          y="0"
          width="128"
          height="128"
          preserveAspectRatio="xMidYMid meet"
        />
      </svg>
    );
  };
}

export const PHP = createSvglProxyIcon('php.svg');
export const DarkPHP = createSvglProxyIcon('php_dark.svg');
export const ExpoSvgl = createSvglProxyIcon('expo.svg');
export const Laravel = createSvglProxyIcon('laravel.svg');
export const ElysiaJS = createSvglProxyIcon('elysiajs.svg');
export const Flask = createSvglProxyIcon('flask-light.svg');
export const DarkFlask = createSvglProxyIcon('flask-dark.svg');
export const Remix = createSvglProxyIcon('remix_light.svg');
export const DarkRemix = createSvglProxyIcon('remix_dark.svg');
export const Hono = createSvglProxyIcon('hono.svg');
export const ReactQuery = createSvglProxyIcon('reactquery.svg');
export const JestSvgl = createSvglProxyIcon('jest.svg');
export const MaterialUI = createSvglProxyIcon('materialui.svg');
export const CSSNew = createSvglProxyIcon('css.svg');
export const HTML5 = createSvglProxyIcon('html5.svg');
export const Markdown = createSvglProxyIcon('markdown-light.svg');
export const DarkMarkdown = createSvglProxyIcon('markdown-dark.svg');
export const BetterAuth = createSvglProxyIcon('better-auth_light.svg');
export const DarkBetterAuth = createSvglProxyIcon('better-auth_dark.svg');
export const Mantine = createSvglProxyIcon('mantine.svg');
export const ESLintIcon = createSvglProxyIcon('eslint-icon-light.svg');
export const DarkESLintIcon = createSvglProxyIcon('eslint-icon-dark.svg');
export const BaseUI = createSvglProxyIcon('base-ui.svg');
export const DarkBaseUI = createSvglProxyIcon('base-ui-dark.svg');
export const AntDesign = createSvglProxyIcon('ant-design-dark-theme.svg');
export const MotionSvgl = createSvglProxyIcon('motion.svg');
export const DarkMotionSvgl = createSvglProxyIcon('motion_dark.svg');
export const SocketIOSvgl = createSvglProxyIcon('socketio-icon-light.svg');
export const DarkSocketIOSvgl = createSvglProxyIcon('socketio-icon-dark.svg');
export const DrizzleORM = createSvglProxyIcon('drizzle-orm_light.svg');
export const DarkDrizzleORM = createSvglProxyIcon('drizzle-orm_dark.svg');
export const PrettierIcon = createSvglProxyIcon('prettier-icon-light.svg');
export const DarkPrettierIcon = createSvglProxyIcon('prettier-icon-dark.svg');
export const Turborepo = createSvglProxyIcon('turborepo-icon-light.svg');
export const DarkTurborepo = createSvglProxyIcon('turborepo-icon-dark.svg');
export const Nx = createSvglProxyIcon('nx_light.svg');
export const DarkNx = createSvglProxyIcon('nx_dark.svg');
