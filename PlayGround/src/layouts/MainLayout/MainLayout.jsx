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
            isRotate={false}
            mouseInteraction
            pixelFilter={745}
            color1="#DE443B"
            color2="#006BB4"
            color3="#162325"
          />
        </div>
        {children}
      </main>
    </div>
  );
};
