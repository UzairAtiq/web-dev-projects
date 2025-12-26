import { motion } from 'framer-motion';
import './About.css';

/**
 * About Component - Introduction and background section
 * Displays personal information and core competencies
 */
const About = () => {
  // Animation configuration for scroll-triggered animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
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
    <section className="about" id="about">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <p>
              I'm a passionate <strong>AI Student</strong> and{' '}
              <strong>Full Stack Developer</strong> with a deep interest in
              machine learning, artificial intelligence, and modern web
              technologies. I love solving complex problems and building
              solutions that make a difference.
            </p>
            <p>
              My journey in technology started with a fascination for how things
              work, which evolved into creating intelligent systems and seamless
              user experiences. I'm constantly learning and exploring new
              technologies to stay at the forefront of innovation.
            </p>
            <p>
              When I'm not coding, you'll find me contributing to open-source
              projects, writing technical blogs, or exploring the latest
              advancements in AI and web development.
            </p>
          </motion.div>

          <motion.div
            className="about-highlights"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            <motion.div className="highlight-card" variants={fadeInUp}>
              <div className="highlight-icon">🎓</div>
              <h3>Education</h3>
              <p>Pursuing AI & Computer Science</p>
            </motion.div>

            <motion.div className="highlight-card" variants={fadeInUp}>
              <div className="highlight-icon">💼</div>
              <h3>Experience</h3>
              <p>Full Stack Development & AI/ML Projects</p>
            </motion.div>

            <motion.div className="highlight-card" variants={fadeInUp}>
              <div className="highlight-icon">🚀</div>
              <h3>Focus</h3>
              <p>Building Intelligent Web Applications</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
