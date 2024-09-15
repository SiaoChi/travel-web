// src/components/Menu/Menu.jsx

import logo from '/logo.png'; 
import './Menu.css';
import { useState ,useCallback, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Menu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    const handleMenuItemClick = useCallback((event, targetId) => {
    event.preventDefault();
    setIsMenuOpen(false);

    const isOnHomePage = window.location.pathname === '/' || window.location.pathname === '/index.html';
    

    const navigateToTarget = () => {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const menuHeight = document.querySelector('.menu').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - menuHeight - 60;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      } else {
        console.log('can not find target');
      }
    };


    if (!isOnHomePage) {
      navigate(`./${targetId}`);
      setTimeout(() => {
      window.history.pushState(null, '', targetId);
      navigateToTarget()
      }, 200);
    } else  {
      window.history.pushState(null, '', targetId);
      navigateToTarget();
  }
}, []);


  return (
    /* 網頁版menu */ 
    <>
    <header className='menu flex justify-center'>
        <div className="flex justify-between w-full px-6 max-w-[1500px]">
          <div className="flex-shrink-0 ml-[3vw]">
            <a href="https://www.transglobe.com.tw/" target="_blank" rel="noopener noreferrer">
              <img src={logo} alt="Logo" className="" />
            </a>
          </div>

          {/* Navigation Menu */}
          <nav className="flex space-x-7">
            <a href="/" className="relative menu-text" onClick={(e) => handleMenuItemClick(e, '#sec1')}>
                跨年出國抽
                <p className="color-changing-text absolute top-[-13%] right-[-2%] w-7 h-7 transfer-position-xy-1 flex items-center justify-center text-xs font-bold font-roboto transform rotate-12">NEW</p>
            </a>        
            <a href="/" className="menu-text" onClick={(e) => handleMenuItemClick(e, '#sec2')}>投保滿額抽</a>
            <a href="/" className="menu-text" onClick={(e) => handleMenuItemClick(e, '#sec3')}>首次投保抽</a>
            <Link to="/mgm" className="menu-text">分享全球抽</Link>
            <Link to="/policy" className="menu-text">活動辦法</Link>
          </nav>
        </div>
    </header>

      {/* 手機版 Menu */}
      <header className={`mobile-menu xl:hidden ${isMenuOpen ? 'h-full' : ''}`}>
          <div className={`flex-shrink-0 w-[26vw] ml-[3vw] mt-2 ${isMenuOpen ? 'hidden' : 'block'}`}>
            <a href="https://www.transglobe.com.tw/" target="_blank" rel="noopener noreferrer">
              <img src={logo} alt="Logo" className="" />
            </a>
          </div>

          {/* 漢堡按鈕 */}
          <button 
            className="absolute top-3 right-4 flex items-center justify-center" 
            onClick={toggleMenu}
          >
            <img 
              src="./menu/menu-hamburger.svg"
              alt="Open Menu" 
              className={`h-12 w-12 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
            />
            <img 
              src="./menu/menu-close-sm.svg"
              alt="Close Menu" 
              className={`h-12 w-12 absolute transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
            />
          </button>

          {/* Navigation Menu */}
          <div className='flex flex-col items-center justify-center w-[100vw]'>
           <nav className={`static flex flex-col items-center justify-center space-y-4 ${isMenuOpen ? '' : 'hidden'}`}>

             <nav className="flex flex-col space-y-6 px-14">
              <a href="/" className="relative mobile-text" onClick={(e) => handleMenuItemClick(e, '#sec1')}>
                跨年出國抽
                <p className="color-changing-text absolute top-[-13%] right-[-2%] w-5 h-7 transfer-position-xy-1 flex items-center justify-center text-xs font-bold font-roboto transform rotate-30">NEW</p>
              </a>        
              <a href="/" className="mobile-text" onClick={(e) => handleMenuItemClick(e, '#sec2')}>投保滿額抽</a>
              <a href="/" className="mobile-text" onClick={(e) => handleMenuItemClick(e, '#sec3')}>首次投保抽</a>
              <Link to="/mgm" className="mobile-text" onClick={toggleMenu}>分享全球抽</Link>
              <Link to="/policy" className="mobile-text" onClick={toggleMenu}>活動辦法</Link>
            </nav>
          </nav>
          </div>
      </header>
    </>
  );
}


export default Menu;