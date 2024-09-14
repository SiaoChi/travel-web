import { useAnimations } from '../../Hooks/useAnimations';
function LinePoint() {
    const { fadeInFromLeft,  fadeInFromBottom } = useAnimations();
    return (
        <section  className="relative h-[800px] md:h-[500px] lg:h-[800px] w-full bg-bg-yellow  flex items-center justify-center " id="sec4">
              <div ref={fadeInFromLeft} className="absolute w-[160px] md:w-[150px] lg:w-[252px] top-[10%] left-[8%] md:left-[4%] lg:left-[8%]  object-cover z-10">
                  <p className="text-c-orange text-start text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] leading-none font-bold tracking-wider">LINE</p>
                  <p className="text-c-orange text-start text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] leading-none font-bold tracking-wider">POINTS</p>
              </div>
              <img src="./home/sec4/blue-bg-mb.svg" className="absolute object-cover w-full top-1 md:hidden"></img>
              <img src="./home/sec4/blue-bg-web.svg" className="hidden md:block absolute w-full object-cover top-[-23%]"></img>
              <img src="./home/sec4/building.svg" className="absolute w-[300px] md:w-[400px] top-[-9%] md:top-[-40%] left-[6%] "></img>
              <img ref={fadeInFromBottom} src="./home/sec4/project1-mb.svg" className="absolute w-[380px] top-[23%] md:hidden"></img>
              <img ref={fadeInFromBottom} src="./home/sec4/project1-web.svg" className="absolute w-[1042px] top-[5%] hidden md:block"></img>
              <img ref={fadeInFromBottom} src="./home/sec4/bg-building-mb.svg" className="absolute bottom-[-2%] w-full z-0 md:hidden"></img>
              
          </section>
    )
}

export default LinePoint;