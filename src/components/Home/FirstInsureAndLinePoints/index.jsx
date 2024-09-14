import styled from "styled-components"
import Button from "../../Button"

const Section = styled.section`
    position: relative;
    height: 1429px;
    @media (max-width: 1301px) {
        height: 1529px;
        width: 414px;
        left: 50%;
        transform: translateX(-50%);
    }
`

const Italy = styled.img`
    position: absolute;
    top: 414px;
    left: 244px;
    @media (max-width: 1301px) {
        top: 620px;
        left: 50%;
        transform: translateX(-60%);
        width: 294px;
    }
`

const BlueBackground = styled.img`
    position: absolute;
    bottom: -220px;
    width: 100%;
    @media (max-width: 1301px) {
        display: none;
    }
`

const MobileBlueBackground = styled.img`
    position: absolute;
    bottom: -25px;
    left: 50%;
    transform: translateX(-50%);
    width: 414px;
    @media (min-width: 1301px) {
        display: none;
    }
`

const Tower = styled.img`
    position: absolute;
    left: 51px;
    @media (max-width: 1301px) {
        top: -100px;
        left: 50%;
        transform: translateX(-50%);
        width: 400px;
    }
`


const EventImg = styled.img`
    position: absolute;
    top: 198px;
    right: 35px;
    @media (max-width: 1301px) {
        display: none;
    }
`

const MobileEventImg = styled.img`
    position: absolute;
    top: 260px;
    left: 50%;
    transform: translateX(-42%);
    @media (min-width: 1301px) {
        display: none;
    }
`

const ButtonWrapperOne = styled.div`
    position: absolute;
    top: 480px;
    right: 275px;
    z-index: 10;
    width: 289px;
    @media (max-width: 1301px) {
        width: 220px;
        top: 470px;
        left: 50%;
        transform: translateX(-50%);
    }
`

const People = styled.img`
    position: absolute;
    left: 50%;
    bottom: 244px;
    translate: -50% 0;
    @media (max-width: 1301px) {
        display: none;
    }
`

const MobilePeople = styled.img`
    position: absolute;
    left: 50%;
    bottom: 120px;
    translate: -50% 0;
    @media (min-width: 1301px) {
        display: none;
    }
`

const ButtonWrapperTwo = styled.div`
    position: absolute;
    left: 50%;
    bottom: 295px;
    translate: -50% 0;
    z-index: 10;
    width: 289px;
    @media (max-width: 1301px) {
        width: 220px;
        bottom: 168px;
    }
`

const ButtonWrapperThree = styled.div`
    position: absolute;
    left: 50%;
    bottom: 105px;
    translate: -50% 0;
    z-index: 10;
    width: 289px;
    @media (max-width: 1301px) {
        width: 220px;
        bottom: 30px;
    }
`

const MoreRewardTitle = styled.img`
    position: absolute;
    left: 50%;
    bottom: 450px;
    translate: -50% 0;
    height: 50px;
    @media (max-width: 1301px) {
        bottom: 350px;
        height: 40px;
    }
`

const MoreRewardDesc = styled.p`
    position: absolute;
    left: 50%;
    bottom: 380px;
    translate: -50% 0;
    height: 35px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    @media (max-width: 1301px) {
        bottom: 280px;
        height: 40px;
        width: 280px;
    }
`

const Flower = styled.img`
    position: absolute;
    top: 50px;
    left: 150px;
    @media (max-width: 1301px) {
        display: none;
    }
`

const MobileFlower = styled.img`
    position: absolute;
    top: -100px;
    left: 50%;
    transform: translateX(-50%);
    @media (min-width: 1301px) {
        display: none;
    }
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
    @media (max-width: 1301px) {
        top: -40px;
        left: 50%;
        transform: translateX(-46%);
        width: 320px;
         > img {
            height: 40px;
        }
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
    > strong {
        font-size: 20px;
    }
    > strong > span {
        color: #2496F0;
    }
    @media (max-width: 1301px) {
        top: 120px;
        left: 50%;
        transform: translateX(-42%);
        line-height: 35px;
        letter-spacing: 1px;
        width: 350px;
        font-size: 16px;
    }
`

const EnglishText = styled.div`
    font-size: 65px;
    line-height: 65px;
    font-weight: bold;
    color: #FED430;
    @media (max-width: 1301px) {
        left: 50%;
        font-size: 40px;
        line-height: 40px;
        min-width: 300px;
    }
`

const EnglishTextOne = styled(EnglishText)`
    position: absolute;
    top: 580px;
    right: 87px;
    text-align: right;
    @media (max-width: 1301px) {
        transform: translateX(-40%);
    }
`

const EnglishTextTwo = styled(EnglishText)`
    position: absolute;
    top: 737px;
    left: 114px;
    text-align: left;
    @media (max-width: 1301px) {
        top: 840px;
        transform: translateX(-26%);
    }
`

const FirstInsureAndLinePoints = () => {

    return (
        <Section >
            <Tower id="sec3" src="./home/first-insure-event-tower.svg" />

            <EventImg src="./home/first-insure-event.svg" />
            <MobileEventImg src="./home/first-insure-event-mobile.svg" />
            <ButtonWrapperOne>
				<Button color="blue" height="60px">
					投保立即抽
				</Button>
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
            <MobileBlueBackground src="./home/line-points-blue-background-mobile.svg" />

            <People src="./home/line-points-people.svg" />
            <MobilePeople src="./home/line-points-people-mobile.svg" />

            <EnglishTextTwo>LINE<br/>POINTS</EnglishTextTwo>

            <MoreRewardTitle src="./home/line-points-event-title.svg" />
            <MoreRewardDesc>快推薦好友，就有機會獲得 LINE POINTS 喔！</MoreRewardDesc>
            <ButtonWrapperTwo>
				<Button color="red" height="60px">
                立即前往
				</Button>
			</ButtonWrapperTwo>
            <ButtonWrapperThree>
				<Button color="white" height="60px" hoverBgColor="#FF837E">
                活動辦法
				</Button>
			</ButtonWrapperThree>

            <Flower src="./home/first-insure-line-points-flower.svg"/>
            <MobileFlower src="./home/first-insure-line-points-flower-mobile.svg"/>
        </Section>
    )
}

export default FirstInsureAndLinePoints