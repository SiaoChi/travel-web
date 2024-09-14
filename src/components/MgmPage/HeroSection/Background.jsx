


function PolygonBackground(){
    return (
        <>  
            <img src="./mgmPage/hero-sec/Polygon-bg-mb.svg" className="w-full md:w-full absolute top-[80%] md:top-[20%]  z-10 lg:hidden" alt="background triangle"></img>
            <img src="./mgmPage/hero-sec/Polygon-web.svg" className="w-full bg-cover h-[1300px] absolute top-[60%] z-10 hidden lg:flex" alt="background triangle"></img>
        </>
    )
}

function EnglishText(){
    return (
        <div className=" mt-[15%] ml-[4%] md:absolute md:left-0 md:top-[35%] lg:top-[50%] w-[360px] md:w-[500px] lg:w-[700px] fade-in-from-left z-10 " style={{ animationDelay: '400ms' }}>
            <div className="flex flex-wrap md:hidden">
                <p className="w-full md:w-auto leading-none text-c-blue font-extrabold text-[40px] lg:text-[60px] tracking-wider">
                    <span className="inline-block">COLLECT A LOT</span>
                    <span className="inline-block">OF LINE POINTS</span>
                </p>
            </div>
             <div className="flex-wrap hidden md:flex">
                <p className="w-full md:w-auto leading-none text-c-blue font-extrabold text-[40px] lg:text-[60px] tracking-wider">
                    <span className="inline-block">COLLECT</span>
                    <span className="inline-block">A LOT OF LINE POINTS</span>
                </p>
            </div>
        </div>
    )
}   

export { PolygonBackground, EnglishText };