import { useAnimations } from '../../Hooks/useAnimations';





function Kv(){
    const { fadeInFromLeft, fadeInFromRight } = useAnimations();
    return (
        <>
            {/* Hero-section 左側 */}
            <div className="w-full md:w-full md:flex-[4] mt-[-10%]">
                <div ref={fadeInFromLeft} className="flex flex-col items-center md:w-auto md:pt-[30%] md:pl-[15%]">
                    <img  className='w-[75vw] md:w-full fade-in-from-left z-10' src='./mgmPage/hero-sec/event_title.svg'></img>
                    <div className="my-[1.5rem] md:my-[1.25rem] z-10">
                        <p className="text-center font-bold tracking-[0.2rem] md:text-[1.5625rem] text-[1.375rem] fade-in-from-left">推薦好友全球旅平險</p>
                        <p className="text-center font-bold tracking-[0.2rem] md:text-[1.5625rem] text-[1.375rem] fade-in-from-left">快樂<span className="text-c-blue">+1+1+1+1+1+1+1+1+1</span></p>
                    </div>
                </div>
            </div>

            {/* Hero-section 右側 */}
            <div className=" md:ml-0 mt-10 w-[100vw] m-auto md:w-full md:flex-[6]">
                <div className="flex flex-col items-center">
                    <img ref={fadeInFromLeft} src='./mgmPage/hero-sec/kv1.svg' className="w-[345px] lg:w-[637px]"></img>
                    <img ref={fadeInFromRight} src='./mgmPage/hero-sec/kv2.svg' className="w-[364px] lg:w-[600px]"></img>
                </div>
            </div>
        </>
    )
}

export default Kv;