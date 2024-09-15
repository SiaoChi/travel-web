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
  top: 687px;
  background-color: black;
   @media (max-width: 1301px) {
        top: 200px;
        right: -100px;
        width: 204px;
        transform: scaleY(-1) rotate(-10deg);
    }
`;

const Fly = styled.img`
  position: fixed;
  left: calc((100vw - 1500px)/2 + 90px);
  top: calc(687px + 120px);
`;

function HomePage() {

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
	});

	return (
		<Wrap>
			<Container>
				<EventBanner />
				<NewYearEvent />
				<ReachInsureAmountEvent />
				<FirstInsureAndLinePoints />

				{/* <VerticalLine /> */}
				<Fly src="./home/home-fly.svg" />
			</Container>
		</Wrap>
	);
}

export default HomePage;
