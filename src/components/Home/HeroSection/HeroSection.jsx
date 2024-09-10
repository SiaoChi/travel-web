function HeroSection() {
    return (
        <section className="flex items-center justify-center pt-[10vh] container h-full  lg:h-[740px] min-h-[650px] mx-auto" >
            <div className="relative flex flex-col-reverse md:flex-row w-full md:max-w-screen-2xl md:min-h-[500px]">

             {/* 背景紙花 因跟著主視覺需要對位清楚 */}
            <div className="flex absolute w-full h-[400px] top-1 right-5 md:w-[59%] md:h-[560px] md:right-[6%] md:top-[8%] fade-in-from-top z-0" 
                style={{ 
                    backgroundImage: "url('./home/hero-sec/flower.png')", 
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    animationDelay: '800ms' 
                }}>
            </div>
            

            {/* 左下角固定英文字 */}
              <div className="mt-[15%] ml-[4%] md:absolute md:left-[1vw] md:bottom-[1vw] w-full fade-in-from-left z-10 " style={{ animationDelay: '400ms' }}>
                  <p className="leading-none text-c-blue font-extrabold text-[40px] lg:text-[60px] whitespace-nowrap tracking-wider">TRAVEL</p>
                  <div className="flex flex-wrap">
                    <p className="w-full md:w-auto leading-none text-c-blue font-extrabold text-[40px] lg:text-[60px] tracking-wider">
                        <span className="inline-block">A TRANSGLOBE</span>
                        <span className="inline-block">JOURNEY</span>
                    </p>
                  </div>
              </div>

    
                  {/* Hero-section 左側 */}
                    <div className="w-full md:w-auto md:flex-[4] ">
                        <div className="flex flex-col items-center md:w-auto md:pt-[30%] md:pl-[7%]">
                            <img className='w-[75vw] md:w-auto fade-in-from-left' src='./home/hero-sec/event_title1.svg'></img>
                            <div className="my-[10px] md:my-[20px]">
                                <p className="text-center font-bold tracking-[0.6vw] text-[25px] fade-in-from-left">保全球旅平險</p>
                                <p className="text-center font-bold tracking-[0.6vw] text-[25px]  fade-in-from-left">驚喜<span className="text-c-blue">多多多多多</span>到滿出來 !</p>
                            </div>
                        </div>
                    </div>

                  {/* Hero-section 右側 */}
                    <div className="mb-[-2vh] w-[90vw] m-auto md:w-auto md:min-h-[500px] md:flex-[6] ">
                      <div className="relative w-full pb-[90%]">
                        <img src='./home/hero-sec/luggage.png' className="w-[62%] absolute bottom-[12%] left-[18%] fade-in-from-bottom" />
                        <img src='./home/hero-sec/godness2.png' className="w-[22%] absolute bottom-[29%] left-[65%] fade-in-from-bottom" style={{ animationDelay: '500ms' }} />
                        <img src='./home/hero-sec/building.png' className="w-[30%] absolute bottom-[23%] left-[44%] fade-in-from-bottom" style={{ animationDelay: '500ms' }} />
                        <img src='./home/hero-sec/tower2.png' className="w-[21%] absolute bottom-[39%] left-[19%] fade-in-from-bottom" style={{ animationDelay: '500ms' }} />
                        <img src='./home/hero-sec/flight.png' className="w-[45%] absolute bottom-[46%] left-[27%] fade-in-from-right" style={{ animationDelay: '300ms' }} />
                        <img src='./home/hero-sec/coupon.png' className="w-[16%] absolute bottom-[75%] left-[4%] fade-in-from-bottom" />
                        <img src='./home/hero-sec/camera.png' className="w-[14%] absolute bottom-[18%] left-[5%] fade-in-from-bottom" />
                      </div>
                    </div>


            </div>
        </section>
    )
}

export default HeroSection;