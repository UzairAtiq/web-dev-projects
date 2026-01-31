import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './GameZone.module.css';
import NumberGuess from './games/NumberGuess';
import TicTacToe from './games/TicTacToe';
import SpaceShooter from './games/SpaceShooter';

/**
 * Game Zone Section
 * Collection of fun web games with beautiful animations
 */
export const GameZone = () => {
  const [selectedGame, setSelectedGame] = useState(null);

  const games = [
    {
      id: 'number-guess',
      title: 'Number Guessing',
      description: 'Guess the secret number between 1-100',
      icon: '🎯',
      color: '#f59e0b',
      component: NumberGuess
    },
    {
      id: 'tic-tac-toe',
      title: 'Tic Tac Toe',
      description: 'Classic game with modern design',
      icon: '❌⭕',
      color: '#ef4444',
      component: TicTacToe
    },
    {
      id: 'space-shooter',
      title: 'Space Shooter',
      description: 'Defend Earth from alien invaders',
      icon: '🚀',
      color: '#8b5cf6',
      component: SpaceShooter
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className={styles.gameZone}>
      <AnimatePresence mode="wait">
        {!selectedGame ? (
          <motion.div
            key="game-selection"
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, scale: 0.9 }}
            className={styles.selection}
          >
            <div className={styles.header}>
              <h2 className={styles.title}>Game Zone</h2>
              <p className={styles.subtitle}>Choose your adventure</p>
            </div>

            <motion.div
              className={styles.grid}
              variants={containerVariants}
            >
              {games.map((game) => (
                <motion.div
                  key={game.id}
                  className={styles.gameCard}
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, y: -10 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedGame(game)}
                  style={{ '--game-color': game.color }}
                >
                  <div className={styles.cardGlow} />
                  <div className={styles.iconWrapper}>
                    <span className={styles.icon}>{game.icon}</span>
                  </div>
                  <h3 className={styles.gameTitle}>{game.title}</h3>
                  <p className={styles.gameDesc}>{game.description}</p>
                  <div className={styles.playButton}>
                    <span>Play Now</span>
                    <span className={styles.arrow}>→</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="game-play"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={styles.gameContainer}
          >
            <button
              className={styles.backButton}
              onClick={() => setSelectedGame(null)}
            >
              ← Back to Games
            </button>
            <selectedGame.component />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
