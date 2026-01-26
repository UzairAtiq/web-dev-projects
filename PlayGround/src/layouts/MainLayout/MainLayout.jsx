import { Navbar, Sidebar } from '../../components/navigation';
import { SkipLink } from '../../components/common';
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
        {children}
      </main>
    </div>
  );
};
