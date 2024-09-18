import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import HomePage from './pages/HomePage/HomePage';
import MgmPage from './pages/MgmPage/MgmPage';
import PolicyPage from './pages/PolicyPage/PolicyPage';
import Menu from "./components/Menu/Menu";
import Footer from './components/Footer/Footer';

const ScrollTopBtn = styled.img`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 10;
  cursor: pointer;
  display: ${props => props.$show ? 'block' : 'none'};
  @media (max-width: 1301px) {
    width: 50px;
  }
`;

function App() {
  const isGithubPages = window.location.hostname === 'siaochi.github.io';
  const basename = isGithubPages ? '/travel-web' : '/'; 
  const [showScrollTopBtn, setShowScrollTopBtn] = useState(false);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        setShowScrollTopBtn(true);
      } else {
        setShowScrollTopBtn(false);
      }
    });
  },[]);
  

  return (
    <Router basename={basename}>
      <Menu />  
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mgm" element={<MgmPage />} />
        <Route path="/policy" element={<PolicyPage />} />
      </Routes>
      <Footer />
      <ScrollTopBtn src="/top-btn.svg" onClick={handleScrollTop} $show={showScrollTopBtn}/>
    </Router>
  );
}

export default App;

