// src/components/Menu/Menu.jsx

import logo from '/logo.png'; 

function Menu() {
  return (
    <header className="fixed top-0 left-0 w-full h-[10vh] text-white flex items-center justify-between p-4 bg-bg-yellow z-50 ">
      {/* Logo */}
      <div className="flex-shrink-0 ml-[1vw]">
        <img src={logo} alt="Logo" className="" /> 
      </div>
      {/* Navigation Menu */}
      <nav className="flex space-x-7 px-14">
        <a href="/#first" className="text-black hover:bg-c-orange rounded-full py-2 px-4 font-serif text-[1.4vw] font-bold tracking-wider">跨年出國抽</a>
        <a href="/#sec" className="text-black hover:bg-c-orange rounded-full py-2 px-4 font-serif text-[1.4vw] font-bold tracking-wider">滿保滿額抽</a>
        <a href="/#third" className="text-black hover:bg-c-orange rounded-full py-2 px-4 font-serif text-[1.4vw] font-bold tracking-wider">首次投保抽</a>
        <a href="/mgm" className="text-black hover:bg-c-orange rounded-full py-2 px-4 font-serif text-[1.4vw] font-bold tracking-wider">分享全球抽</a>
        <a href="/policy" className="text-black hover:bg-c-orange rounded-full py-2 px-4 font-serif text-[1.4vw] font-bold tracking-wider">活動辦法</a>
      </nav>
    </header>
  );
}


export default Menu;
