
function FlowerBackground(){
    return (
        <div className="flex absolute w-full h-[480px] top-[-7%] right-5 md:w-[55%] md:h-[560px] md:right-[6%] md:top-[8%] fade-in-from-top z-0" 
                style={{ 
                    backgroundImage: "url('./home/hero-sec/flower.png')", 
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    animationDelay: '800ms' 
                }}>
        </div>
    )
}

function PolygonBackground(){
    return (
        <img src="./home/Polygon.svg" className="md:w-[640px] absolute top-[80%] md:top-[70%] z-10" alt="background triangle"></img>
    )
}

function EnglishText(){
    return (
        <div className=" mt-[15%] ml-[4%] md:w-[58%]  md:absolute md:left-0 md:bottom-[1%] w-[360px] fade-in-from-left z-10 " style={{ animationDelay: '400ms' }}>
            <p className="leading-none text-c-blue font-extrabold text-[40px] lg:text-[60px] whitespace-nowrap tracking-wider">TRAVEL</p>
            <div className="flex flex-wrap">
                <p className="w-full md:w-auto leading-none text-c-blue font-extrabold text-[40px] lg:text-[60px] tracking-wider">
                    <span className="inline-block">A TRANSGLOBE</span>
                    <span className="inline-block">JOURNEY</span>
                </p>
            </div>
        </div>
    )
}   

export {FlowerBackground, PolygonBackground, EnglishText };