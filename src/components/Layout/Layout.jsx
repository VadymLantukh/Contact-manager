import { Toaster } from 'react-hot-toast';
import { SyncLoader } from 'react-spinners';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import AppBar from '../AppBar/AppBar';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense
        fallback={
          <div className={css.boxSpinners}>
            <SyncLoader color="#F02828" size="20px" />
          </div>
        }
      >
        <Outlet />
      </Suspense>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Layout;
