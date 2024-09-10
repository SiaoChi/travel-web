// src/pages./homePage./homePage.jsx
// import Menu from "../../components/Menu/Menu";
import HeroSection from "../../components/Home/HeroSection/HeroSection";
import YearEvent from "../../components/Home/YearEvent/YearEvent";
import InsureLottery from "../../components/Home/InsureLottery/InsureLottery";
import FirstInsure from "../../components/Home/FirstInsure/FirstInsure";
import LinePoint from "../../components/Home/LinePoint/LinePoint";

function HomePage() {
  return (
    <div className="bg-bg-yellow relative">
      {/* 背景三角形 */}
      <img src="./home/Polygon.svg" className="md:w-[35vw] absolute top-[20%] md:top-[13%] z-0" alt="background triangle"></img>
        <div className=" bg-bg-yellow  mx-auto container ">
          <HeroSection />
          <YearEvent />
          <InsureLottery />
          <FirstInsure />
          <LinePoint />
        </div>
   </div>
  );
}

export default HomePage;