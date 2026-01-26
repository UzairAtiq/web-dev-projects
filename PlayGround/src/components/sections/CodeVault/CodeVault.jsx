import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../../animations';
import styles from './CodeVault.module.css';
import baseStyles from '../shared/SectionBase.module.css';

/**
 * Code Vault Section
 * Useful code snippets and development tools
 */
export const CodeVault = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const tools = [
    { icon: '⚡', name: 'Snippets' },
    { icon: '🔧', name: 'Utils' },
    { icon: '📦', name: 'Packages' },
    { icon: '🎨', name: 'Themes' },
  ];

  return (
    <section id="code-vault" className={styles.section} ref={ref}>
      {/* Background decorations */}
      <motion.div 
        className={styles.decoration1}
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div 
        className={styles.decoration2}
        animate={{ x: [0, -20, 0], y: [0, -30, 0] }}
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
        >
          💻
        </motion.span>
        
        <motion.h2 
          className={baseStyles.sectionTitle}
          variants={fadeInUp}
          style={{ color: '#8b5cf6' }}
        >
          Code Vault
        </motion.h2>
        
        <motion.p 
          className={baseStyles.sectionDescription}
          variants={fadeInUp}
        >
          Useful code snippets, algorithms, and development tools. 
          Your coding treasure chest.
        </motion.p>

        <motion.div 
          className={styles.codeShowcase}
          variants={fadeInUp}
        >
          <div className={styles.codeBlock}>
            <div className={styles.codeHeader}>
              <span className={`${styles.codeDot} ${styles.dotRed}`} />
              <span className={`${styles.codeDot} ${styles.dotYellow}`} />
              <span className={`${styles.codeDot} ${styles.dotGreen}`} />
            </div>
            <div className={styles.codeLine}>
              <span className={styles.lineNumber}>1</span>
              <span className={styles.lineContent}>
                <span className={styles.keyword}>const</span>{' '}
                <span className={styles.variable}>playground</span> = {'{'}
              </span>
            </div>
            <div className={styles.codeLine}>
              <span className={styles.lineNumber}>2</span>
              <span className={styles.lineContent}>
                {'  '}<span className={styles.function}>fun</span>:{' '}
                <span className={styles.string}>'unlimited'</span>,
              </span>
            </div>
            <div className={styles.codeLine}>
              <span className={styles.lineNumber}>3</span>
              <span className={styles.lineContent}>
                {'  '}<span className={styles.function}>creativity</span>:{' '}
                <span className={styles.string}>'∞'</span>
              </span>
            </div>
            <div className={styles.codeLine}>
              <span className={styles.lineNumber}>4</span>
              <span className={styles.lineContent}>
                {'}'};
                <span className={styles.cursor} />
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className={styles.toolsGrid}
          variants={staggerContainer}
        >
          {tools.map((tool) => (
            <motion.div
              key={tool.name}
              className={styles.toolCard}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{tool.icon}</span>
              <span>{tool.name}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className={baseStyles.comingSoon}
          variants={fadeInUp}
        >
          <span 
            className={baseStyles.pulsingDot} 
            style={{ background: '#8b5cf6' }}
          />
          Compiling more tools
        </motion.div>
      </motion.div>
    </section>
  );
};
