import { FlowerBackground, PolygonBackground ,EnglishText} from './background';
import Kv from './kv';
import BackToTop from '../../BackToTop';
function HeroSection() {
    return (
        <section className="relative flex flex-col-reverse justify-end md:justify-start mt-[65px] md:mt-[80px] md:flex-row mx-auto h-[750px] md:h-[660px] " >
                <BackToTop />
                <FlowerBackground />
                <PolygonBackground />
                <EnglishText />
                <Kv />
        </section>
    )
}

export default HeroSection;