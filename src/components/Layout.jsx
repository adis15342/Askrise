import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import PageLoader from './PageLoader';

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <div className="site-main">
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
