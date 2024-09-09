import styled from "styled-components"

const Section = styled.section`
    position: relative;
    height: 730px;
    overflow: hidden;
`

const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    position: absolute;
    left: 182px;
    top: 160px;
    > img {
        height: 60px;
    }
`

const Desc = styled.div`
   position: absolute;
    left: 182px;
    top: 450px;
    line-height: 35px;
    letter-spacing: 4px;
    font-size: 25px;
    font-weight: bold;
    > span {
        color: #2496F0;
    }
`

const Flowers = styled.img`
    position: absolute;
    top: 60px;
    left: 40px;
    width: 1500px;
    height: 800px;
`

const Fireworks = styled.img`
    position: absolute;
    top: 72px;
    left: 62px;
    width: 584px;
`

const LineOne = styled.img`
    position: absolute;
    left: -65px;
    bottom: 20px;
    width: 343px;
`

const LineTwo = styled.img`
    position: absolute;
    left: 269px;
    bottom: 20px;
    width: 383px;
    transform:rotate(-5deg)
`

const EnglishText = styled.div`
    position: absolute;
    top: 100px;
    right: 41px;
    font-size: 65px;
    line-height: 65px;
    font-weight: bold;
    color: #FED430;
    text-align: right;
`

const EventImg = styled.img`
    position: absolute;
    bottom: 20px;
    right: 48px;
`

const NewYearEvent = () => {

    return (
        <Section>
            <Flowers src="./home/new-year-event-flower.svg" />
            <Fireworks src="./home/new-year-event-fire.png" />
            <LineOne src="./home/shadow-line1.svg" />
            <LineTwo src="./home/shadow-line2.svg" />  

            <Title>
                <img src='./home/new-year-event-title.svg' />
                <img src='./home/common-title-lottery.svg' />
            </Title>
            <Desc>
                <span>2024/12/15-2025/1/20</span>期間，<br/>
                成功網路投保<span>「國外旅平險」</span>
            </Desc>

            <EnglishText>HAPPY<br/>NEW YEAR<br/>2025</EnglishText>
            <EventImg src="./home/new-year-event.svg" />

        </Section>

    )
}

export default NewYearEvent