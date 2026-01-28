/**
 * Sections Configuration
 * Define all playground sections here
 * Each section will render as a full-viewport area
 */

export const sections = [
  {
    id: 'picture-gallery',
    title: 'Picture Gallery',
    shortTitle: 'Pictures',
    description: 'Beautiful collection of images in modern sleek frames.',
    icon: '🖼️',
    emoji: '🖼️',
    color: '#6366f1',
    gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    tags: ['Photos', 'Gallery', 'Images'],
  },
  {
    id: 'video-studio',
    title: 'Video Studio',
    shortTitle: 'Videos',
    description: 'Watch and preview videos with an elegant player interface.',
    icon: '🎬',
    emoji: '🎬',
    color: '#ec4899',
    gradient: 'linear-gradient(135deg, #ec4899 0%, #f472b6 100%)',
    tags: ['Videos', 'Movies', 'Player'],
  },
  {
    id: 'music-player',
    title: 'Music Player',
    shortTitle: 'Music',
    description: 'Listen to your favorite tracks with stunning visualizations.',
    icon: '🎵',
    emoji: '🎵',
    color: '#14b8a6',
    gradient: 'linear-gradient(135deg, #14b8a6 0%, #2dd4bf 100%)',
    tags: ['Music', 'Audio', 'Visualizer'],
  },
  {
    id: 'game-zone',
    title: 'Game Zone',
    shortTitle: 'Games',
    description: 'Play fun web games with beautiful designs and animations.',
    icon: '🎮',
    emoji: '🎮',
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
    tags: ['Games', 'Interactive', 'Fun'],
  },
  {
    id: 'goon-section',
    title: 'Goon Section',
    shortTitle: 'Goon',
    description: 'Coming soon - exciting features await!',
    icon: '🚀',
    emoji: '🚀',
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)',
    tags: ['Coming Soon', 'Special', 'Mystery'],
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
