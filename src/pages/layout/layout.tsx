import { Outlet } from 'react-router-dom';
import styles from './layout.module.css';
import { Header } from 'components/header/header';
import { Footer } from 'components/footer/footer';
import { PageLayout } from 'ui/pagelayout/pagelayout';
import { Main } from 'pages/main/main';

export function Layout() {
  return (
    <>
      <main>
          <div className={styles.main}>
            <Main />
            <PageLayout content={<Outlet />} />
          </div>
      </main>
        <Footer/>
    </>
  );
}