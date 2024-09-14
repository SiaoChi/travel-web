import { useAnimations } from '../../Hooks/useAnimations';

function YearEvent() {
    const { fadeIn, fadeInFromLeft, fadeInFromRight, fadeInFromTop, fadeInFromBottom } = useAnimations();


    return (
        <section className="flex flex-col h-[716px] md:w-full md:h-[835px] mt-[90px] md:mt-0 relative" id="sec1">
            {/* 背景 */}
            <img ref={fadeInFromTop} src="./home/sec1/sec1-flower.svg" className="absolute w-full h-[716px] md:h-[800px] z-0" alt="背景花卉" />
            {/* 內容 */}
            <img ref={fadeInFromLeft} src="./home/sec1/event-title.svg" className="absolute w-[50%] md:w-[280px] lg:w-[310px] top-[17%] left-[13%] md:left-[9%] object-cover z-20" alt="活動標題" />
            <img ref={fadeIn} src="./home/sec1/firework.svg" className="absolute w-[90%] md:w-[500px] lg:w-[590px] md:top-[10%]  left-[1%] md:left-[3%] object-cover z-20"></img>
            <div className="absolute w-[300px] md:w-[350px] top-[35%] md:top-[45%] left-[13%] md:left-[10%] z-10">
              <p className="text-[1.25rem]  tracking-wider font-medium "><span className="text-c-blue">2024/12/15-2025/1/20</span>期間，</p>
              <p className="text-[1.25rem]  tracking-wider font-medium ">成功網路投保<span className="text-c-blue">「國外旅平險」</span></p>
            </div>
            <div ref={fadeInFromRight} className="absolute w-[210px] md:w-[350px] top-[46%] md:top-[30%] lg:top-[15%] right-[8%] object-cover z-20">
              <p className="text-c-orange text-end text-[2.4rem] md:text-[3.5rem] lg:text-[4rem] leading-none font-bold tracking-wider ">HAPPY</p>
              <p className="text-c-orange text-end text-[2.4rem] md:text-[3.5rem] lg:text-[4rem] leading-none font-bold tracking-wider">NEW YEAR</p>
              <p className="text-c-orange text-end text-[2.4rem] md:text-[3.5rem] lg:text-[4rem] leading-none font-bold tracking-wider">2025</p>
            </div>
            <img ref={fadeInFromBottom} src="./home/sec1/project1.png" className="absolute top-[60%] left-[2rem] w-[90%] md:hidden"></img>
            <img ref={fadeInFromBottom} src="./home/sec1/project1-web.svg" className="hidden md:block absolute lg:top-[50%] md:top-[55%] lg:left-[43%] md:left-[30%] md:w-[500px] lg:w-[690px] "></img>
        </section>
    );
}

export default YearEvent;