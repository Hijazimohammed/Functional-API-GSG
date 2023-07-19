import React from 'react';
import { Header } from '../Header';
import Footer from '../Footer';

const MainLayout = ({ children }) => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
