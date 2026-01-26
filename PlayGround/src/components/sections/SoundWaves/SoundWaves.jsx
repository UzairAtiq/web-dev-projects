import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../../animations';
import styles from './SoundWaves.module.css';
import baseStyles from '../shared/SectionBase.module.css';

/**
 * Sound Waves Section
 * Audio visualizations and music experiments
 */
export const SoundWaves = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const notes = ['🎵', '🎶', '🎼', '♪', '♫'];

  return (
    <section id="sound-waves" className={styles.section} ref={ref}>
      {/* Floating music notes */}
      <div className={styles.musicNotes}>
        {[...Array(8)].map((_, i) => (
          <span
            key={i}
            className={styles.note}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          >
            {notes[Math.floor(Math.random() * notes.length)]}
          </span>
        ))}
      </div>

      {/* Background decorations */}
      <motion.div 
        className={styles.decoration1}
        animate={{ x: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div 
        className={styles.decoration2}
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
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
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          🎵
        </motion.span>
        
        <motion.h2 
          className={baseStyles.sectionTitle}
          variants={fadeInUp}
          style={{ color: '#14b8a6' }}
        >
          Sound Waves
        </motion.h2>
        
        <motion.p 
          className={baseStyles.sectionDescription}
          variants={fadeInUp}
        >
          Audio visualizations, music experiments, and sound design. 
          Where rhythm meets code.
        </motion.p>

        <motion.div 
          className={styles.visualizer}
          variants={fadeInUp}
        >
          {[...Array(10)].map((_, i) => (
            <div key={i} className={styles.bar} />
          ))}
        </motion.div>

        <motion.div 
          className={baseStyles.comingSoon}
          variants={fadeInUp}
        >
          <span 
            className={baseStyles.pulsingDot} 
            style={{ background: '#14b8a6' }}
          />
          Beats dropping soon
        </motion.div>
      </motion.div>
    </section>
  );
};
