import styled from "styled-components";

const Wrap = styled.div`
  padding-top: 90px;
  background-color: #FFFAF1;
  display: flex;
  justify-content: center;
  overflow: hidden;
`

const Container = styled.div`
  width: 100%;
  max-width: 1500px;
  position: relative;
  height: 2645px;
`

const YellowBackground = styled.img`
  position: absolute;
  top: 427px;
  left: 0;
  width: 100%;
`

const BannerFlower = styled.img`
  position: absolute;
  top: 0;
  right: 20px;
  width: 900px;
`

const ContentFlower = styled.img`
  position: absolute;
  top: 700px;
  left: 60px;
  width: 1232px;
`

const ContentPoint = styled.img`
  position: absolute;
  top: 660px;
  left: 78px;
  width: 1260px;
`

const BackgroundBuilding = styled.img`
  position: absolute;
  bottom: 375px;
  left: 100px;
  width: 1212px;
`

const BlueBackground = styled.img`
  position: absolute;
  bottom: -32px;
  width: 100%;
`


const BannerTitle = styled.img`
    position: absolute;
    top: 50px;
    left: 100px;
    width: 500px;
`

const BannerTitlePoint = styled.img`
    position: absolute;
    top: 50px;
    left: 100px;
    width: 500px;
`

const Desc = styled.div`
    position: absolute;
    top: 320px;
    left: 120px;
    width: 456px;
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 35px;
    letter-spacing: 4px;
    font-size: 25px;
    font-weight: bold;
    > p > span {
        color: #408CC9;
    }
`

const EnglishTitle = styled.p`
    position: absolute;
    top: 471px;
    left: 74px;
    font-size: 65px;
    line-height: 65px;
    font-weight: bold;
    letter-spacing: 2px;
    color: #2496F0;
`

const MgmPage = () => {
    return (
        <Wrap>
            <Container>
                <YellowBackground src="./mgm/mgm-trapezoid.svg" />
                <BannerFlower src="./mgm/mgm-banner-flower.svg" />
                <ContentFlower src="./mgm/mgm-info-flower.svg" />
                <ContentPoint src="./mgm/mgm-content-p-point.svg" />
                <BackgroundBuilding src="./mgm/mgm-building.svg" />
                <BlueBackground src="./mgm/mgm-blue-building.svg" />
                
                <BannerTitle src="./mgm/mgm-title.png" />
                <BannerTitlePoint src="./mgm/mgm-title-p.png" />
                <Desc>
                    <p>推薦好友全球旅平險</p>
                    <p>快樂<span>+1+1+1+1+1+1+1+1+1</span></p>
                </Desc>
                <EnglishTitle>
                    COLLECT<br/>A LOT OF LINE POINTS
                </EnglishTitle>
        
            </Container>
      </Wrap>
    )
}

export default MgmPage;