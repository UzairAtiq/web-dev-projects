/**
 * Sections Configuration
 * Define all playground sections here
 * Each section will render as a full-viewport area
 */

export const sections = [
  {
    id: 'creative-lab',
    title: 'Creative Lab',
    shortTitle: 'Lab',
    description: 'Experiment with generative art, shaders, and creative coding.',
    icon: '🎨',
    emoji: '🎨',
    color: '#6366f1',
    gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    tags: ['Art', 'Generative', 'Creative'],
  },
  {
    id: 'motion-studio',
    title: 'Motion Studio',
    shortTitle: 'Motion',
    description: 'Advanced animation experiments and motion design playground.',
    icon: '🎬',
    emoji: '🎬',
    color: '#ec4899',
    gradient: 'linear-gradient(135deg, #ec4899 0%, #f472b6 100%)',
    tags: ['Animation', 'Motion', 'GSAP'],
  },
  {
    id: 'sound-waves',
    title: 'Sound Waves',
    shortTitle: 'Sound',
    description: 'Audio visualizations, music experiments, and sound design.',
    icon: '🎵',
    emoji: '🎵',
    color: '#14b8a6',
    gradient: 'linear-gradient(135deg, #14b8a6 0%, #2dd4bf 100%)',
    tags: ['Audio', 'Music', 'Visualizer'],
  },
  {
    id: 'game-zone',
    title: 'Game Zone',
    shortTitle: 'Games',
    description: 'Mini-games, interactive toys, and playful experiments.',
    icon: '🎮',
    emoji: '🎮',
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
    tags: ['Games', 'Interactive', 'Fun'],
  },
  {
    id: 'code-vault',
    title: 'Code Vault',
    shortTitle: 'Code',
    description: 'Useful code snippets, algorithms, and development tools.',
    icon: '💻',
    emoji: '💻',
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)',
    tags: ['Code', 'Tools', 'Dev'],
  },
];

/**
 * Get section by ID
 * @param {string} id - Section ID
 * @returns {Object|undefined} Section object or undefined
 */
export const getSectionById = (id) => {
  return sections.find(section => section.id === id);
};

/**
 * Get all section IDs
 * @returns {string[]} Array of section IDs
 */
export const getSectionIds = () => {
  return sections.map(section => section.id);
};

/**
 * Maximum number of favorites allowed in navbar
 */
export const MAX_FAVORITES = 5;
