import { useEffect } from "react";
import styled from "styled-components";
import EventBanner from "../../components/Home/EventBanner";
import NewYearEvent from "../../components/Home/NewYearEvent";
import ReachInsureAmountEvent from "../../components/Home/ReachInsureAmountEvent";
import FirstInsureAndLinePoints from "../../components/Home/FirstInsureAndLinePoints";

const Wrap = styled.div`
  padding-top: 90px;
  background-color: #FFFAF1;
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
  z-index: 0;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1500px;
  position: relative;
  z-index: 0;
  @media (max-width: 1300px) and (min-width: 1000px) {
    max-width: 800px;
  }
`;



const YellowPolygon = styled.img`
    position: absolute;
    top: 240px;
    left: 0;
    width:1180px;
	z-index: 0;
    @media (max-width: 1560px) {
        top: 500px;
        left: 0px;
        width: 800px;
    }

    @media (max-width: 1301px) {
        top: 330px;
        left: 0;
        width: 480px;
		max-width: 100%;
    }
    @media (max-width: 999px) {
        top: 680px;
    }
`;



const YellowTrapezoid = styled.img`
    display: none;
    @media (max-width: 1560px) and (min-width: 1301px) {
        display: block;
        position: absolute;
        top: 1500px;
        z-index: 0;
        width: 100%;
    }
`;

const MobileYellowTrapezoid = styled.img`
    position: absolute;
    top: 840px;
    left: 0;
    width: 100%;
    height: auto;
    display: block;
    z-index: -1;
    @media (min-width: 800px) {
        display: none;
    }
`

const IPadYellowTrapezoid = styled.img`
    position: absolute;
    top: 22%;
    left: 0;
    width: 100%;
    z-index: -1;
    display: none;
	@media (min-width: 800px) and (max-width: 1300px) {
		display: block;
	}
`

const LargeYellowTrapezoid = styled.img`
    position: absolute;
    top: 27%;
    left: 0;
    width: 100%;
    height: auto;
    display: block;
    z-index: -1;

    @media (max-width: 1301px) {
        display: none;
    }
		
`;

const MobileBlueBackground = styled.img`
    position: absolute;
    width: 100%;
    bottom: 0px;
	z-index: -1;
    @media (min-width:570px) {
        display: none;
    }

`

const IPadBlueBackground = styled.img`
    position: absolute;
    width: 100%;
    bottom: 0px;
	z-index: -1;
    display: none;
    @media (min-width:570px) and (max-width: 1300px) {
        display: block;
    }
    @media (min-width: 990px) and (max-width: 1300px) {
        content: url("./home/line-points-blue-background-ipad-h.svg");
    }
`

const BlueBackground = styled.img`
    position: absolute;
    bottom: 0;
    width: 100%;
    display: none;
    z-index: -1;
    @media (max-width: 1600px) and (min-width: 1301px) {
        display: block;
    }
`;

const LargeBlueBackground = styled.img`
    position: absolute;
    bottom: 0;
    width: 100%;
    display: block;
    z-index: -1;
    @media (max-width: 1600px) {
        display: none;
    }
`;

const NewVerticalLine = styled.img`
  position: absolute;
  height: 1862px;
  width: 55px;
  left: 105px;
  top: 630px;
  z-index: 10;
  back-ground-color: red;
	@media screen and (max-width: 1300px) {
		display: none;
	}
`;

function HomePage() {
	return (
		<Wrap>
            {/* 橘色三角形 */}
			<YellowPolygon src="./home/home-polygon.svg" />

            {/* 黃色梯形 */}
            {/* <YellowTrapezoid src="./home/reach-insure-amount-event-trapezoid.svg" al /> */}
			<MobileYellowTrapezoid src="./home/reach-insure-amount-event-trapezoid-mobile.svg" />
            <IPadYellowTrapezoid src="./home/reach-insure-amount-event-trapezoid.svg" />
			<LargeYellowTrapezoid src="./home/reach-insure-amount-event-trapezoid-large.svg" />
			<Container>
				<EventBanner />
				{/* <NewYearEvent /> */}
				<ReachInsureAmountEvent />
				<FirstInsureAndLinePoints />
				<NewVerticalLine src='./verticalline-v1.svg' alt='verticalline' />
			</Container>

            {/* 藍色背景 */}
			 <BlueBackground src="./home/home-blue-bg-3.svg" alt="blue background" />
			 <IPadBlueBackground src="./home/line-points-blue-background-ipad.svg" alt="ipad blue background" />
			 <LargeBlueBackground src="./home/home-blue-lg-bg-3.svg" alt="large blue background" />
			 <MobileBlueBackground src="./home/line-points-blue-background-mobile.svg" alt="mobile blue background" /> 
		</Wrap>
	);
}

export default HomePage;
