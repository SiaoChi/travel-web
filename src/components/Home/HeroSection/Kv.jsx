function Kv(){
    return (
        <>
            {/* Hero-section 左側 */}
            <div className="w-full md:w-full md:flex-[4] ">
                <div className="flex flex-col items-center md:w-auto md:pt-[30%] md:pl-[15%]">
                    <img className='w-[75vw] md:w-auto fade-in-from-left z-10' src='./home/hero-sec/event_title1.svg'></img>
                    <div className="my-[0.875rem] md:my-[1.25rem] z-10">
                        <p className="text-center font-bold tracking-[0.2rem] md:text-[1.5625rem] text-[1.375rem] fade-in-from-left">推薦好友全球旅平險</p>
                        <p className="text-center font-bold tracking-[0.2rem] md:text-[1.5625rem] text-[1.375rem] fade-in-from-left">快樂<span className="text-c-blue">+1+1+1+1+1+1+1</span></p>
                    </div>
                </div>
            </div>

            {/* Hero-section 右側 */}
            <div className=" md:ml-0 mt-10 w-[100vw] m-auto md:w-full lg:h-full md:flex-[6]">
                <div className="relative w-full pb-[78%] ">
                    <img src='./home/hero-sec/luggage.png' className="w-[59%] md:w-[56%] absolute bottom-[13%] left-[18%] fade-in-from-bottom" />
                    <img src='./home/hero-sec/godness2.png' className="w-[22%] md:w-[20%] absolute bottom-[29%] left-[65%] fade-in-from-bottom" style={{ animationDelay: '500ms' }} />
                    <img src='./home/hero-sec/building.png' className="w-[28%] md:w-[28%] absolute bottom-[23%] left-[44%] fade-in-from-bottom" style={{ animationDelay: '500ms' }} />
                    <img src='./home/hero-sec/tower2.png' className="w-[19%] md:w-[19%] absolute bottom-[41%] left-[18%] fade-in-from-bottom" style={{ animationDelay: '500ms' }} />
                    <img src='./home/hero-sec/flight.png' className="w-[44%] md:w-[43%] absolute bottom-[50%] left-[27%] fade-in-from-right" style={{ animationDelay: '300ms' }} />
                    <img src='./home/hero-sec/coupon.png' className="w-[15%] md:w-[14%] absolute bottom-[75%] left-[4%] fade-in-from-bottom" />
                    <img src='./home/hero-sec/camera.png' className="w-[14%] md:w-[13%] absolute bottom-[18%] left-[5%] fade-in-from-bottom" />
                </div>
            </div>
        </>
    )
}

export default Kv;