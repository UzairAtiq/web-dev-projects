/**
 * Sections Configuration
 * Define all playground sections here
 * Each section will render as a full-viewport area
 */

import PictureIcon from '../assets/Icons/Picture.jpg';
import VideoIcon from '../assets/Icons/Video.jpg';
import MusicIcon from '../assets/Icons/Music.jpg';
import GameIcon from '../assets/Icons/Game.jpg';
import GoonIcon from '../assets/Icons/Goon.jpg';

export const sections = [
  {
    id: 'picture-gallery',
    title: 'Picture Gallery',
    shortTitle: 'Pictures',
    description: 'Beautiful collection of images in modern sleek frames.',
    icon: PictureIcon,
    emoji: '🖼️',
    color: '#6366f1',
    gradient: 'linear-gradient(135deg, rgba(99, 102, 241, 0.3) 0%, rgba(139, 92, 246, 0.3) 100%)',
    tags: ['Photos', 'Gallery', 'Images'],
  },
  {
    id: 'video-studio',
    title: 'Video Studio',
    shortTitle: 'Videos',
    description: 'Watch and preview videos with an elegant player interface.',
    icon: VideoIcon,
    emoji: '🎬',
    color: '#ec4899',
    gradient: 'linear-gradient(135deg, rgba(236, 72, 153, 0.3) 0%, rgba(244, 114, 182, 0.3) 100%)',
    tags: ['Videos', 'Movies', 'Player'],
  },
  {
    id: 'music-player',
    title: 'Music Player',
    shortTitle: 'Music',
    description: 'Listen to your favorite tracks with stunning visualizations.',
    icon: MusicIcon,
    emoji: '🎵',
    color: '#14b8a6',
    gradient: 'linear-gradient(135deg, rgba(20, 184, 166, 0.3) 0%, rgba(45, 212, 191, 0.3) 100%)',
    tags: ['Music', 'Audio', 'Visualizer'],
  },
  {
    id: 'game-zone',
    title: 'Game Zone',
    shortTitle: 'Games',
    description: 'Play fun web games with beautiful designs and animations.',
    icon: GameIcon,
    emoji: '🎮',
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.3) 0%, rgba(251, 191, 36, 0.3) 100%)',
    tags: ['Games', 'Interactive', 'Fun'],
  },
  {
    id: 'goon-section',
    title: 'Goon Section',
    shortTitle: 'Goon',
    description: 'Coming soon - exciting features await!',
    icon: GoonIcon,
    emoji: '🚀',
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.3) 0%, rgba(167, 139, 250, 0.3) 100%)',
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
