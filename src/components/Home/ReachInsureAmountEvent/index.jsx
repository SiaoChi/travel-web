import { useRef } from "react"
import styled from "styled-components"
import Button from "../../Button"
import { gsap, useGSAP } from "../../../gsap";
import { useAnimations } from "../../Animation/useAnimations";

const Section = styled.section`
    position: relative;
    height: 1127px;
    @media (max-width: 1301px) {
        overflow: hidden;
        height: 1390px;
        width: 414px;
        left: 50%;
        transform: translateX(-50%);
    }
`

const YellowTrapezoid = styled.img`
    position: absolute;
    top: 0px;
    left: 0;
    width: 100%;
    @media (max-width: 1301px) {
        display: none;
    }
`

const MobileYellowTrapezoid = styled.img`
    position: absolute;
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
    width: 414px;
    @media (min-width: 1301px) {
        display: none;
    }
`

const Flowers = styled.img`
    position: absolute;
    z-index: 1;
    top: 100px;
    left: 100px;
    width: 95%;
    height: 940px;
    @media (max-width: 1301px) {
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
    @media (min-width: 1301px) {
        display: none;
    }
`
const Temple = styled.img`
    position: absolute;
    top: 170px;
    left: 62px;
    width: 678px;
    @media (max-width: 1301px) {
        top: 80px;
        left: 4%;
        transform: translateX(-50%);
        width: 430px;
    }
    @media (max-width: 376px) {
        width: 385px;
    }
`

const Mountain = styled.img`
    position: absolute;
    top: 220px;
    right: -40px;
    width: 428px;
    @media (max-width: 1301px) {
        top: 380px;
        left: 50%;
        transform: translateX(-40%);
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
        top: 260px;
        left: 14%;
        transform: translateX(-48%);
        font-size: 20px;
        line-height: 35px;
        letter-spacing: 1px;
        width: 300px;
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
    font-family: 'Roboto';
    @media (max-width: 1301px) {
        top: 420px;
        left: 20%;
        transform: translateX(-40%);
        font-size: 40px;
        line-height: 40px;
        min-width: 300px;
    }
`


const EventImgOne = styled.img`
    position: absolute;
    bottom: 170px;
    left: 122px;
    @media (max-width: 1301px) {
        display: none;
    }
`

const MobileEventImgOne = styled.img`
    position: absolute;
    top: 520px;
    left: 5%;
    transform: translateX(-52%);
    @media (min-width: 1301px) {
        display: none;
        
    }
`

const ButtonWrapperOne = styled.div`
    position: absolute;
    bottom: 150px;
    left: 280px;
    z-index: 10;
    width: 289px;
    @media (max-width: 1301px) {
        width: 220px;
        top: 790px;
        left: 24%;
        transform: translateX(-45%);
    }
`

const EventImgTwo = styled.img`
    position: absolute;
    bottom: 170px;
    right: 60px;
    @media (max-width: 1301px) {
        display: none;
    }
`

const MobileEventImgTwo = styled.img`
    position: absolute;
    top: 860px;
    left: 15%;
    transform: translateX(-38%);
    @media (min-width: 1301px) {
        display: none;
    }
`

const ButtonWrapperTwo = styled.div`
    position: absolute;
    bottom: 150px;
    right: 320px;
    z-index: 10;
    width: 289px;
    @media (max-width: 1301px) {
        width: 220px;
        top: 1150px;
        left: 24%;
        transform: translateX(-45%);
    }
`

const LINK = "https://e-commerce.transglobe.com.tw/product/eta?utm_source=ec_eventpage&utm_medium=button&utm_campaign=ec_eventpage_transglobe-journey_domestic%26foreign&utm_term=2024q4&utm_content=eta"

const ReachInsureAmountEvent = () => {
    const { fadeInFromBottom, fadeInFromLeft, fadeInFromRight } = useAnimations();
    const sectionRef = useRef(null);

    const xMapping = {
        img1: "0%",
        img2: "-52%",
        img3: "0%",
        img4: "-38%",
    }

    useGSAP(() => {
        gsap.utils.toArray(".event-content").forEach((content) => {
            gsap.fromTo(content, { y: 100, x: xMapping[content.id], opacity: 0 }, {
                x: xMapping[content.id],
                y: 0,
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
    }, { scope: sectionRef });
 
    return (
        <Section ref={sectionRef}>
            {/* <YellowTrapezoid src="./home/reach-insure-amount-event-trapezoid.svg" /> */}
            <MobileYellowTrapezoid src="./home/reach-insure-amount-event-trapezoid-mobile.svg" />
            <Temple ref={fadeInFromLeft} id="sec2" src="./home/reach-insure-amount-event-temple.svg" />
            <Mountain src="./home/reach-insure-amount-event-mountain.svg" />

            <Title ref={fadeInFromLeft}>
                <img src='./home/reach-insure-amount-event-title.svg' />
                <img src='./home/common-title-lottery.svg' />
            </Title>
            <Desc ref={fadeInFromLeft}>
                2024/10/1~2025/1/31期間，<br/>
                成功網路投保<span>「國外旅平險」</span>，單筆保費滿額即可抽！
            </Desc>

            <EnglishText ref={fadeInFromBottom}>TRAVEL<br/>JAPAN<br/>TOKYO</EnglishText>

            <EventImgOne ref={fadeInFromBottom} src="./home/reach-insure-amount-event1.svg" className="event-content" id="img1" />
            <MobileEventImgOne ref={fadeInFromBottom} src="./home/reach-insure-amount-event1-mobile.svg"  className="event-content" id="img2" />
            <ButtonWrapperOne ref={fadeInFromBottom}>
				<a target="_blank" href={LINK}>
                    <Button color="blue" height="60px">投保立即抽</Button>
                </a>
			</ButtonWrapperOne>

            <EventImgTwo ref={fadeInFromBottom} src="./home/reach-insure-amount-event2.svg" className="event-content" id="img3"/>
            <MobileEventImgTwo ref={fadeInFromBottom} src="./home/reach-insure-amount-event2-mobile.svg"  className="event-content" id="img4"/>
            <ButtonWrapperTwo ref={fadeInFromBottom}>
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