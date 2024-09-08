import styled from "styled-components"

const Section = styled.section`
    position: relative;
    height: 660px;
`

const BannerTitle = styled.div`
    position: relative;
    margin: 20px 0px 20px 91px;
`

const TitleText = styled.img`
    padding-top: 70px;
    width: 486px;
`

const TitleAirplaine = styled.img`
    width: 486px;
    position: absolute;
    top: 0;
`

const Desc = styled.div`
    width: 486px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 91px;
    margin-bottom: 40px;
    line-height: 35px;
    letter-spacing: 4px;
    font-size: 25px;
    font-weight: bold;
    > p > span {
        color: #2496F0;
    }
`

const EnglishTitle = styled.p`
    font-size: 65px;
    line-height: 65px;
    margin-left: 74px;
    font-weight: bold;
    letter-spacing: 2px;
    color: #2496F0;
    text-shadow: 0px 5px 5px lightgrey;
`

const BgFlowers = styled.img`
    position: absolute;
    right: 50px;
    width: 795px;
`

const LineOne = styled.img`
    position: absolute;
    top: 308px;
    left: 364px;
    width: 343px;
`

const LineTwo = styled.img`
    position: absolute;
    top: 300px;
    right: 0;
    width: 383px;
    transform:rotate(-5deg)
`



const EventBanner = () => {

    return (
        <Section>
            <BgFlowers src="./home/event-banner-flower.png" />
            <LineOne src="./home/event-banner-line1.svg" />
            <LineTwo src="./home/event-banner-line2.svg" />           

            <BannerTitle>
                <TitleText src="./home/event-banner-title.png" />
                <TitleAirplaine src="./home/event-banner-airplane.png" />
            </BannerTitle>
            <Desc>
                <p>保全球旅平險</p>
                <p>驚喜<span>多多多多多多</span>到滿出來！</p>
            </Desc>
            <EnglishTitle>
                TRAVEL<br/>A TRANSGLOBE JOURNEY
            </EnglishTitle>

            
        </Section>
    )
  
}

export default EventBanner