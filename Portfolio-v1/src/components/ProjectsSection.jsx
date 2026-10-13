/**
 * ProjectsSection.jsx - Projects Grid Section
 * 
 * Displays selected projects in a responsive card grid.
 * Uses array mapping for clean, maintainable code.
 */

import './ProjectsSection.css';

// ═══════════════════════════════════════════════════════════
// PROJECT DATA - Easy to update and extend
// ═══════════════════════════════════════════════════════════
const projects = [
  {
    id: 1,
    title: 'Anime List Tracker',
    description: 'Anime tracking app with modern UI and persistent state',
    demoUrl: 'https://anime-list-tracker.vercel.app',
  },
  {
    id: 2,
    title: 'Online Gallery',
    description: 'Image gallery web app with clean layout and navigation',
    demoUrl: 'https://online-gallery-nu.vercel.app',
  },
  {
    id: 3,
    title: 'Mac Control Interface',
    description: 'macOS-inspired control interface built with React',
    demoUrl: 'https://mac-control-interface.vercel.app/',
  },
];

function ProjectsSection() {
  return (
    <section className="projects-section" aria-labelledby="projects-heading">
      {/* Section Header */}
      <div className="projects-header">
        <h2 id="projects-heading" className="projects-title">Selected Projects</h2>
        <p className="projects-subtitle">Real-world projects deployed on Vercel</p>
      </div>
      
      {/* Projects Grid */}
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.id} className="project-card">
            {/* Card Number */}
            <span className="card-number" aria-hidden="true">
              {String(project.id).padStart(2, '0')}
            </span>
            
            {/* Card Content */}
            <div className="card-content">
              <h3 className="card-title">{project.title}</h3>
              <p className="card-description">{project.description}</p>
            </div>
            
            {/* Demo Button */}
            <a 
              href={project.demoUrl}
              className="card-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
              <svg 
                className="button-arrow" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
