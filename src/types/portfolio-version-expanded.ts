// Tipos adicionales para expansiones futuras del sistema de versiones

export interface TeamMember {
  name: string;
  role: string;
  avatar?: string;
}

export interface PortfolioMetrics {
  pageViews?: number;
  projects?: number;
  technologies?: number;
  performanceScore?: number;
}

export interface PortfolioFeature {
  title: string;
  description: string;
  icon?: string;
  available: boolean;
}

export interface ExpandedPortfolioVersion {
  // Información básica (ya existente)
  year: number;
  title: string;
  description: string;
  highlights: string[];
  technologies: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  status: 'current' | 'archived' | 'deprecated';
  releaseDate: string;

  // Información expandida (opcional)
  version?: string; // e.g., "1.0.0"
  changelog?: string[]; // Lista de cambios
  team?: TeamMember[]; // Team members que trabajaron
  metrics?: PortfolioMetrics; // Métricas de rendimiento
  features?: PortfolioFeature[]; // Features específicas
  designSystem?: string; // Nombre del design system usado
  buildTime?: string; // Tiempo de construcción
  challenges?: string[]; // Desafíos superados
  learnings?: string[]; // Aprendizajes obtenidos
  awards?: string[]; // Premios o reconocimientos
  testimonials?: Array<{
    // Testimonios de usuarios/clientes
    author: string;
    role?: string;
    content: string;
  }>;
}

// Ejemplo de uso expandido:
/*
{
  year: 2025,
  title: 'Portfolio 2025 - Modern & Interactive',
  description: '...',
  version: '1.0.0',
  status: 'current',
  releaseDate: '2025-01-15',
  highlights: [...],
  technologies: [...],
  changelog: [
    'Added MDX support for blog posts',
    'Implemented real-time GitHub integration',
    'Added dark mode with system preference detection',
    'Improved accessibility with ARIA labels',
  ],
  metrics: {
    pageViews: 10000,
    projects: 15,
    technologies: 20,
    performanceScore: 98,
  },
  features: [
    {
      title: 'Server Components',
      description: 'Leveraging Next.js 15 Server Components',
      available: true,
    },
    {
      title: 'AI Integration',
      description: 'ChatGPT integration for interactive features',
      available: false,
    },
  ],
  challenges: [
    'Migrating from Pages Router to App Router',
    'Implementing SSR with dynamic content',
  ],
  learnings: [
    'Deep dive into React Server Components',
    'Advanced TypeScript patterns',
  ],
}
*/
