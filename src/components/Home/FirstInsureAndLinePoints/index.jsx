import { useRef } from "react"
import styled from "styled-components"
import Button from "../../Button"
import { Link } from "react-router-dom"
import { gsap, useGSAP } from "../../../gsap";
import { useAnimations } from "../../Animation/useAnimations";

const Section = styled.section`
    position: relative;
    height: 1429px;
    @media (max-width: 999px) {
        height: 1529px;
        width: 440px;
        left: 50%;
        transform: translateX(-50%);
    }
    @media (min-width: 1000px) and (max-width: 1300px) {
        height: 1270px;
        width: 800px;
        margin: 0 auto;
    }
    @media (min-width: 450px) and (max-width: 576px) {
        width: 575px;
    }
`

const Tower = styled.img`
    position: absolute;
    left: 51px;
    @media (min-width: 1000px) and (max-width: 1300px) {
        width: 450px;
        left: 0%;
    }
    @media (max-width: 999px) {
        top: -100px;
        left: 5%;
        width: 400px;
    }
    @media (max-width: 381px) {
        width: 375px;
        left: 0%;
    }
`

const EventImg = styled.img`
    position: absolute;
    top: 198px;
    right: 35px;
    @media (min-width: 1000px) and (max-width: 1300px) {
        display: none;
    }
    @media (max-width: 999px) {
        display: none;
    }
`

const MobileEventImg = styled.img`
    display: none;
    @media (max-width: 1300px) {
        display: block;
        position: absolute;
        top: 260px;
        right: 0;
    }
    @media (min-width: 1000px) and (max-width: 1300px) {
        left: unset;
        right: 0;
    }
    @media (min-width: 800px) and (max-width: 1000px) {
        left: 10%;
    }
    @media (min-width: 576px) and (max-width: 800px) {
        left: 10%;
    }
    @media (max-width: 575px) {
        left: 20%;
    }
    @media (max-width: 381px) {
        left: 15%;
    }
`

const ButtonWrapperOne = styled.div`
    position: absolute;
    top: 480px;
    right: 275px;
    z-index: 10;
    width: 289px;
    opacity: 0;
    @media (min-width: 1000px) and (max-width: 1300px) {
        right: 9%;
        width: 250px;
        top: 465px;
    }
    @media (max-width: 999px) {
        width: 220px;
        top: 470px;
        left: 17%;
    }
    @media (min-width: 382px) and (max-width: 576px) {
        left: 26%;
    }
    @media (max-width: 381px) {
        left: 23%;
    }
`

const People = styled.img`
    z-index: 10;
    opacity: 0;
    @media (max-width: 999px) {
        display: none;
    }
`

const PeopleWrapper = styled.div`
    position: absolute;
    bottom: 244px;
    width: 100%;
    display: flex;
    justify-content: center;
    @media (min-width: 1000px) and (max-width: 1300px) {
        bottom: 150px;
    }
    @media (max-width: 999px) {
        bottom: 600px;
    }
`

const MobilePeople = styled.img`
    position: absolute;
    width: 80%;
    opacity: 0;
    z-index: 11;
    @media (min-width: 1000px) {
        display: none;
    }
    @media (min-width: 450px) and (max-width: 576px) {
        width: 65%;
    }
`

const ButtonWrapperTwo = styled.div`
    position: absolute;
    left: 50%;
    bottom: 295px;
    translate: -50% 0;
    z-index: 11;
    width: 289px;
    @media (min-width: 1000px) and (max-width: 1300px) {
        bottom: 190px;
    }
    @media (max-width: 999px) {
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
    @media (min-width: 1000px) and (max-width: 1300px) {
        bottom: 70px;
    }
    @media (max-width: 999px) {
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
    z-index: 11;
    @media (min-width: 1000px) and (max-width: 1300px) {
        bottom: 300px;
    }
    @media (max-width: 999px) {
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
    z-index: 11;
    @media (min-width: 1000px) and (max-width: 1300px) {
        bottom: 260px;
        width: 430px;
    }
    @media (max-width: 999px) {
        bottom: 280px;
        height: 40px;
        width: 280px;
    }
`

const Flower = styled.img`
    position: absolute;
    top: 50px;
    left: 150px;
    z-index: -1;
    @media (max-width: 999px) {
        display: none;
    }
`

const MobileFlower = styled.img`
    position: absolute;
    top: -100px;
    left: 50%;
    transform: translateX(-50%);
    @media (min-width: 1000px) {
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
    @media (max-width: 999px) {
        top: -40px;
        left: 14%;
        transform: translateX(-46%);
        width: 320px;
         > img {
            height: 40px;
        }
    }
    @media (min-width: 1000px) and (max-width: 1300px) {
        left: 6%;
        top: 60px;
        > img {
            height: 55px;
        }
    }
    @media (min-width: 450px) and (max-width: 576px) {
        left: 120px;
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
    @media (min-width: 1000px) and (max-width: 1300px) {
        top: 260px;
        left: 5%;
        font-size: 16px;
    }
    @media (max-width: 999px) {
        top: 120px;
        left: 14%;
        transform: translateX(-42%);
        line-height: 35px;
        letter-spacing: 1px;
        width: 350px;
        font-size: 16px;
    }
    @media (min-width: 450px) and (max-width: 576px) {
        left: 20%;
    }
`

const EnglishTitlePicture4 = styled.img`
    position: absolute;
    top: 580px;
    right: 6%;
    width: 304px;
    opacity: 0;
    @media (min-width: 1000px) and (max-width: 1300px) {
        top: 560px;
        width: 250px;
    }
    @media (max-width: 999px) {
        width: 195px;
        top: 580px;
        right: 12%;
    }
`

const EnglishTitlePicture5 = styled.img`
    position: absolute;
    top: 740px;
    left: 114px;
    width: 254px;
    z-index: 20;
     opacity: 0;
    @media (min-width: 1000px) and (max-width: 1300px) {
        top: 740px;
        width: 200px;
        left: 0%;
    }
    @media (max-width: 999px) {
        width: 150px;
        top: 840px;
        left: 12%;
    }
`

const FirstInsureAndLinePoints = () => {
    const { fadeInFromBottom, fadeInFromLeft, btnFadeInFromBottom,fadeInFromRight} = useAnimations();
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
            <Tower ref={fadeInFromLeft} id="sec3" src="./home/first-insure-event-tower.svg" />

            <EventImg ref={fadeInFromBottom} src="./home/first-insure-event.svg" className="event-content" id="img1" />
            <MobileEventImg ref={fadeInFromBottom} src="./home/first-insure-event-mobile.svg" className="event-content" id="img2" />
            <ButtonWrapperOne ref={btnFadeInFromBottom}>
                <a target="_blank" href="https://e-commerce.transglobe.com.tw/product/eta?utm_source=ec_eventpage&utm_medium=button&utm_campaign=ec_eventpage_transglobe-journey_first-time&utm_term=2024q4&utm_content=eta">
				    <Button color="blue" height="60px">投保立即抽</Button>
                </a>
			</ButtonWrapperOne>
            <EnglishTitlePicture4 ref={fadeInFromRight} src="./home/english-title4.png" />
            <EnglishTitlePicture5 ref={fadeInFromLeft} src="./home/english-title5.png" />
            {/* <EnglishTextOne ref={fadeInFromBottom}>PX MART<br/>COUPON</EnglishTextOne> */}

            <Title ref={fadeInFromLeft}>
                <img src='./home/first-insure-event-title.svg' />
                <img src='./home/common-title-lottery.svg' />
            </Title>
            <Desc ref={fadeInFromLeft}>
                <strong>2024/10/1~2025/1/31期間</strong><br/>
                <strong><span>首次</span>成功<span className="text-c-red">網路投保</span><span>「國內外旅平險」</span></strong><br/>
                （限從未網路投保全球人壽任一險種者）
            </Desc>

            <PeopleWrapper>
                <People ref={fadeInFromBottom} src="./home/line-points-people.png" className="event-content" id="img3" />
                <MobilePeople ref={fadeInFromBottom} src="./home/line-points-people-mobile.png"  className="event-content" id="img4" />
            </PeopleWrapper>

            <MoreRewardTitle src="./home/line-points-event-title.svg" />
            <MoreRewardDesc>快推薦好友，就有機會獲得 LINE POINTS 喔！</MoreRewardDesc>
            <ButtonWrapperTwo ref={fadeInFromBottom}>
				<Link to="/mgm">
                    <Button color="red" height="60px">立即前往</Button>
                </Link>
			</ButtonWrapperTwo>
            <ButtonWrapperThree>
				<Link to="/policy">
                    <Button color="white" height="60px" hoverBgColor="#FF837E">活動辦法</Button>
                </Link>
			</ButtonWrapperThree>

            <Flower src="./home/first-insure-line-points-flower.svg"/>
            <MobileFlower src="./home/first-insure-line-points-flower-mobile.svg"/>
        </Section>
    )
}

export default FirstInsureAndLinePoints