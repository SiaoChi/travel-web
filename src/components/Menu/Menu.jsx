// src/components/Menu/Menu.jsx

import logo from '/logo.png'; 
import './Menu.css';
import { useState } from 'react';


function Menu() {
    // 使用 useState 來控制菜單的顯示狀態
  const [isMenuOpen, setIsMenuOpen] = useState(false);

    // 切換菜單顯示狀態的函數
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

  
  return (
    /* 網頁版menu */ 
    <>
    <header className="menu">
        <div className="lex-shrink-0 ml-[3vw]">
          <a href="https://www.transglobe.com.tw/" target="_blank" rel="noopener noreferrer">
            <img src={logo} alt="Logo" className="" />
          </a>
        </div>

        {/* Navigation Menu */}
        <nav className="flex space-x-7 px-14">
          <a href="./#sec1" className="relative menu-text">
              跨年出國抽
              <img src="./menu/new.svg" alt="New" className="absolute top-[-13%] right-[-2%] w-7 h-7 transfer-position-xy-1" />
          </a>        
          <a href="./#sec2" className="menu-text">滿保滿額抽</a>
          <a href="./#sec3" className="menu-text">首次投保抽</a>
          <a href="./mgm" className="menu-text">分享全球抽</a>
          <a href="./policy" className="menu-text">活動辦法</a>
        </nav>
    </header>


      {/* 手機版 Menu */}
      <header className={`mobile-menu lg:hidden ${isMenuOpen ? 'h-full' : ''}`}>
          <div className={`flex-shrink-0 w-[26vw] ml-[3vw] mt-2 ${isMenuOpen ? 'hidden' : 'block'}`}>
            <a href="https://www.transglobe.com.tw/" target="_blank" rel="noopener noreferrer">
              <img src={logo} alt="Logo" className="" />
            </a>
          </div>

          {/* 漢堡按鈕 */}
          <button 
            className="absolute top-3 right-4 flex items-center justify-center " 
            onClick={toggleMenu}
          >
            <img 
            src={isMenuOpen ? './menu/menu-close-sm.svg' :'./menu/menu-hamburger.svg'} 
            alt={isMenuOpen ? 'Close Menu' : 'Open Menu'} 
            className="h-12 w-12"
            />
            </button>

          {/* Navigation Menu */}
          <div className='flex flex-col items-center justify-center w-[100vw]'>
           <nav className={`static flex flex-col items-center justify-center space-y-4 ${isMenuOpen ? '' : 'hidden'}`}>

            <div className=' flex flex-col space-y-6'>
                  <a href="./#sec1" className="relative mobile-text">
              跨年出國抽
                    <img src="./menu/new.svg" alt="New" className="absolute top-[-20%] right-[-5%] w-8 h-6" />
                </a>        
                <a href="./#sec2" className="mobile-text">滿保滿額抽</a>
                <a href="./#sec3" className="mobile-text">首次投保抽</a>
                <a href="./mgm" className="mobile-text">分享全球抽</a>
                <a href="./policy" className="mobile-text">活動辦法</a>
            </div>
          </nav>
          </div>
      </header>
    </>
  );
}


export default Menu;
