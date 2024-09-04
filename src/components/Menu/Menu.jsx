// src/components/Menu/Menu.jsx

import logo from '/logo.png'; 

function Menu() {
  return (
    <header className="fixed top-0 left-1/2 transform -translate-x-1/2 w-screen w-min-[1280px] text-white flex items-center justify-between p-4 bg-bg-yellow z-50">

      <div className="flex-shrink-0 ml-[1vw]">
        <a href="https://www.transglobe.com.tw/" target="_blank" rel="noopener noreferrer">
          <img src={logo} alt="Logo" className="" />
        </a>
      </div>
      {/* Navigation Menu */}
      <nav className="flex space-x-7 px-14">
        <a href="./#sec1" className="relative text-black hover:bg-c-orange rounded-full py-2 px-4 font-serif text-[1.4vw] font-bold tracking-wider">
            跨年出國抽
            <img src="./menu/new.svg" alt="New" className="absolute top-[-1%] right-[-1%] w-[2vw] h-[1vw]" />
        </a>        
        <a href="./#sec2" className="text-black hover:bg-c-orange rounded-full py-2 px-4 font-serif text-[1.4vw] font-bold tracking-wider">滿保滿額抽</a>
        <a href="./#sec3" className="text-black hover:bg-c-orange rounded-full py-2 px-4 font-serif text-[1.4vw] font-bold tracking-wider">首次投保抽</a>
        <a href="/mgm" className="text-black hover:bg-c-orange rounded-full py-2 px-4 font-serif text-[1.4vw] font-bold tracking-wider">分享全球抽</a>
        <a href="/policy" className="text-black hover:bg-c-orange rounded-full py-2 px-4 font-serif text-[1.4vw] font-bold tracking-wider">活動辦法</a>
      </nav>
    </header>
  );
}


export default Menu;
