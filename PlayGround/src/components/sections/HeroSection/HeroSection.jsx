import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { getRandomQuote, sections } from '../../../data';
import { useSectionNavigation } from '../../../context';
import HeroImage from '../../../assets/Hero_img_2.jpeg';
import { 
  fadeInUp, 
  fadeInLeft, 
  fadeInRight, 
  staggerContainer, 
  cardGridStagger,
  cardHover 
} from '../../../animations';
import styles from './HeroSection.module.css';

/**
 * HeroSection Component
 * Full-viewport landing section with inspirational quote and section cards
 */
export const HeroSection = () => {
  // Get a random quote on mount (changes on page refresh)
  const [quote, setQuote] = useState(() => getRandomQuote());
  const { navigateToSection } = useSectionNavigation();

  // Memoize the random quote to prevent re-renders
  const currentQuote = useMemo(() => quote, [quote]);

  const handleRefreshQuote = () => {
    let newQuote = getRandomQuote();
    // Ensure we get a different quote
    while (newQuote.id === currentQuote.id && sections.length > 1) {
      newQuote = getRandomQuote();
    }
    setQuote(newQuote);
  };

  const handleSectionClick = (sectionId) => {
    navigateToSection(sectionId);
  };

  return (
    <section className={styles.heroSection} id="hero">
      {/* Background Layer */}
      <div className={styles.heroBackground}>
        <img 
          src={HeroImage} 
          alt="Hero Background" 
          className={styles.heroBackgroundImage}
        />
        {/* Animated gradient orbs for visual interest */}
        <motion.div 
          className={`${styles.heroOrb} ${styles.heroOrb1}`}
          animate={{ 
            x: [0, 50, 0], 
            y: [0, 30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: 'easeInOut' 
          }}
        />
        <motion.div 
          className={`${styles.heroOrb} ${styles.heroOrb2}`}
          animate={{ 
            x: [0, -40, 0], 
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: 'easeInOut' 
          }}
        />
        <motion.div 
          className={`${styles.heroOrb} ${styles.heroOrb3}`}
          animate={{ 
            x: [0, 30, 0], 
            y: [0, 40, 0],
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: 'easeInOut' 
          }}
        />
        <div className={styles.heroBackgroundFallback} />
      </div>

      {/* Overlay */}
      <div className={styles.heroOverlay} />

      {/* Content */}
      <motion.div 
        className={styles.heroContent}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Sections Grid (Left) */}
        <motion.div 
          className={styles.sectionsArea}
          variants={fadeInLeft}
        >
          <h2 className={styles.sectionsTitle}>Explore Sections</h2>
          
          <motion.div 
            className={styles.sectionsGrid}
            variants={cardGridStagger}
          >
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                className={styles.sectionCard}
                onClick={() => handleSectionClick(section.id)}
                variants={fadeInUp}
                initial="rest"
                whileHover="hover"
                custom={index}
                style={{
                  '--card-color': section.color,
                }}
              >
                <div 
                  className={styles.cardGlow}
                  style={{ background: section.gradient }}
                />
                <div className={styles.cardIconWrapper}>
                  <img src={section.icon} alt={section.title} className={styles.cardIcon} />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{section.title}</h3>
                  <p className={styles.cardDescription}>{section.description}</p>
                </div>
                <span className={styles.cardArrow}>→</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Quote Section (Right) */}
        <motion.div 
          className={styles.quoteSection}
          variants={fadeInRight}
        >
          <div className={styles.quoteWrapper}>
            <motion.p 
              className={styles.quoteText}
              key={currentQuote.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {currentQuote.text}
            </motion.p>
            <div className={styles.quoteAuthor}>
              <span className={styles.authorName}>— {currentQuote.author}</span>
              <span className={styles.authorAnime}>{currentQuote.anime}</span>
            </div>
          </div>
          
          <motion.button
            className={styles.refreshButton}
            onClick={handleRefreshQuote}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className={styles.refreshIcon}>🔄</span>
            New Quote
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};
