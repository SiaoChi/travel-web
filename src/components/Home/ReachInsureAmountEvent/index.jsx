import styled from "styled-components"
import Button from "../../Button"
import { useAnimations } from "../../Animation/useAnimations";

const Section = styled.section`
    position: relative;
    height: 1127px;
    @media (max-width: 999px) {
        overflow: hidden;
        height: 1390px;
        width: 440px;
        left: 50%;
        transform: translateX(-50%);
    }
    @media (min-width: 1000px) and (max-width: 1300px) {
        height: 800px;
        margin-top:130px;
`

const Flowers = styled.img`
    position: absolute;
    z-index: 1;
    top: 100px;
    left: 100px;
    width: 95%;
    height: 940px;
    @media (min-width: 1000px) and (max-width: 1300px) {
        width: 800px;
    }
    @media (max-width: 999px) {
        display: none;
    }
`

const MobileFlowers = styled.img`
    position: absolute;
    z-index: 1;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 387;
    @media (min-width: 1000px) {
        display: none;
    }
`
const Temple = styled.img`
    position: absolute;
    top: 170px;
    left: 62px;
    width: 678px;
    opacity:0;
    @media (max-width: 1301px) {
      top: 80px;
      left: 0%;
      width: 480px;
    }
    @media (max-width: 1000px) {
      top: 80px;
      left: 5%;
      width: 480px;
    }
    @media (max-width: 381px) {
        width: 380px;
        left: 0%;
    }
`

const Mountain = styled.img`
    position: absolute;
    top: 220px;
    right: -40px;
    width: 700px;
    @media (max-width: 1301px) {
        width: 428px;
        top: 180px;
        right: 0;      
    }
    @media (max-width: 999px) {
        width: 300px;
        top: 300px;
        right: 0;
    }
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
    @media (max-width: 1301px) {
        top: 100px;
        left: 5%;
        transform: translateX(-46%);
        width: 90%;
    }
    @media (max-width: 999px) {
        top: 100px;
        left: 14%;
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
    top: 400px;
    left: 182px;
    line-height: 35px;
    letter-spacing: 4px;
    font-size: 20px;
    font-weight: bold;
    > span {
        color: #2496F0;
    }
    @media (max-width: 1301px) {
        top: 280px;
        left: 5%;
        transform: translateX(-48%);
        font-size: 20px;
        line-height: 35px;
        letter-spacing: 1px;
        width: 520px;
    }
    @media (max-width: 999px) {
        top: 260px;
        left: 14%;
        transform: translateX(-48%);
        font-size: 20px;
        line-height: 35px;
        letter-spacing: 1px;
        width: 300px;
    }
`

const EnglishTitlePicture3 = styled.img`
    position: absolute;
    top: 200px;
    right: 80px;
    width: 268px;
    height: auto;
    object-fit: contain; 
    z-index: 10;
    opacity: 0;
    @media (max-width: 1301px) {
        width: 25%;
        top: 130px;
        right: 0%;
    }
    @media (max-width: 999px) {
        width: 150px;
        top: 420px;
        right: 12%;
    }
`

const EventImgOne = styled.img`
    position: absolute;
    bottom: 170px;
    left: 122px;
    @media (max-width: 1430px) {
        left: 122px;
        width: 440px;
    }
    @media (max-width: 1301px) {
        display: none;
    }

    
`

const EventImgTwo = styled.img`
    position: absolute;
    bottom: 170px;
    right: 60px;
    @media (max-width: 1430px) {
        width: 515px;
        right: 16%;
    }
    @media (max-width: 1301px) {
        display: none;
    }
`

const MobileEventImgOne = styled.img`
    position: absolute;
    top: 380px;
    left: 5%;
    opacity:0;
    @media (min-width: 1301px) {
        display: none;
    }
    @media (max-width: 999px) {
    position: absolute;
    top: 520px;
    left: 5%;
    }
`

const ButtonWrapperOne = styled.div`
    position: absolute;
    bottom: 150px;
    left: 280px;
    z-index: 10;
    width: 289px;
    opacity:0;
    @media (max-width: 1430px) {
        left: 225px;
    }
    @media (max-width: 1301px) {
        width: 220px;
        top: 640px;
        left: 15%;
        opacity: 0;
    }
    @media (max-width: 999px) {
        width: 220px;
        top: 790px;
        left: 23%;
        opacity: 0;
    }
`

const ButtonWrapperTwo = styled.div`
    position: absolute;
    bottom: 150px;
    right: 320px;
    z-index: 10;
    width: 289px;
    opacity:0;
     @media (min-width: 1380px) and (max-width: 1430px) {
        width: 280px;
        top: 920px;
        right: 28%;
        opacity: 0;
    }
     @media (min-width: 1301px) and (max-width: 1379px) {
        width: 280px;
        top: 920px;
        right: 30%;
        opacity: 0;
    }
    @media (max-width: 1300px) {
        width: 220px;
        top: 640px;
        right: 13%;
    }
    @media (max-width: 999px) {
        width: 220px;
        top: 1150px;
        left: 23%;
    }
`

const MobileEventImgTwo = styled.img`
    position: absolute;
    top: 355px;
    right: 2%;
    opacity:0;
    @media (min-width: 1301px) {
        display: none;
    }
    @media (max-width: 999px) {
        top: 860px;
        left: 15%;
    }
`

const LINK = "https://e-commerce.transglobe.com.tw/product/eta?utm_source=ec_eventpage&utm_medium=button&utm_campaign=ec_eventpage_transglobe-journey_domestic%26foreign&utm_term=2024q4&utm_content=eta"

const ReachInsureAmountEvent = () => {
    const { fadeInFromBottom, fadeInFromLeft, btnFadeInFromBottom ,fadeInFromRight} = useAnimations();
 
    return (
        <Section>
            <Temple ref={fadeInFromLeft} id="sec2" src="./home/reach-insure-amount-event-temple.png" />
            <Mountain src="./home/reach-insure-amount-event-mountain.svg" />

            <Title ref={fadeInFromLeft}>
                <img src='./home/reach-insure-amount-event-title.svg' />
                <img src='./home/common-title-lottery.svg' />
            </Title>
            <Desc ref={fadeInFromLeft}>
                2024/10/1~2025/1/31期間<br/>
                成功網路投保<span>「國內外旅平險」</span>，單筆保費滿額即可抽！
            </Desc>

            <EnglishTitlePicture3 ref={fadeInFromRight}  src="./home/english-title3.png" />
            <EventImgOne ref={fadeInFromBottom} src="./home/reach-insure-amount-event1.svg" id="img1" />
            <MobileEventImgOne ref={fadeInFromBottom} src="./home/reach-insure-amount-event1-mobile.svg"  id="img2" />
            <ButtonWrapperOne ref={btnFadeInFromBottom}>
				<a target="_blank" href={LINK}>
                    <Button color="blue" height="60px">投保立即抽</Button>
                </a>
			</ButtonWrapperOne>

            <EventImgTwo ref={fadeInFromBottom} src="./home/reach-insure-amount-event2.svg" id="img3"/>
            <MobileEventImgTwo ref={fadeInFromBottom} src="./home/reach-insure-amount-event2-mobile.svg" id="img4"/>
            <ButtonWrapperTwo ref={btnFadeInFromBottom}>
                <a target="_blank" href={LINK}>
                    <Button color="blue" height="60px">投保立即抽</Button>
                </a>
			</ButtonWrapperTwo>

            <Flowers src="./home/reach-insure-amount-event-flower.svg" />
            <MobileFlowers src="./home/reach-insure-amount-event-flower-mobile.svg" />
        </Section>
    )
}

export default ReachInsureAmountEvent