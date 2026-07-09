import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './Projects.css';

/**
 * Projects Component - Showcase portfolio projects
 * Displays project cards with hover effects and links
 */
const Projects = () => {
  // Project data - customize with your actual projects
  const projects = [
    {
      id: 1,
      title: 'AI-Powered Chatbot',
      description:
        'An intelligent chatbot using NLP and machine learning to provide contextual responses. Built with Python, TensorFlow, and Flask.',
      tags: ['Python', 'TensorFlow', 'NLP', 'Flask'],
      github: 'https://github.com/yourusername/ai-chatbot',
      demo: 'https://demo-link.com',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description:
        'Full-stack e-commerce solution with real-time inventory, payment integration, and admin dashboard. Built with React, Node.js, and MongoDB.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/yourusername/ecommerce',
      demo: 'https://demo-link.com',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    },
    {
      id: 3,
      title: 'Image Recognition System',
      description:
        'Deep learning model for image classification with 95% accuracy. Implemented using PyTorch with a custom CNN architecture.',
      tags: ['PyTorch', 'Computer Vision', 'Python', 'OpenCV'],
      github: 'https://github.com/yourusername/image-recognition',
      demo: 'https://demo-link.com',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    },
    {
      id: 4,
      title: 'Task Management App',
      description:
        'Collaborative task management tool with real-time updates, drag-and-drop interface, and team collaboration features.',
      tags: ['React', 'Firebase', 'TypeScript', 'Material-UI'],
      github: 'https://github.com/yourusername/task-manager',
      demo: 'https://demo-link.com',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    },
    {
      id: 5,
      title: 'Weather Forecast Dashboard',
      description:
        'Real-time weather dashboard with interactive maps, hourly forecasts, and AI-powered weather predictions.',
      tags: ['React', 'APIs', 'D3.js', 'Machine Learning'],
      github: 'https://github.com/yourusername/weather-dashboard',
      demo: 'https://demo-link.com',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    },
    {
      id: 6,
      title: 'Social Media Analytics',
      description:
        'Analytics platform for social media insights with sentiment analysis, trend detection, and comprehensive reporting.',
      tags: ['Python', 'React', 'NLP', 'PostgreSQL'],
      github: 'https://github.com/yourusername/social-analytics',
      demo: 'https://demo-link.com',
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
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

  return (
    <section className="projects" id="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Here are some of my recent projects showcasing my skills in AI,
            machine learning, and full-stack development.
          </p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={cardVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="project-header"
                style={{ background: project.gradient }}
              >
                <div className="project-number">0{project.id}</div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label="View source code"
                  >
                    <FiGithub /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-link-primary"
                    aria-label="View live demo"
                  >
                    <FiExternalLink /> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
