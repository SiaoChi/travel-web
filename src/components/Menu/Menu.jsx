// src/components/Menu/Menu.jsx

import logo from '/logo.png'; 

function Menu() {
  return (
    <header className="fixed top-0 left-0 w-full text-white flex items-center justify-between p-4 bg-bg-yellow z-50">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img src={logo} alt="Logo" className="w-[80%]" /> 
      </div>
      {/* Navigation Menu */}
      <nav className="flex space-x-12 px-14">
        <a href="/" className="text-black hover:bg-c-orange rounded-full p-2 font-serif text-lg font-bold tracking-wider">跨年出國抽</a>
        <a href="/#first" className="text-black hover:bg-c-orange rounded-full p-2 font-serif text-lg font-bold tracking-wider">滿保滿額抽</a>
        <a href="/#second" className="text-black hover:bg-c-orange rounded-full p-2 font-serif text-lg font-bold tracking-wider">首次投保抽</a>
        <a href="/#third" className="text-black hover:bg-c-orange rounded-full p-2 font-serif text-lg font-bold tracking-wider">分享全球抽</a>
        <a href="/policy" className="text-black hover:bg-c-orange rounded-full p-2 font-serif text-lg font-bold tracking-wider">活動辦法</a>
      </nav>
    </header>
  );
}


export default Menu;
