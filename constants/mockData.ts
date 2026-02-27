// constants/mockData.ts
export interface Technology {
  id: string;
  name: string;
  description: string;
  difficulty: 'Fácil' | 'Medio' | 'Difícil';
  icon: string;
}

export const technologies: Technology[] = [
  {
    id: '1',
    name: 'React Native',
    description: 'Framework para desarrollo móvil multiplataforma',
    difficulty: 'Medio',
    icon: '⚛️',
  },
  {
    id: '2',
    name: 'TypeScript',
    description: 'JavaScript con tipos estáticos',
    difficulty: 'Medio',
    icon: '🔷',
  },
  {
    id: '3',
    name: 'Expo',
    description: 'Plataforma para desarrollo con React Native',
    difficulty: 'Fácil',
    icon: '📱',
  },
  {
    id: '4',
    name: 'Expo Router',
    description: 'Navegación file-based para React Native',
    difficulty: 'Fácil',
    icon: '🧭',
  },
];
