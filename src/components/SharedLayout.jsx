import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from './header/Header';
import Loader from './loader/Loader';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
