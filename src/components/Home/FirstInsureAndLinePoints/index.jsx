import styled from "styled-components"

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

const People = styled.img`
    position: absolute;
    left: 50%;
    bottom: 244px;
    translate: -50% 0;
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
        <Section>
            <Flower src="./home/first-insure-line-points-flower.svg"/>
            <BlueBackground src="./home/line-points-blue-background.svg" />
            <People src="./home/line-points-people.svg" />

            <Italy src="./home/first-insure-event-italy.svg" />
            <Tower src="./home/first-insure-event-tower.svg" />
            <EventImg src="./home/first-insure-event.svg" />
            

            <Title>
                <img src='./home/reach-insure-amount-event-title.svg' />
                <img src='./home/common-title-lottery.svg' />
            </Title>
            <Desc>
                <strong>2024/10/1~2025/1/31期間，</strong><br/>
                <strong><span>首次</span>成功網路投保<span>「國內外旅平險」</span></strong><br/>
                （限從未投保全球人壽任一險種者）
            </Desc>

            <EnglishTextOne>PX MART<br/>COUPON</EnglishTextOne>
            <EnglishTextTwo>LINE<br/>POINTS</EnglishTextTwo>

        </Section>
    )
}

export default FirstInsureAndLinePoints