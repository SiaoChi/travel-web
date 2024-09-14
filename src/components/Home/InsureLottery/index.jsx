import { useAnimations } from '../../Hooks/useAnimations';

function InsureLottery() {
      const {  fadeInFromLeft, fadeInFromRight, fadeInFromBottom } = useAnimations();

    return (
        <section className="flex flex-col h-[1230px] md:w-full md:h-[1105px] mt-[125px] md:mt-0 relative " id="sec2">
            <div className="h-full w-full">
              {/* 背景 */}
               <img src="./home/sec2/yellow-rectangle.png" className="absolute md:top-[0%] md:w-full left-0 h-[1400px]  w-full  md:h-[1130px] z-0"></img>
               <img src="./home/sec2/flower.svg" className="absolute top-[-3%] md:hidden z-10"></img>
               <img src="./home/sec2/flower-web.svg" className="absolute top-[-5%] left-[15%] w-[80%] hidden md:block z-10"></img>
               <img ref={fadeInFromRight} src="./home/sec2/mountain.svg" className="absolute md:w-[640px] top-[23%] right-0 object-cover z-10"></img>
                {/* 內容 */}
                  <img ref={fadeInFromLeft} src="./home/sec2/year-event-title.svg" className="absolute  w-[38%] md:w-[220px] lg:w-[246px] top-[8%] md:top-[22%] left-[13%] md:left-[9%] object-cover z-20"></img>
                  <img ref={fadeInFromLeft} src="./home/sec2/temple.svg" className="absolute w-[90%] md:w-[500px] lg:w-[570px] md:top-[16%]  top-[4%]  md:left-[3%] left-[1%] object-cover z-20"></img>
                  <div ref={fadeInFromLeft} className="absolute w-[300px] md:w-[540px] top-[20%] md:top-[40%] left-[13%] md:left-[9%] z-10">
                    <p className="text-[1.25rem] font-medium tracking-wider"><span className="text-c-blue">2024/12/15-2025/1/20</span>期間，</p>
                    <p className="text-[1.25rem]  font-medium tracking-wider">成功網路投保<span className="text-c-blue">「國外旅平險」</span>，單筆保費滿額即可抽！</p>
                  </div>
                <div ref={fadeInFromRight} className="absolute w-[160px] md:w-[25%] top-[30%] md:top-[48%] lg:top-[20%] right-[8%] object-cover z-20">
                  <p className="text-c-blue text-end text-[2.5rem]  md:text-[3.5rem] tracking-wider leading-none font-bold">TRAVEL</p>
                  <p className="text-c-blue text-end text-[2.5rem]  md:text-[3.5rem] tracking-wider leading-none font-bold">JAPAN TOKYO</p>
                </div>
                {/* 手機版方案 */}
                <div className="absolute flex flex-col top-[35%]  w-full z-10 md:hidden">
                  <img ref={fadeInFromBottom} src="./home/sec2/project1.svg" className="w-[80%] z-10 md:hidden"></img>
                  <img ref={fadeInFromBottom} src="./home/sec2/project2.svg" className="w-[85%] mt-3 ml-10 z-10 md:hidden"></img>
                </div>
                {/* 網頁版方案 */}
                <img ref={fadeInFromBottom} src="./home/sec2/project1-web.svg" className="absolute md:top-[740px] lg:top-[48%] md:w-[350px]  lg:w-[562px] left-[7%] z-10 hidden md:block"></img>
                <img ref={fadeInFromBottom} src="./home/sec2/project2-web.svg" className="absolute lg:top-[43%] md:top-[700px] md:w-[420px] left-[50%] lg:w-[655px] z-10 hidden md:block"></img>
            </div>
        </section>
    )
}

export default InsureLottery;