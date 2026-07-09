import { motion } from 'framer-motion';
import './Hero.css';

/**
 * Hero Component - Landing section with introduction
 * Features animated text and call-to-action button
 */
const Hero = () => {
  // Animation variants for staggered text animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="hero" id="home">
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-greeting" variants={itemVariants}>
          <span className="wave">👋</span> Hi, I'm
        </motion.div>

        <motion.h1 className="hero-name" variants={itemVariants}>
          Uzair
        </motion.h1>

        <motion.h2 className="hero-title" variants={itemVariants}>
          AI Student & Full Stack Developer
        </motion.h2>

        <motion.p className="hero-description" variants={itemVariants}>
          Passionate about building intelligent systems and creating seamless
          web experiences. Specializing in AI/ML and modern web technologies.
        </motion.p>

        <motion.div className="hero-buttons" variants={itemVariants}>
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get In Touch
          </a>
        </motion.div>

        {/* Animated scroll indicator */}
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          <span>↓</span>
        </motion.div>
      </motion.div>

      {/* Animated background elements */}
      <div className="hero-bg">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>
      </div>
    </section>
  );
};

export default Hero;
