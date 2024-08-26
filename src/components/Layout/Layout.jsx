import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import { Toaster } from 'react-hot-toast';

const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Layout;
