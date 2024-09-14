import {  PolygonBackground ,EnglishText} from './background';
import Kv from './kv';
import BackToTop from '../../BackToTop';



function MgmHeroSection() {
    return (
        <section className="relative flex flex-col-reverse justify-end md:justify-start mt-[65px] md:mt-[80px] md:flex-row mx-auto h-[750px] md:h-[660px] " >
                <BackToTop />
                <PolygonBackground />
                <EnglishText />
                <Kv />
        </section>
    )
}

export default MgmHeroSection;