import { useAnimations } from '../../Hooks/useAnimations';


function LinePointSection(){
    const {fadeInFromBottom } = useAnimations();
    return (
        <>
        <section className="h-[720px] lg:h-[900px] w-full flex flex-col items-center justify-between md:mt-[8%] ">
            <img ref={fadeInFromBottom} src="./mgmPage/line-sec/line.svg" alt="line-point-sec" className="w-[90%] z-10 md:hidden"></img>
            <img ref={fadeInFromBottom} src="./mgmPage/line-sec/line-web.svg" alt="line-point-sec" className="w-[90%] lg:w-[65%] lg:mt-[5%] z-10 hidden md:flex"></img>
        </section>
        <section className="h-[400px] w-full flex flex-col items-center justify-between">
            <div className="md:pt-[5%] flex flex-col items-center justify-start h-full w-full bg-cover bg-center" style={{backgroundImage: `url(${('./mgmPage/line-sec/line-bg-mb.svg')})`}}>
                <div className="group w-[295px] h-[60px] mt-8 relative lg:w-[400px] z-20">
                    <div className="w-full h-full bg-c-orange group-hover:bg-c-red transition-colors duration-100 px-4 rounded-md flex items-center justify-center absolute top-0 left-0">
                    </div>
                    <a href='./policy' className="absolute flex items-center justify-center inset-0 border-2 border-black rounded-md -translate-x-1 -translate-y-1 hover:-translate-x-0 hover:-translate-y-0 transition-transform duration-300">
                        <p className="font-serif font-bold text-xl text-black">推薦好友 成功筆數查詢</p>
                    </a>
                </div>
                <div className="group w-[295px] h-[60px] my-4 relative lg:w-[400px] z-20">
                    <div className="w-full h-full bg-c-orange group-hover:bg-c-red transition-colors duration-100 px-4 rounded-md flex items-center justify-center absolute top-0 left-0">
                    </div>
                    <a href='./policy' className="absolute flex items-center justify-center inset-0 border-2 border-black rounded-md -translate-x-1 -translate-y-1 hover:-translate-x-0 hover:-translate-y-0 transition-transform duration-300">
                        <p className="font-serif font-bold text-xl text-black">參加更多抽獎</p>
                    </a>
                </div>
                <div className="group w-[295px] h-[60px] mb-8 relative lg:w-[400px] z-20">
                    <div className="w-full h-full bg-white group-hover:bg-c-orange transition-colors duration-100 px-4 rounded-md flex items-center justify-center absolute top-0 left-0">
                    </div>
                    <a href='./policy' className="absolute flex items-center justify-center inset-0 border-2 border-black rounded-md -translate-x-1 -translate-y-1 hover:-translate-x-0 hover:-translate-y-0 transition-transform duration-300">
                        <p className="font-serif font-bold text-xl text-black">活動辦法</p>
                    </a>
                </div>
            </div>
        </section>
        </>
    )
}

export default LinePointSection;