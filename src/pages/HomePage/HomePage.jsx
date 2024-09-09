import styled from "styled-components";
import EventBanner from "../../components/Home/EventBanner";
import NewYearEvent from "../../components/Home/NewYearEvent";
import ReachInsureAmountEvent from "../../components/Home/ReachInsureAmountEvent";
import FirstInsureAndLinePoints from "../../components/Home/FirstInsureAndLinePoints";

const Wrap = styled.div`
  padding-top: 121px;
  background-color: #FFFAF1;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
`

const Container = styled.div`
  width: 100%;
  max-width: 1500px;
`

function HomePage() {
  return (
    <Wrap>
      <Container>
        <EventBanner/>
        <NewYearEvent />
        <ReachInsureAmountEvent />
        <FirstInsureAndLinePoints />
      </Container>
   </Wrap>
  );
}

export default HomePage;