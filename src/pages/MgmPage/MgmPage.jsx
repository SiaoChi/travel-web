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
  top: 507px;
  left: 0;
  width: 100%;
`

const BannerFlower = styled.img`
  position: absolute;
  top: 0;
  right: 20px;
  width: 964px;
`


const BannerTitle = styled.img`
    position: absolute;
    top: 100px;
    left: 100px;
    width: 500px;
`

const BannerTitlePoint = styled.img`
    position: absolute;
    top: 100px;
    left: 100px;
    width: 500px;
`

const Desc = styled.div`
    position: absolute;
    top: 380px;
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

const MgmPage = () => {
    return (
        <Wrap>
            <Container>
                <YellowBackground src="./mgm/mgm-trapezoid.svg" />
                <BannerFlower src="./mgm/mgm-banner-flower.svg" />
                
                <BannerTitle src="./mgm/mgm-title.png" />
                <BannerTitlePoint src="./mgm/mgm-title-p.png" />
                <Desc>
                    <p>推薦好友全球旅平險</p>
                    <p>快樂<span>+1+1+1+1+1+1+1+1+1</span></p>
                </Desc>
        
            </Container>
      </Wrap>
    )
}

export default MgmPage;