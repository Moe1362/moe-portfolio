import React, { useState } from 'react';
import { useEffect } from 'react';
import NavTabs from './NavTabs';
import Footer from './Footer';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

const styles = {
  all: {
    background: '#b5c6e0',
  },
  container: {

    minHeight: 'calc(100vh - 100px)',
  },
};

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');
  useEffect(() => {
    document.title = currentPage;
  }, [currentPage]);

  const renderPage = () => {
    // Check the value of currentPage and render the corresponding component
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    // If none of the above conditions match, render the About component
    return <About />;
  };
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div style={styles.all}>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <div style={styles.container}>{renderPage()}</div>
      <Footer />
    </div>
  );
}
