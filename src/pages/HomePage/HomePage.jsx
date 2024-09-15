import { useEffect } from "react";
import styled from "styled-components";
import EventBanner from "../../components/Home/EventBanner";
import NewYearEvent from "../../components/Home/NewYearEvent";
import ReachInsureAmountEvent from "../../components/Home/ReachInsureAmountEvent";
import FirstInsureAndLinePoints from "../../components/Home/FirstInsureAndLinePoints";
import { gsap, useGSAP } from "../../gsap";

const Wrap = styled.div`
  padding-top: 90px;
  background-color: #FFFAF1;
  display: flex;
  justify-content: center;
  overflow: hidden;
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
	width: 50px;
	border-left: 1px solid black;
	@media screen and (max-width: 1300px) {
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

  useGSAP(() => {
		gsap.utils.toArray(".event-content").forEach((content) => {
			gsap.from(content, {
				y: 100,
				opacity: 0,
				duration: 1,
				ease: "power3.out",
				scrollTrigger: {
					trigger: content,
					start: "top 80%",
					toggleActions: "play none none none",
				},
			});
		});
	}, []);

	return (
		<Wrap>
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
		</Wrap>
	);
}

export default HomePage;
