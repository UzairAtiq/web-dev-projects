import { motion } from 'framer-motion';
import './Skills.css';

/**
 * Skills Component - Display technical skills and expertise
 * Categorized by technology type with animated skill cards
 */
const Skills = () => {
  // Skills data organized by category
  const skillsData = [
    {
      category: 'Programming Languages',
      icon: '💻',
      skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'SQL'],
    },
    {
      category: 'Web Development',
      icon: '🌐',
      skills: ['React', 'Node.js', 'Express', 'Next.js', 'HTML/CSS', 'TailwindCSS'],
    },
    {
      category: 'AI & Machine Learning',
      icon: '🤖',
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP', 'Computer Vision', 'Deep Learning'],
    },
    {
      category: 'Database & Tools',
      icon: '🛠️',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Git', 'Docker'],
    },
    {
      category: 'Cloud & DevOps',
      icon: '☁️',
      skills: ['AWS', 'Azure', 'CI/CD', 'Linux', 'Kubernetes', 'Firebase'],
    },
    {
      category: 'Other Skills',
      icon: '⚡',
      skills: ['REST APIs', 'GraphQL', 'Agile', 'Problem Solving', 'Team Collaboration', 'UI/UX'],
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section className="skills" id="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            A comprehensive overview of my technical skills and proficiencies
            across various technologies and domains.
          </p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              className="skill-category"
              variants={categoryVariants}
            >
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-title">{category.category}</h3>
              </div>

              <motion.div
                className="skills-list"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                    },
                  },
                }}
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item"
                    variants={skillVariants}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional proficiency indicators */}
        <motion.div
          className="proficiency-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="proficiency-title">Core Competencies</h3>
          <div className="proficiency-bars">
            <div className="proficiency-item">
              <div className="proficiency-label">
                <span>Full Stack Development</span>
                <span className="proficiency-percent">90%</span>
              </div>
              <div className="proficiency-bar">
                <motion.div
                  className="proficiency-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: '90%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                />
              </div>
            </div>

            <div className="proficiency-item">
              <div className="proficiency-label">
                <span>AI & Machine Learning</span>
                <span className="proficiency-percent">85%</span>
              </div>
              <div className="proficiency-bar">
                <motion.div
                  className="proficiency-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: '85%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                />
              </div>
            </div>

            <div className="proficiency-item">
              <div className="proficiency-label">
                <span>Problem Solving & Algorithms</span>
                <span className="proficiency-percent">88%</span>
              </div>
              <div className="proficiency-bar">
                <motion.div
                  className="proficiency-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: '88%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
                />
              </div>
            </div>

            <div className="proficiency-item">
              <div className="proficiency-label">
                <span>UI/UX Design</span>
                <span className="proficiency-percent">80%</span>
              </div>
              <div className="proficiency-bar">
                <motion.div
                  className="proficiency-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: '80%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
