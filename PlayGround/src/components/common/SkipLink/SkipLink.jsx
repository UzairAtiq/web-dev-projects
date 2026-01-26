import styles from './SkipLink.module.css';

/**
 * SkipLink Component
 * Allows keyboard users to skip to main content
 */
export const SkipLink = ({ targetId = 'main-content', children = 'Skip to main content' }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.tabIndex = -1;
      target.focus();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a
      href={`#${targetId}`}
      className={styles.skipLink}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};
