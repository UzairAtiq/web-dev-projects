import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../../animations';
import styles from './MotionStudio.module.css';
import baseStyles from '../shared/SectionBase.module.css';

/**
 * Motion Studio Section
 * Animation experiments and motion design playground
 */
export const MotionStudio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="motion-studio" className={styles.section} ref={ref}>
      {/* Background decorations */}
      <motion.div 
        className={styles.decoration1}
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div 
        className={styles.decoration2}
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
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
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🎬
        </motion.span>
        
        <motion.h2 
          className={baseStyles.sectionTitle}
          variants={fadeInUp}
          style={{ color: '#ec4899' }}
        >
          Motion Studio
        </motion.h2>
        
        <motion.p 
          className={baseStyles.sectionDescription}
          variants={fadeInUp}
        >
          Advanced animation experiments and motion design playground. 
          Bringing interfaces to life.
        </motion.p>

        <motion.div 
          className={styles.animationShowcase}
          variants={fadeInUp}
        >
          <div className={`${styles.animBox} ${styles.boxBounce}`}>↕️</div>
          <div className={`${styles.animBox} ${styles.boxRotate}`}>🔄</div>
          <div className={`${styles.animBox} ${styles.boxPulse}`}>💗</div>
          <div className={`${styles.animBox} ${styles.boxFloat}`}>🎈</div>
        </motion.div>

        <motion.div 
          className={baseStyles.comingSoon}
          variants={fadeInUp}
        >
          <span 
            className={baseStyles.pulsingDot} 
            style={{ background: '#ec4899' }}
          />
          More animations loading
        </motion.div>
      </motion.div>
    </section>
  );
};
