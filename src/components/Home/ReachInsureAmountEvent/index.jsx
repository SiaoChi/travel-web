import styled from "styled-components"
import Button from "../../Button"

const Section = styled.section`
    position: relative;
    height: 1127px;
`

const YellowTrapezoid = styled.img`
  position: absolute;
  top: 0px;
  left: 0;
  width: 100%;
`

const Flowers = styled.img`
    position: absolute;
    z-index: 1;
    top: 100px;
    left: 100px;
    width: 95%;
    height: 940px;
`

const Temple = styled.img`
    position: absolute;
    top: 170px;
    left: 62px;
    width: 678px;
`

const Mountain = styled.img`
    position: absolute;
    top: 220px;
    right: -40px;
    width: 678px;
`

const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    position: absolute;
    top: 210px;
    left: 182px;
    > img {
        height: 60px;
    }
`

const Desc = styled.div`
    position: absolute;
    z-index: 1;
    top: 400px;
    left: 182px;
    line-height: 35px;
    letter-spacing: 4px;
    font-size: 20px;
    font-weight: bold;
    > span {
        color: #2496F0;
    }
`

const EnglishText = styled.div`
    position: absolute;
    top: 200px;
    right: 80px;
    font-size: 65px;
    line-height: 65px;
    font-weight: bold;
    color: #2496F0;
    text-align: right;
`


const EventImgOne = styled.img`
    position: absolute;
    bottom: 170px;
    left: 122px;
`

const ButtonWrapperOne = styled.div`
    position: absolute;
    bottom: 150px;
    left: 280px;
    z-index: 10;
`

const EventImgTwo = styled.img`
    position: absolute;
    bottom: 170px;
    right: 60px;
`

const ButtonWrapperTwo = styled.div`
    position: absolute;
    bottom: 150px;
    right: 320px;
    z-index: 10;
`


const ReachInsureAmountEvent = () => {

    return (
    
        <Section id="sec2">
            <YellowTrapezoid src="./home/reach-insure-amount-event-trapezoid.svg" />
            <Flowers src="./home/reach-insure-amount-event-flower.svg" />
            <Temple src="./home/reach-insure-amount-event-temple.svg" />
            <Mountain src="./home/reach-insure-amount-event-mountain.svg" />

            <Title>
                <img src='./home/reach-insure-amount-event-title.svg' />
                <img src='./home/common-title-lottery.svg' />
            </Title>
            <Desc>
                2024/10/1~2025/1/31期間，<br/>
                成功網路投保<span>「國外旅平險」</span>，單筆保費滿額即可抽！
            </Desc>

            <EnglishText>TRAVEL<br/>JAPAN<br/>TOKYO</EnglishText>

            <EventImgOne src="./home/reach-insure-amount-event1.svg" />
            <ButtonWrapperOne>
                <Button color="blue" width="289px" height="60px">投保立即抽</Button>
            </ButtonWrapperOne>

            <EventImgTwo src="./home/reach-insure-amount-event2.svg" />
            <ButtonWrapperTwo>
                <Button color="blue" width="289px" height="60px">投保立即抽</Button>
            </ButtonWrapperTwo>
            

        </Section>
    )
}

export default ReachInsureAmountEvent