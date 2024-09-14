import MgmHeroSection from "../../components/MgmPage/HeroSection";
import MgmInfoSection from "../../components/MgmPage/MgmInfoSection";
import LinePointSection from "../../components/MgmPage/LinePointSection";


function MgmPage() {
  return (
    <div className="relative bg-bg-yellow w-full md:max-w-[1440px] mx-auto">
          <MgmHeroSection />
          <MgmInfoSection />
          <LinePointSection />
    </div> 
  );
}

export default MgmPage;