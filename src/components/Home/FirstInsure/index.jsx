import { useAnimations } from '../../Hooks/useAnimations';

function FirstInsure() {
  const { fadeInFromLeft, fadeInFromRight,  fadeInFromBottom } = useAnimations();
    return (
        <section className="flex flex-col h-[880px] md:w-full md:h-[830px] mt-[125px] md:mt-0 relative" id="sec3">
                {/* 內容 */}
                <img ref={fadeInFromLeft} src="./home/sec3/sec3-title.svg" className="absolute md:w-[270px] w-[43%]  top-[8%] left-[13%] md:left-[9%] object-cover z-20"></img>
                <img ref={fadeInFromLeft} src="./home/sec3/tower.svg" className="absolute w-[90%] md:w-[550px] top-[2%]  left-[1%] md:left-[3%] object-cover z-20"></img>
                <div ref={fadeInFromLeft} className="absolute w-[320px] md:w-[25%] top-[28%] md:top-[40%] left-[15%] md:left-[10%] z-10">
                  <p className="text-[1.25rem] tracking-wider font-medium md:mb-1">2024/10/11-2025/1/31期間，</p>
                  <p className="text-[1.25rem] tracking-wider  font-medium md:mb-1 "><span className="text-c-blue">首次</span>成功網路投保<span className="text-c-blue">「國外旅平險」</span></p>
                  <p className="text-[1rem] font-thin mt-2">(限從未投保全球人壽任一險種者)</p>
                </div>
                <div ref={fadeInFromRight} className="absolute w-[210px] md:w-[25%] top-[82%] md:top-[73%] right-[8%] md:right-[12%] object-cover ">
                  <p className="text-c-orange text-end text-[2.5rem] md:text-[4rem] leading-none font-bold tracking-wider">PX MART</p>
                  <p className="text-c-orange text-end text-[2.5rem] md:text-[4rem] leading-none font-bold">COUPON</p>
                </div>
                <img ref={fadeInFromBottom} src="./home/sec3/project1.png" className="absolute top-[45%]  left-[3rem] w-[85%] md:hidden"></img>
                <img ref={fadeInFromBottom} src="./home/sec3/project1-web.svg" className="absolute top-[38%] lg:top-[27%]  left-[40%] lg:left-[50%] md:w-[430px] lg:w-[634px] hidden md:block z-10"></img>
          
        </section>
    )
}   

export default FirstInsure;