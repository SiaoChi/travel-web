import styled from "styled-components"
import Button from "../../Button"

const Section = styled.section`
    position: relative;
    height: 1429px;
`

const Italy = styled.img`
    position: absolute;
    top: 414px;
    left: 244px;
`

const BlueBackground = styled.img`
    position: absolute;
    bottom: -220px;
    width: 100%;
`

const Tower = styled.img`
    position: absolute;
    left: 51px;
`

const EventImg = styled.img`
    position: absolute;
    top: 198px;
    right: 35px;
`

const ButtonWrapperOne = styled.div`
    position: absolute;
    top: 480px;
    right: 275px;
    z-index: 10;
`

const People = styled.img`
    position: absolute;
    left: 50%;
    bottom: 244px;
    translate: -50% 0;
`

const ButtonWrapperTwo = styled.div`
    position: absolute;
    left: 50%;
    bottom: 295px;
    translate: -50% 0;
    z-index: 10;
`

const ButtonWrapperThree = styled.div`
    position: absolute;
    left: 50%;
    bottom: 105px;
    translate: -50% 0;
    z-index: 10;
`

const MoreRewardTitle = styled.img`
    position: absolute;
    left: 50%;
    bottom: 450px;
    translate: -50% 0;
    height: 50px;
`

const MoreRewardDesc = styled.p`
    position: absolute;
    left: 50%;
    bottom: 380px;
    translate: -50% 0;
    height: 35px;
    font-size: 20px;
    font-weight: bold;
`

const Flower = styled.img`
    position: absolute;
    top: 50px;
    left: 150px;
`

const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    position: absolute;
    top: 90px;
    left: 182px;
    > img {
        height: 60px;
    }
`

const Desc = styled.div`
    position: absolute;
    z-index: 1;
    top: 280px;
    left: 182px;
    line-height: 35px;
    letter-spacing: 4px;
    font-size: 20px;
    > strong > span {
        color: #2496F0;
    }
`

const EnglishText = styled.div`
    font-size: 65px;
    line-height: 65px;
    font-weight: bold;
    color: #FED430;
`

const EnglishTextOne = styled(EnglishText)`
    position: absolute;
    top: 580px;
    right: 87px;
    text-align: right;
`

const EnglishTextTwo = styled(EnglishText)`
    position: absolute;
    top: 737px;
    left: 114px;
    text-align: left;
`



const FirstInsureAndLinePoints = () => {

    return (
        <Section id="sec3">
            <Tower src="./home/first-insure-event-tower.svg" />

            <EventImg src="./home/first-insure-event.svg" />
            <ButtonWrapperOne>
                <Button color="blue" width="289px" height="60px">投保立即抽</Button>
            </ButtonWrapperOne>
            <EnglishTextOne>PX MART<br/>COUPON</EnglishTextOne>

            <Title>
                <img src='./home/first-insure-event-title.svg' />
                <img src='./home/common-title-lottery.svg' />
            </Title>
            <Desc>
                <strong>2024/10/1~2025/1/31期間，</strong><br/>
                <strong><span>首次</span>成功網路投保<span>「國內外旅平險」</span></strong><br/>
                （限從未投保全球人壽任一險種者）
            </Desc>
            
            <Italy src="./home/first-insure-event-italy.svg" />
            <BlueBackground src="./home/line-points-blue-background.svg" />

            <People src="./home/line-points-people.svg" />
            <EnglishTextTwo>LINE<br/>POINTS</EnglishTextTwo>

            <MoreRewardTitle src="./home/line-points-event-title.svg" />
            <MoreRewardDesc>快推薦好友，就有機會獲得 LINE POINTS 喔！</MoreRewardDesc>
            <ButtonWrapperTwo>
                <Button color="red" width="289px" height="60px">立即前往</Button>
            </ButtonWrapperTwo>
            <ButtonWrapperThree>
                <Button color="white" width="289px" height="60px" hoverBgColor="#FF837E">活動辦法</Button>
            </ButtonWrapperThree>

            <Flower src="./home/first-insure-line-points-flower.svg"/>
        </Section>
    )
}

export default FirstInsureAndLinePoints