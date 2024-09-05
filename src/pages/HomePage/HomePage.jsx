

function HomePage() {
  return (

    <div className="bg-bg-yellow">
      <div className="relative bg-bg-yellow mx-auto">
          {/* 背景圖像 */}
          <img src="./home/Polygon.svg" className="absolute top-[13%] z-0" alt="background triangle"></img>
          <img src='./home/shadow.png' className="w-[70%] absolute top-[10%] right-[3%]  fade-in-from-bottom" ></img>
          <div className="absolute w-[60vw] h-[560px] top-[3%] right-[1%] fade-in-from-top z-0" style={{ backgroundImage: "url('./home/flower.png')", animationDelay: '800ms' }}></div>
    
      {/* Hero-section 有設定 padding-top 以避開 Menu */}
        <section className="flex-col md:flex items-center justify-center pt-[10vh] container lg:h-[720px] mx-auto" >
            <div className="relative flex w-full max-w-screen-xl ">

             {/* 背景紙花 因跟著主視覺需要對位清楚 */}
            <div className="flex absolute w-[59%] h-[560px] right-[6%] top-[8%] fade-in-from-top z-0" style={{ backgroundImage: "url('./home/flower.png')", animationDelay: '800ms' }}></div>
            
            {/* 左下角固定英文字 */}
            
              <div className="absolute left-8  md:left-8 bottom-8 w-full fade-in-from-left z-10 " style={{ animationDelay: '400ms' }}>
                  <p className="leading-none  text-c-blue font-extrabold text-[30px] md:text-[40px] lg:text-[60px] whitespace-nowrap tracking-wider">TRAVEL</p>
                  <p className="leading-none text-c-blue font-extrabold text-[30px]  md:text-[40px] lg:text-[60px] whitespace-nowrap tracking-wider">A TRANSGLOBE JOURNEY</p>
              </div>
    
                  {/* Hero-section 左側 */}
                    <div className="relative flex-[4] ">
                        <div className="flex flex-col items-center w-full absolute md:top-[25%] left-[6%]">
                            <img className='w-full fade-in-from-left' src='./home/event_title1.svg'></img>
                            <div className="my-[20px]">
                                <p className="text-center font-bold tracking-[0.6vw] text-[16px]  md:text-[25px] fade-in-from-left\">保全球旅平險</p>
                                <p className="text-center font-bold tracking-[0.6vw] text-[16px]  md:text-[25px] fade-in-from-left">驚喜<span className="text-c-blue">多多多多多</span>到滿出來 !</p>
                            </div>
                        </div>
                    </div>

                  {/* Hero-section 右側 */}
                    <div className="flex-[6] ">
                      <div className="md:w-[780px] pl-6">
                        <img src='./home/shadow.png' className="absolute bottom-[14%] left-[27%]  fade-in-from-bottom" ></img>
                          <div className="kv-right relative h-[300px] md:h-[430px] lg:h-[720px]">
                                  <img src='./home/luggage.png' className="w-[63%]  absolute bottom-[12%] left-[18%] fade-in-from-bottom"  ></img>
                                  <img src='./home/godness.png' className="w-[35%] absolute bottom-[29%] left-[58%] fade-in-from-bottom" style={{ animationDelay: '500ms' }}></img>
                                  <img src='./home/tower.png' className="w-[26%] absolute bottom-[36%] left-[13%] fade-in-from-bottom" style={{ animationDelay: '500ms' }}></img>
                                  <img src='./home/building2.png' className="w-[33%] absolute bottom-[24%] left-[44%] fade-in-from-bottom" style={{ animationDelay: '500ms' }}></img>
                                  <img src='./home/flight.png' className="w-[45%] absolute bottom-[46%] left-[27%] fade-in-from-right"style={{ animationDelay: '300ms' }} ></img>
                                  <img src='./home/coupon.png' className="w-[16%] absolute bottom-[75%] left-[4%] fade-in-from-bottom" ></img>
                                  <img src='./home/camera.png' className="w-[14%] absolute bottom-[18%] left-[5%] fade-in-from-bottom" ></img>
                          </div>
                      </div>
                    </div>
            </div>
        </section>



        {/*  跨年出國抽 第二階段才會出現 */}
          <section className="flex items-center justify-center h-[720px]" id="sec1">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">跨年出國抽</h2>
              <p className="text-gray-700">Here you can highlight the key features or content of your site.</p>
            </div>
          </section>

        {/* 投保滿額抽 */}
          <section className="h-[720px] flex items-center justify-center" id="sec2">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">投保滿額抽</h2>
              <p className="text-gray-700">Here you can highlight the key features or content of your site.</p>
            </div>
          </section>

        {/* 首次投保抽 */}
          <section className="h-[720px]  flex items-center justify-center " id="sec3">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">首次投保抽</h2>
              <p className="text-gray-700">Provide a brief introduction about your website or company here.</p>
            </div>
          </section>

        {/* LINE POINT區塊 */}
          <section className="h-[720px]  flex items-center justify-center" >
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Final Section</h2>
            <p className="text-gray-700">Provide a brief introduction about your website or company here.</p>
          </div>
        </section>
     </div>
   </div>
  );
}

export default HomePage;
