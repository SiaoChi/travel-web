import { useAnimations } from '../../Hooks/useAnimations';
import Background from './background';
function MgmInfoSection(){
    const { fadeInFromBottom } = useAnimations();
    return (
        <section className="relative h-[870px] lg:h-[1000px]">
            <Background />
            {/* 活動資訊 */}
            <div className="flex flex-col items-center justify-start mt-[100px] h-[200px] md:mt-[-15%] lg:mt-[10%]">
                <div className="flex flex-col items-center w-[267px] text-center ">
                    <p className="text-[1.25rem] font-bold tracking-[0.2rem] z-10">2024/10/1~2025/1/31</p>
                    <p className="text-[1.25rem] font-bold tracking-[0.2rem] z-10">成功邀請親友投保旅平險，達指定筆數</p>
                </div>
                <img src="./mgmPage/info-sec/line-title.svg" alt="line-title" className="w-[355px] z-10 mt-[1rem]" />
            </div>
            {/* 方案圖-mb */}
            <div className="flex flex-col items-center justify-start h-[665px] md:hidden">
                <img ref={fadeInFromBottom} src="./mgmPage/info-sec/plan1.svg" alt="plan1" className="w-full z-10"></img>
                <img ref={fadeInFromBottom} src="./mgmPage/info-sec/plan2.svg" alt="plan2" className="w-full z-10 mt-[-3%]"></img>
                <img ref={fadeInFromBottom} src="./mgmPage/info-sec/plan3.svg" alt="plan3" className="w-full z-10 mt-[-3%]"></img>
            </div>
            {/* 方案圖-web */}
            <div className="flex-col justify-center lg:items-center h-[665px] hidden md:flex lg:mt-[8%]">
                <img ref={fadeInFromBottom} src="./mgmPage/info-sec/plan1-web.svg" alt="plan1" className="w-[94%] lg:w-[70%] z-10 lg:mt-1]"></img>
                <img ref={fadeInFromBottom} src="./mgmPage/info-sec/plan2-web.svg" alt="plan2" className="w-[99%] lg:w-[75%] lg:ml-[5%] lg:mt-1 z-10 mt-[-3%]"></img>
                <img ref={fadeInFromBottom} src="./mgmPage/info-sec/plan3-web.svg" alt="plan3" className="w-[93%] lg:w-[69%] z-10 mt-[-3%] lg:mt-1"></img>
            </div>
        </section>
    )
}

export default MgmInfoSection;