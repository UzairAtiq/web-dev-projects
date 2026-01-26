import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../../animations';
import styles from './CreativeLab.module.css';
import baseStyles from '../shared/SectionBase.module.css';

/**
 * Creative Lab Section
 * Generative art and creative coding experiments
 */
export const CreativeLab = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const showcaseItems = ['🎨', '✨', '🌈', '🔮', '💫', '🎭'];

  return (
    <section id="creative-lab" className={styles.section} ref={ref}>
      {/* Background decorations */}
      <motion.div 
        className={styles.decoration1}
        animate={{ 
          x: [0, 50, 0], 
          y: [0, -30, 0] 
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: 'easeInOut' 
        }}
      />
      <motion.div 
        className={styles.decoration2}
        animate={{ 
          x: [0, -30, 0], 
          y: [0, 40, 0] 
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: 'easeInOut' 
        }}
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
          whileHover={{ scale: 1.2, rotate: 10 }}
        >
          🎨
        </motion.span>
        
        <motion.h2 
          className={baseStyles.sectionTitle}
          variants={fadeInUp}
          style={{ color: '#6366f1' }}
        >
          Creative Lab
        </motion.h2>
        
        <motion.p 
          className={baseStyles.sectionDescription}
          variants={fadeInUp}
        >
          Experiment with generative art, shaders, and creative coding. 
          Where algorithms meet aesthetics.
        </motion.p>

        <motion.div 
          className={styles.showcase}
          variants={staggerContainer}
        >
          {showcaseItems.map((item, index) => (
            <motion.div
              key={index}
              className={styles.showcaseItem}
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.05, 
                rotate: Math.random() * 10 - 5 
              }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className={baseStyles.comingSoon}
          variants={fadeInUp}
        >
          <span 
            className={baseStyles.pulsingDot} 
            style={{ background: '#6366f1' }}
          />
          Experiments coming soon
        </motion.div>
      </motion.div>
    </section>
  );
};
