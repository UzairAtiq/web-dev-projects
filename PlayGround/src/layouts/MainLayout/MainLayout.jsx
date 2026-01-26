import { Navbar, Sidebar } from '../../components/navigation';
import styles from './MainLayout.module.css';

/**
 * MainLayout Component
 * Primary layout wrapper with navigation elements
 */
export const MainLayout = ({ children }) => {
  return (
    <div className={styles.mainLayout}>
      <Navbar />
      <Sidebar />
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
};
