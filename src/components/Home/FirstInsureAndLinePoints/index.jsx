import { useRef } from "react"
import styled from "styled-components"
import Button from "../../Button"
import { Link } from "react-router-dom"
import { gsap, useGSAP } from "../../../gsap";

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
    @media (max-width: 376px) {
        width: 375px;
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
    transform: translate(-50%, 0);
    @media (max-width: 1301px) {
        display: none;
    }
`

const MobilePeople = styled.img`
    position: absolute;
    left: 50%;
    bottom: 120px;
    transform: translate(-50%, 0);
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

    const sectionRef = useRef(null);

    useGSAP(() => {
        const xMapping = {
            img1: "0%",
            img2: "-42%",
            img3: "-50%",
            img4: "-50%",
        }
        gsap.utils.toArray(".event-content").forEach((content) => {
            const x = xMapping[content.id];
            gsap.fromTo(content, { y: 100, transform: `translateX(${x})`, opacity: 0 }, {
                y: 0,
                transform: `translateX(${x})`,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: content,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            });
        });
    }, { scope: sectionRef, dependencies: [] });

    return (
        <Section ref={sectionRef}>
            <Tower id="sec3" src="./home/first-insure-event-tower.svg" />

            <EventImg src="./home/first-insure-event.svg" className="event-content" id="img1" />
            <MobileEventImg src="./home/first-insure-event-mobile.svg" className="event-content" id="img2" />
            <ButtonWrapperOne>
				<Button color="blue" height="60px">
                    <a href="https://e-commerce.transglobe.com.tw/product/eta?utm_source=ec_eventpage&utm_medium=button&utm_campaign=ec_eventpage_transglobe-journey_first-time&utm_term=2024q4&utm_content=eta">投保立即抽</a>
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

            <People src="./home/line-points-people.svg" className="event-content" id="img3" />
            <MobilePeople src="./home/line-points-people-mobile.svg"  className="event-content" id="img4" />

            <EnglishTextTwo>LINE<br/>POINTS</EnglishTextTwo>

            <MoreRewardTitle src="./home/line-points-event-title.svg" />
            <MoreRewardDesc>快推薦好友，就有機會獲得 LINE POINTS 喔！</MoreRewardDesc>
            <ButtonWrapperTwo>
				<Button color="red" height="60px">
                    <Link to="/mgm">立即前往</Link>
				</Button>
			</ButtonWrapperTwo>
            <ButtonWrapperThree>
				<Button color="white" height="60px" hoverBgColor="#FF837E">
                    <Link to="/policy">活動辦法</Link>
				</Button>
			</ButtonWrapperThree>

            <Flower src="./home/first-insure-line-points-flower.svg"/>
            <MobileFlower src="./home/first-insure-line-points-flower-mobile.svg"/>
        </Section>
    )
}

export default FirstInsureAndLinePoints