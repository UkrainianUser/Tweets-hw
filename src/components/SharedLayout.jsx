import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from './header/Header';
import Loader from './loader/Loader';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
