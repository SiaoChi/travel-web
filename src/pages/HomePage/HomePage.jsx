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
  position: relative;
`

const Container = styled.div`
  width: 1366px;
`

const YellowPolygon = styled.img`
  position: absolute;
  top: 500px;
  left: 0;
  width: 755px;
`

function HomePage() {
  return (
    <Wrap>
      <Container>
        <YellowPolygon src="./home/home-polygon.svg" />

        <EventBanner/>
        <NewYearEvent />
      </Container>
   </Wrap>
  );
}

export default HomePage;