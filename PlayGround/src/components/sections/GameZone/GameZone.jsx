import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleIn } from '../../../animations';
import styles from './GameZone.module.css';
import baseStyles from '../shared/SectionBase.module.css';

/**
 * Game Zone Section
 * Mini-games and interactive experiments
 */
export const GameZone = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const games = [
    { icon: '🎮', title: 'Arcade', status: 'Coming Soon' },
    { icon: '🧩', title: 'Puzzles', status: 'Coming Soon' },
    { icon: '🎯', title: 'Target', status: 'Coming Soon' },
    { icon: '🏃', title: 'Runner', status: 'Coming Soon' },
  ];

  return (
    <section id="game-zone" className={styles.section} ref={ref}>
      {/* Background decorations */}
      <motion.div 
        className={styles.decoration1}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div 
        className={styles.decoration2}
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div 
        className={baseStyles.sectionContent}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.span 
          className={baseStyles.sectionIcon}
          variants={fadeInUp}
          whileHover={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.5 }}
        >
          🎮
        </motion.span>
        
        <motion.h2 
          className={baseStyles.sectionTitle}
          variants={fadeInUp}
          style={{ color: '#f59e0b' }}
        >
          Game Zone
        </motion.h2>
        
        <motion.p 
          className={baseStyles.sectionDescription}
          variants={fadeInUp}
        >
          Mini-games, interactive toys, and playful experiments. 
          Level up your fun!
        </motion.p>

        <motion.div 
          className={styles.gameShowcase}
          variants={staggerContainer}
        >
          {games.map((game, index) => (
            <motion.div
              key={game.title}
              className={styles.gameCard}
              variants={scaleIn}
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.95 }}
              custom={index}
            >
              <span className={styles.gameIcon}>{game.icon}</span>
              <span className={styles.gameTitle}>{game.title}</span>
              <span className={styles.gameStatus}>{game.status}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className={baseStyles.comingSoon}
          variants={fadeInUp}
        >
          <span 
            className={baseStyles.pulsingDot} 
            style={{ background: '#f59e0b' }}
          />
          Insert coin to continue
        </motion.div>
      </motion.div>
    </section>
  );
};
