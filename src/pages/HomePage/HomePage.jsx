// src/pages./homePage./homePage.jsx
// import Menu from "../../components/Menu/Menu";

function HomePage() {
  return (
    
    
    <div className="relative bg-bg-yellow">
        {/* 背景圖像 */}
        <img src="./home/Polygon.svg" className="absolute top-[13%] z-0" alt="background triangle"></img>
  
    {/* Section 1 主視覺，有設定 padding-top 以避開 Menu */}
     <section className=" bg-bg-yellow flex items-center justify-center pt-[10vh]" >
        <div className="flex w-screen">
            <div className="relative flex-[4] h-[88vh] w-full" >
                <div className="flex flex-col items-center w-full h-full top-[23%] absolute left-[10%] bottom-[10%]">
                    <img className='w-[33vw] fade-in-from-left' src='./home/event_title1.svg'></img>
                    <div className="my-[4%]">
                        <p className="text-center font-bold tracking-[0.5vw] text-[1.7vw] fade-in-from-left">保全球旅平險</p>
                        <p className="text-center font-bold tracking-[0.5vw] text-[1.7vw] fade-in-from-left">驚喜<span className="text-c-blue">多多多多多</span>到滿出來 !</p>
                    </div>
                </div>
                <div className="absolute bottom-[3%] left-[6%] w-full fade-in-from-left">
                    <p className="leading-none  text-c-blue font-extrabold text-[4.3vw] whitespace-nowrap tracking-wider">TRAVEL</p>
                    <p className="leading-none text-c-blue font-extrabold text-[4.3vw] whitespace-nowrap tracking-wider">A TRANSGLOBE JOURNEY</p>
                </div>
            </div>

            <div className="flex-[5]  w-full">
                <div className="relative h-[90vh]">
                        <div className="absolute w-full h-full top-[2%] right-[3%] fade-in-from-top" style={{ backgroundImage: "url('./home/flower.png')", animationDelay: '800ms' }}></div>
                        <img src='./home/luggage.png' className="w-[60%] absolute bottom-[10%] left-[15%] fade-in-from-bottom "  ></img>
                        <img src='./home/shadow.png' className="w-full absolute bottom-[20%] left-[-10%]  fade-in-from-bottom"  ></img>
                        <img src='./home/god.png' className="w-[20%] absolute bottom-[29%] left-[62%] fade-in-from-bottom" style={{ animationDelay: '500ms' }}></img>
                        <img src='./home/tower.png' className="w-[19%] absolute bottom-[38%] left-[16%] fade-in-from-bottom" style={{ animationDelay: '500ms' }}></img>
                        <img src='./home/flight.png' className="w-[43%] absolute bottom-[46%] left-[25%] fade-in-from-right"style={{ animationDelay: '300ms' }} ></img>
                        <img src='./home/coupon.png' className="w-[16%] absolute bottom-[75%] left-[2%] fade-in-from-bottom" ></img>
                        <img src='./home/camera.png' className="w-[13%] absolute bottom-[20%] left-[2%] fade-in-from-bottom" ></img>
                </div>
            </div>
        </div>
      </section>

    {/* Section 2 跨年出國抽 */}
      <section className="h-screen flex items-center justify-center" id="first">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Featured Section</h2>
          <p className="text-gray-700">Here you can highlight the key features or content of your site.</p>
        </div>
      </section>

    {/* Section 3 投保滿額抽 */}
      <section className="h-screen flex items-center justify-center" id="sec">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Featured Section</h2>
          <p className="text-gray-700">Here you can highlight the key features or content of your site.</p>
        </div>
      </section>

    {/* Section 4 首次投保抽 */}
      <section className="h-screen  flex items-center justify-center " id="third">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">About Us</h2>
          <p className="text-gray-700">Provide a brief introduction about your website or company here.</p>
        </div>
      </section>

      {/* Section 5 LINE POINT區塊 */}
        <section className="h-screen  flex items-center justify-center" >
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Final Section</h2>
          <p className="text-gray-700">Provide a brief introduction about your website or company here.</p>
        </div>
      </section>
   </div>
  );
}

export default HomePage;
