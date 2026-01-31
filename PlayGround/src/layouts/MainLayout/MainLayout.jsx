import { Navbar, Sidebar } from '../../components/navigation';
import { SkipLink, Balatro } from '../../components/common';
import styles from './MainLayout.module.css';

/**
 * MainLayout Component
 * Primary layout wrapper with navigation elements
 */
export const MainLayout = ({ children }) => {
  return (
    <div className={styles.mainLayout}>
      <SkipLink targetId="main-content" />
      <Navbar />
      <Sidebar />
      <main id="main-content" className={styles.mainContent}>
        <div className={styles.balatroBg}>
          <Balatro
            isRotate={true}
            mouseInteraction
            pixelFilter={600}
            color1="#8b5cf6"
            color2="#3b82f6"
            color3="#1e1b4b"
            spinSpeed={3}
            contrast={2.5}
          />
        </div>
        {children}
      </main>
    </div>
  );
};
