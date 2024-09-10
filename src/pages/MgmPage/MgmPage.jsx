import styled from "styled-components";

const Wrap = styled.div`
  padding-top: 90px;
  background-color: #FFFAF1;
  display: flex;
  justify-content: center;
  overflow: hidden;
  font-family: Noto Sans TC;

`

const Container = styled.div`
  width: 100%;
  max-width: 1500px;
  position: relative;
  height: 2645px;
`

const YellowBackground = styled.img`
  position: absolute;
  top: 417px;
  left: 0;
  width: 100%;
`

const MgmPage = () => {
    return (
        <Wrap>
            <Container>
                <YellowBackground src="./mgm/mgm-trapezoid.svg" />
                
          
  
            </Container>
      </Wrap>
    )
}

export default MgmPage;