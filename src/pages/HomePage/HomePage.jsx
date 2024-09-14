// src/pages./homePage./homePage.jsx
// import Menu from "../../components/Menu/Menu";
import HeroSection from "../../components/Home/HeroSection";
import YearEvent from "../../components/Home/YearEvent";
import InsureLottery from "../../components/Home/InsureLottery";
import FirstInsure from "../../components/Home/FirstInsure";
import LinePoint from "../../components/Home/LinePoint";

function HomePage() {
  return (
    <div className="relative bg-bg-yellow w-full md:max-w-[1440px] mx-auto">
          <HeroSection />
          <YearEvent />
          <InsureLottery />
          <FirstInsure />
          <LinePoint />
    </div> 
  );
}

export default HomePage;