// src/pages./homePage./homePage.jsx
// import Menu from "../../components/Menu/Menu";

import styled from "styled-components";
import EventBanner from "../../components/Home/EventBanner";
import NewYearEvent from "../../components/Home/NewYearEvent";
import ReachInsureAmountEvent from "../../components/Home/ReachInsureAmountEvent";

const Wrap = styled.div`
  padding-top: 121px;
  background-color: #FFFAF1;
  display: flex;
  justify-content: center;
  position: relative;
`

const Container = styled.div`
  width: 1366px;
`

function HomePage() {
  return (
    <Wrap>
      <Container>
        <EventBanner/>
        <NewYearEvent />
        <ReachInsureAmountEvent />
      </Container>
   </Wrap>
  );
}

export default HomePage;