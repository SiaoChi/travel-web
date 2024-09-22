// src/components/Menu/Menu.jsx

import logo from '/logo.png'; 
import './Menu.css';
import { useState ,useCallback, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Menu() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const currentLocation = useLocation();
  const [activePath, setActivePath] = useState(currentLocation.hash || currentLocation.pathname);

  // 當路徑改變時，滾動到頂部，並更新 activePath
  useEffect(() => {
    window.scrollTo(0, 0);
    setActivePath(currentLocation.hash || currentLocation.pathname); // 更新 activePath
  }, [currentLocation]);

  // 切換 menu 開關
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // 處理 menu 項目點擊行為
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
          behavior: 'smooth',
        });
        // 更新 activePath 為目標區塊的 ID
        setActivePath(targetId);
      } else {
        console.log('can not find target');
      }
    };

    if (!isOnHomePage) {
      navigate(`/${targetId}`);
      setTimeout(() => {
        window.history.pushState(null, '', targetId);
        navigateToTarget();
      }, 200);
    } else {
      window.history.pushState(null, '', targetId);
      navigateToTarget();
    }
  }, [navigate]);

  // 根據當前路徑動態設置 menu item 的 class
  const getMenuItemClass = (path) => {
    return activePath === path ? 'menu-text bg-c-orange' : 'menu-text';
  };


  return (
    /* 網頁版menu */ 
    <>
      <header className='menu justify-center bg-bg-yellow'>
        <div className="flex justify-between w-full px-6 max-w-[1500px]">
          <div className="flex-shrink-0 ml-[3vw]">
            <a href="https://www.transglobe.com.tw/" target="_blank" rel="noopener noreferrer">
              <img src={logo} alt="Logo" className="" />
            </a>
          </div>

          {/* Navigation Menu */}
          <nav className="flex space-x-7">
            {/* <Link 
              to="/" 
              className={`relative menu-text ${getMenuItemClass('#sec1')}`} 
              onClick={(e) => handleMenuItemClick(e, '#sec1')}
            >
              跨年出國抽
            
              <img src="./menu/new.gif" alt="NEW" className="absolute top-[-10%] right-0 w-7  transform translate-x-1 translate-y-1 rotate-12"/>
            </Link>
            */}  
            <a href="/" className={`menu-text ${getMenuItemClass('#sec2')}`} onClick={(e) => handleMenuItemClick(e, '#sec2')}>投保滿額抽</a>
            <a href="/" className={`menu-text ${getMenuItemClass('#sec3')}`} onClick={(e) => handleMenuItemClick(e, '#sec3')}>首次投保抽</a>
            <Link to="/mgm" className={`menu-text ${getMenuItemClass('/mgm')}`}>分享全球抽</Link>
            <Link to="/policy" className={`menu-text ${getMenuItemClass('/policy')}`}>活動辦法</Link>
          </nav>
        </div>
      </header>

      {/* 手機版 Menu */}
      <header className={`mobile-menu  xl:hidden ${isMenuOpen ? 'h-full' : ''}`}>
          <div className={`flex-shrink-0 w-[30vw] ml-[3vw] mt-1 ${isMenuOpen ? 'hidden' : 'block'}`}>
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
              {/* <a href="/" className="relative mobile-text" onClick={(e) => handleMenuItemClick(e, '#sec1')}>
                跨年出國抽
              <img src="./menu/new.gif" alt="NEW" className="absolute top-[-10%] right-0 w-7  transform translate-x-1 translate-y-1 rotate-12"/>
              </a>         */}
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