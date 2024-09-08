// src/pages./homePage./homePage.jsx
// import Menu from "../../components/Menu/Menu";

import styled from "styled-components";
import EventBanner from "../../components/Home/EventBanner";
import NewYearEvent from "../../components/Home/NewYearEvent";

const Wrap = styled.div`
  padding-top: 121px;
  background-color: #FFFAF1;
  display: flex;
  justify-content: center;
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
      </Container>
   </Wrap>
  );
}

export default HomePage;