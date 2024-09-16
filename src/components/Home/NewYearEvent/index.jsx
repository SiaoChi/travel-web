import { useRef } from "react";
import styled from "styled-components";
import Button from "../../Button/Button";
import { gsap, useGSAP } from "../../../gsap";
import { useAnimations } from "../../Animation/useAnimations";

const Section = styled.section`
    position: relative;
    height: 730px;
    @media (max-width: 1301px) {
        width: 414px;
        left: 50%;
        transform: translateX(-50%);
    }
`;

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
    @media (max-width: 1301px) {
        top: 0px;
        left: 14%;
        transform: translateX(-46%);
        width: 320px;
         > img {
            height: 40px;
        }
    }
`;

const Desc = styled.div`
    position: absolute;
    left: 182px;
    top: 450px;
    line-height: 35px;
    letter-spacing: 4px;
    font-size: 20px;
    font-weight: bold;
    > span {
        color: #2496F0;
    }
    @media (max-width: 1301px) {
        top: 160px;
        left: 14%;
        transform: translateX(-46%);
        font-size: 20px;
        line-height: 35px;
        letter-spacing: 1px;
        width: 320px;
    }
`;

const Flowers = styled.img`
    position: absolute;
    top: 60px;
    left: 40px;
    width: 1500px;
    height: 800px;
    @media (max-width: 1301px) {
        display: none;
    }
`;

const MobileFlowers = styled.img`
    position: absolute;
    top: 220px;
    left: 50%;
    transform: translateX(-40%);
    width: 299px;
    @media (min-width: 1301px) {
        display: none;
    }
`;

const Fireworks = styled.img`
    position: absolute;
    top: 72px;
    left: 62px;
    width: 584px;
    @media (max-width: 1301px) {
        top: -60px;
        left: 4%;
        transform: translateX(-50%);
        width: 380px;
    }
    @media (max-width: 376px) {
        width: 375px;
    }
`;

const LineOne = styled.img`
    position: absolute;
    left: -65px;
    bottom: 20px;
    width: 343px;
    @media (max-width: 1301px) {
        display: none;
    }
`;

const LineTwo = styled.img`
    position: absolute;
    left: 269px;
    bottom: 20px;
    width: 383px;
    transform:rotate(-5deg);
    @media (max-width: 1301px) {
        display: none;
    }
`;

const MobileLine = styled.img`
    display: none;
    @media (max-width: 1301px) {
        display: block;
        position: absolute;
        top: 400px;
        left: 50%;
        transform: translateX(-50%);
        width: 414px;
        
    }
`;

const EnglishText = styled.div`
    position: absolute;
    top: 100px;
    right: 41px;
    font-size: 65px;
    line-height: 65px;
    font-weight: bold;
    color: #FED430;
    text-align: right;
    @media (max-width: 1301px) {
        top: 260px;
        left: 20%;
        transform: translateX(-40%);
        font-size: 40px;
        line-height: 40px;
        min-width: 300px;
    }
`;

const EventImg = styled.img`
    position: absolute;
    bottom: 20px;
    right: 48px;
    @media (max-width: 1301px) {
        display: none;
    }
`;

const MobileEventImg = styled.img`
    position: absolute;
    top: 330px;
    transform: translateX(-50%);
    width: 414px;
    @media (min-width: 1301px) {
        display: none;
    }
`;

const ButtonWrapper = styled.div`
    position: absolute;
    bottom: 80px;
    right: 250px;
    z-index: 10;
    width: 289px;
    @media (max-width: 1301px) {
        width: 220px;
        left: 50%;
        transform: translateX(-50%);
    }
`;

const NewYearEvent = () => {
    const { fadeIn , fadeInFromLeft, fadeInFromRight, fadeInFromBottom } = useAnimations();

    const sectionRef = useRef(null);

    useGSAP(() => {
        gsap.utils.toArray(".event-content").forEach((content) => {
			gsap.from(content, {
				scale: 0.2,
				opacity: 0,
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
			<Fireworks ref={fadeIn} id="sec1" src="./home/new-year-event-fire.png" className="event-content" />
			<LineOne src="./home/shadow-line1.svg" />
			<LineTwo src="./home/shadow-line2.svg" />
			<MobileLine src="./home/shadow-line-mobile.svg" />

			<Title ref={fadeInFromLeft}>
				<img src="./home/new-year-event-title.svg" />
				<img src="./home/common-title-lottery.svg" />
			</Title>
			<Desc ref={fadeInFromLeft}>
				<span>2024/12/15-2025/1/20</span>期間，
				<br />
				成功網路投保<span>「國外旅平險」</span>
			</Desc>

			<EnglishText ref={fadeInFromBottom}>
				HAPPY
				<br />
				NEW YEAR
				<br />
				2025
			</EnglishText>
			<EventImg ref={fadeInFromBottom} src="./home/new-year-event.svg" />
			<MobileEventImg ref={fadeInFromBottom} src="./home/new-year-event-mobile.svg" />
			<ButtonWrapper>
				<Button color="blue" height="60px">
                    <a target="_blank" href="https://e-commerce.transglobe.com.tw/product/eta?utm_source=ec_eventpage&utm_medium=button&utm_campaign=ec_eventpage_transglobe-journey_newyear&utm_term=2024q4&utm_content=eta">投保立即抽</a>
				</Button>
			</ButtonWrapper>
			<Flowers src="./home/new-year-event-flower.svg" />
			<MobileFlowers src="./home/new-year-event-flower-mobile.svg" />
		</Section>
	);
};

export default NewYearEvent;
