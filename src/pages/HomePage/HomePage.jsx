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
`;



const VerticalLine = styled.div`
  height: 2563px;
  width: 1px;
  position: absolute;
  left: 112px;
  top: 680px;
  z-index: 10;
	width: 50px;
	border-left: 1px solid black;
	@media screen and (max-width: 1300px) {
		left: 30px;
		top: 880px;
		z-index: 0;
		display: none;
	}
`;

const Fly = styled.img`
	width: 50px;
	height: 50px;
	position: absolute;
	transform: translate(-50%, 0%);
	will-change: transform;
	@media screen and (max-width: 1300px) {
		display: none;
	}
`;

const Pointer = styled.div`
	width: 10px;
	height: 10px;
	border-radius: 50%;
	position: absolute;
	bottom: 0;
	left: 0;
	transform: translate(-50%, 0%);
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
        top: 617px;
        left: 0;
        width: 480px;
		max-width: 100%;
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
    top: 1480px;
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
    top: 1400px;
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
    top: 1480px;
    left: 0;
    width: 100%;
    height: auto;
    display: block;
    z-index: 0;

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



function HomePage() {

	useEffect(() => {
		const verticalLine = document.getElementById("vertical-line");
        const { y: originY } = verticalLine.getBoundingClientRect();
		let verticalLineRect = verticalLine.getBoundingClientRect();
		const fly = document.getElementById("fly");
		const pointer = document.getElementById("pointer");
		const pointerRect = pointer.getBoundingClientRect();

		const end = pointerRect.y;
		fly.style.position = 'fixed';
		fly.style.top = `${verticalLineRect.y}px`;
		fly.style.left = `${verticalLineRect.x}px`;
		
		const handleScroll = () => {
			const current = window.scrollY + originY;
			if (current > end) {
				fly.style.position = 'absolute';
				fly.style.top = 'calc(100% - 50px)';
				fly.style.left = `${0}px`;
				return;
			}
			if (current < end + 50) {
				fly.style.position = 'fixed';
				fly.style.top = `${originY - 50}px`;
				fly.style.left = `${verticalLineRect.x}px`;
			}
		};

        let timeout;
        window.addEventListener('resize', () => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                verticalLineRect = verticalLine.getBoundingClientRect();
                if (fly.style.position === "absolute") return;
                fly.style.left = `${verticalLineRect.x}px`;
            }, 250);
        });
		window.addEventListener('scroll', handleScroll);

		handleScroll();

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<Wrap>
            {/* 橘色三角形 */}
			<YellowPolygon src="./home/home-polygon.svg" />

            {/* 黃色梯形 */}
            <YellowTrapezoid src="./home/reach-insure-amount-event-trapezoid.svg" />
			<MobileYellowTrapezoid src="./home/reach-insure-amount-event-trapezoid-mobile.svg" />
            <IPadYellowTrapezoid src="./home/reach-insure-amount-event-trapezoid-ipad.svg" />
			<LargeYellowTrapezoid src="./home/reach-insure-amount-event-trapezoid-large.svg" />
			<Container>
				<EventBanner />
				<NewYearEvent />
				<ReachInsureAmountEvent />
				<FirstInsureAndLinePoints />
				<VerticalLine id="vertical-line">
					<Fly id="fly" src="./home/home-fly.svg" />
					<Pointer id="pointer" />
				</VerticalLine>
			</Container>

            {/* 藍色背景 */}
			 <BlueBackground src="./home/home-blue-bg-3.svg" />
			 <IPadBlueBackground src="./home/line-points-blue-background-ipad.svg" />
			 <LargeBlueBackground src="./home/home-blue-lg-bg-3.svg" />
			 <MobileBlueBackground src="./home/line-points-blue-background-mobile.svg" /> 
		</Wrap>
	);
}

export default HomePage;
