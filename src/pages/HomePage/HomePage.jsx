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
