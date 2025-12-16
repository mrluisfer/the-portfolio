# Portfolio Versions System

Sistema escalable para mostrar la evolución del portfolio a través de diferentes años.

## 📁 Estructura

```md
src/
├── app/versions/
│ ├── page.tsx # Página principal
│ └── \_components/
│ ├── versions-content.tsx # Vista en grid
│ ├── versions-timeline.tsx # Vista en timeline
│ └── versions-view.tsx # Selector de vistas
├── constants/
│ └── portfolio-versions.ts # Array de datos
└── types/
└── portfolio-version-expanded.ts # Tipos expandidos
```

## 🚀 Características

- ✅ **Dos vistas alternativas**: Grid y Timeline
- ✅ **Animaciones suaves** con Motion UI
- ✅ **Responsive design** optimizado para móvil, tablet y desktop
- ✅ **Componentes Shadcn/ui** para UI consistente
- ✅ **Escalabilidad**: Fácil agregar nuevos años y detalles
- ✅ **TypeScript** con tipado completo

## 📝 Agregar un nuevo año

### Método 1: Básico

Edita [portfolio-versions.ts](../../constants/portfolio-versions.ts):

```typescript
export const portfolioVersions: PortfolioVersion[] = [
  {
    year: 2026, // Nuevo año
    title: 'Portfolio 2026 - AI-Powered',
    description: 'Nueva versión con integración de IA...',
    highlights: ['AI-powered search', 'Voice commands', 'Smart recommendations'],
    technologies: ['Next.js 16', 'React 20', 'OpenAI'],
    liveUrl: 'https://mrluisfer.vercel.app',
    githubUrl: 'https://github.com/mrluisfer/portfolio-2026',
    status: 'current',
    releaseDate: '2026-01-15',
  },
  // ... versiones anteriores
];
```

### Método 2: Expandido

Para información más detallada, usa los tipos expandidos:

```typescript
import { ExpandedPortfolioVersion } from '@/types/portfolio-version-expanded';

{
  year: 2026,
  title: 'Portfolio 2026',
  // ... campos básicos ...

  // Campos adicionales:
  version: '2.0.0',
  changelog: [
    'Added AI-powered search',
    'Implemented voice commands',
  ],
  metrics: {
    pageViews: 50000,
    projects: 25,
    performanceScore: 99,
  },
  features: [
    {
      title: 'AI Integration',
      description: 'ChatGPT-powered assistant',
      available: true,
    },
  ],
  challenges: [
    'Implementing real-time AI responses',
    'Optimizing for mobile performance',
  ],
  learnings: [
    'Advanced prompt engineering',
    'Streaming API responses',
  ],
}
```

## 🎨 Personalización

### Cambiar colores

Los componentes usan variables CSS de Tailwind. Edita tu tema en `globals.css`:

```css
:root {
  --primary: 220 90% 56%;
  /* ... */
}
```

### Modificar animaciones

Edita las variantes en los componentes:

```typescript
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8, // Cambia la duración
      ease: [0.22, 1, 0.36, 1], // Cambia la curva
    },
  },
};
```

### Agregar nueva vista

- Crea un nuevo componente en `_components/`:

```typescript
// versions-compact.tsx
export default function VersionsCompact() {
  return (
    // Tu diseño aquí
  );
}
```

- Actualiza el selector de vistas:

```typescript
// versions-view.tsx
type ViewType = 'grid' | 'timeline' | 'compact';

// Agrega el botón
<Button onClick={() => setView('compact')}>Compact</Button>
```

## 📊 Estadísticas

El componente calcula automáticamente:

- Total de versiones
- Tecnologías únicas usadas
- Años de evolución

## 🔗 Enlaces útiles

- [Motion UI Docs](https://motion.dev/)
- [Shadcn/ui Components](https://ui.shadcn.com/)
- [Next.js 15 Docs](https://nextjs.org/docs)

## 💡 Tips

1. **Imágenes**: Coloca imágenes de preview en `/public/projects/`
2. **SEO**: Los metadatos están configurados en `page.tsx`
3. **Performance**: Las animaciones usan CSS transforms para mejor rendimiento
4. **Accesibilidad**: Los componentes incluyen ARIA labels apropiados

## 🐛 Troubleshooting

**Las animaciones no funcionan:**

- Verifica que `motion` esté instalado: `pnpm install motion`
- Asegúrate de usar `'use client'` en componentes con animaciones

**Los estilos no se aplican:**

- Verifica que Tailwind esté configurado correctamente
- Ejecuta `pnpm dev` para regenerar los estilos

**TypeScript errors:**

- Ejecuta `pnpm build` para verificar errores
- Asegúrate de que todos los tipos estén importados correctamente
