import accessibilityData from '@/lotties/accessibility.json';
import designData from '@/lotties/figma.json';
import performanceData from '@/lotties/performance.json';
import responsiveData from '@/lotties/responsive.json';
import technologiesData from '@/lotties/technologies.json';

export type Principle = {
  title: string;
  icon: Record<string, unknown>;
  description: string;
  color: string;
  gradient?: string;
  accent?: string;
};

export const principles: Principle[] = [
  {
    title: 'Responsive Design',
    icon: responsiveData,
    description: 'Seamless experiences across all devices, from mobile to desktop.',
    color: '#10B981', // Emerald-500
    gradient: 'linear-gradient(135deg, #10B981 0%, #34D399 100%)',
    accent: '#D1FAE5',
  },
  {
    title: 'Trending Technologies',
    icon: technologiesData,
    description: 'Cutting-edge tools and frameworks for modern web development.',
    color: '#6366F1', // Indigo-500
    gradient: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
    accent: '#E0E7FF',
  },
  {
    title: 'Performance',
    icon: performanceData,
    description: 'Lightning-fast load times and optimized user experiences.',
    color: '#F59E0B', // Amber-500
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)',
    accent: '#FEF3C7',
  },
  {
    title: 'Accessibility',
    icon: accessibilityData,
    description: 'Inclusive design that ensures everyone can use your product.',
    color: '#EC4899', // Pink-500
    gradient: 'linear-gradient(135deg, #EC4899 0%, #F472B6 100%)',
    accent: '#FCE7F3',
  },
  {
    title: 'Beautiful Design',
    icon: designData,
    description: 'Stunning visual experiences that captivate and engage users.',
    color: '#8B5CF6', // Violet-500
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)',
    accent: '#EDE9FE',
  },
];
