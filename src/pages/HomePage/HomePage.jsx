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
`;

const Container = styled.div`
  width: 100%;
  max-width: 1500px;
  position: relative;
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
    top: 200px;
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
        left: 50%;
        transform: translateX(-50%);
        width: 414px;
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

const LargeYellowTrapezoid = styled.img`
    position: absolute;
    top: 1480px;
    left: 0;
    width: 100%;
    height: auto;
    display: block;
    z-index: 0;
    @media (max-width: 1560px) {
        display: none;
    }
`;

const BlueBackground = styled.img`
    position: absolute;
    bottom: 0;
    width: 100%;
    display: block;
    z-index: 0;
    @media (max-width: 1301px) {
        display: none;
    }`;

const LargeBlueBackground = styled.img`
    position: absolute;
    bottom: 0;
    width: 100%;
    display: block;
    z-index: 0;
	  @media (max-width: 1560px) {
        display: none;
    }
`;

function HomePage() {

	useEffect(() => {
		const verticalLine = document.getElementById("vertical-line");
		const verticalLineRect = verticalLine.getBoundingClientRect();
		const fly = document.getElementById("fly");
		const pointer = document.getElementById("pointer");
		const pointerRect = pointer.getBoundingClientRect();

		const end = pointerRect.y;
		fly.style.position = 'fixed';
		fly.style.top = `${verticalLineRect.y}px`;
		fly.style.left = `${verticalLineRect.x}px`;
		
		const handleScroll = () => {
			const current = window.scrollY + verticalLineRect.top;
			if (current > end) {
				fly.style.position = 'absolute';
				fly.style.top = 'calc(100% - 50px)';
				fly.style.left = `${0}px`;
				return;
			}
			if (current < end + 50) {
				fly.style.position = 'fixed';
				fly.style.top = `${verticalLineRect.y - 50}px`;
				fly.style.left = `${verticalLineRect.x}px`;
			}
		};

		window.addEventListener('scroll', handleScroll);

		handleScroll();

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<Wrap>
			<YellowPolygon src="./home/home-polygon.svg" />
			<YellowTrapezoid src="./home/reach-insure-amount-event-trapezoid.svg" />
			<LargeYellowTrapezoid src="./home-yellow-bg-2.svg" />
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
			 <BlueBackground src="./home-blue-bg-3.svg" />
			 <LargeBlueBackground src="./home-blue-lg-bg-3.svg" />
		</Wrap>
	);
}

export default HomePage;
