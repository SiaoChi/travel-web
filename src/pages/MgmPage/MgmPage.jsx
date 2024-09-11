import styled from "styled-components";
import { useEffect, useState } from "react"

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
  height: 2780px;
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
  width: 1300px;
`

const ContentPoint = styled.img`
  position: absolute;
  top: 660px;
  left: 78px;
  width: 1360px;
`

const BackgroundBuilding = styled.img`
  position: absolute;
  bottom: 375px;
  left: 100px;
  width: 1312px;
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
    animation: fadeIn 1s ease-in-out backwards;
`

const BannerTitlePoint = styled.img`
    position: absolute;
    top: 50px;
    left: 100px;
    width: 500px;
    animation: fadeIn 1s ease-in-out backwards;
    animation-delay: .5s;
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
        color:  ${props => props.isBlue ? "#2496F0" : "#FF837E" };
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

const ContentDesc = styled(Desc)`
    font-size: 20px;
    top: 730px;
    left: 50%;
    transform: translateX(-50%);
`

const LinePointsText = styled.img`
    position: absolute;
    top: 790px;
    left: 50%;
    transform: translateX(-50%);
    width: 387px;
`

const MgmContentOne = styled.img`
    position: absolute;
    top: 900px;
    left: 50%;
    transform: translateX(-50%);
    width: 974px;
`

const MgmContentTwo = styled.img`
    position: absolute;
    top: 1163px;
    left: 50%;
    transform: translateX(-48%);
    width: 1010px;
`

const MgmContentThree = styled.img`
    position: absolute;
    top: 1463px;
    left: 50%;
    transform: translateX(-52%);
    width: 928px;
`

const People = styled.img`
    position: absolute;
    top: 1800px;
    left: 50%;
    transform: translateX(-50%);
    width: 821px;
`

const  ActionDesc = styled(Desc)`
    font-size: 20px;
    top: 2110px;
    left: 50%;
    transform: translateX(-50%);
    letter-spacing: 1px;
`

const ActionLinePoints = styled.img`
    position: absolute;
    top: 2160px;
    left: 50%;
    transform: translateX(-50%);
    width: 717px;
`

const  BottomDesc = styled(Desc)`
    font-size: 16px;
    font-weight: 400;
    top: 2380px;
    left: 50%;
    transform: translateX(-50%);
    line-height: 25px;
    letter-spacing: 1px;
`


const MgmPage = () => {
    const [isBlue, setIsBlue] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setIsBlue(!isBlue)
        }, 1000)

        return () => clearInterval(interval)
    },[isBlue])

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
                <Desc isBlue={isBlue}>
                    <p>推薦好友全球旅平險</p>
                    <p>快樂<span>+1+1+1+1+1+1+1+1+1</span></p>
                </Desc>
                <EnglishTitle>
                    COLLECT<br/>A LOT OF LINE POINTS
                </EnglishTitle>

                <ContentDesc>
                    <p>2024/10/1~2025/1/31</p>
                    <p>成功邀請親友投保旅平險，達指定筆數</p>
                </ContentDesc>
                <LinePointsText src="./mgm/mgm-line-points-text.svg" />

                <MgmContentOne src="./mgm/mgm-content1.svg" />
                <MgmContentTwo src="./mgm/mgm-content2.svg" />
                <MgmContentThree src="./mgm/mgm-content3.svg" />

                <People src="./mgm/mgm-people-and-frame.svg" />
                <ActionDesc><p>只要親友點選「你的推薦連結」成功投保</p></ActionDesc>
                <ActionLinePoints src="./mgm/mgm-bottom-info-title.svg" />
                <BottomDesc>
                    <p>點擊上方按鈕後，註冊或登入取得邀請碼</p>
                    <p>就能分享給親友，一起抽點數！</p>
                </BottomDesc>
        
            </Container>
      </Wrap>
    )
}

export default MgmPage;