import styled from "styled-components";
import Button from "../../Button/Button";
import { useAnimations } from "../../Animation/useAnimations";

const Section = styled.section`
    position: relative;
    height: 730px;
    @media (max-width: 1300px) and (min-width: 1000px) {
        height: 700px;
        width: 800px;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 80px;
    }
    @media (max-width: 999px) {
        margin-top: unset;
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
    opacity: 0;
    > img {
        height: 60px;
    }
    @media (max-width: 1300px) and (min-width: 1000px) {
        left: 6%;
        top: 120px;
        width: 55%;
    }
    @media (max-width: 999px) {
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
    @media (max-width: 1300px) and (min-width: 1000px) {
        left: 6%;
        top: 420px;
        font-size: 20px;
    }
    @media (max-width: 999px) {
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
    z-index: 0;
    @media (max-width: 1300px) {
        display: none;
    }
`;

const MobileFlowers = styled.img`
    position: absolute;
    top: 220px;
    left: 50%;
    transform: translateX(-40%);
    width: 299px;
    z-index: 0;
    @media (min-width:999px) {
        display: none;
    }
`;

const Fireworks = styled.img`
    position: absolute;
    top: 72px;
    left: 60px;
    width: 584px;
    opacity: 0;
    @media (max-width: 1301px) {
        top:50px;
        left: 0%;
        width: 55%
    }
    @media (max-width: 999px) {
        top: -60px;
        left: 3%;
        width: 95%;
    }
    @media (max-width: 381px) {
        left: -2%;
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


const EnglishTitlePicture2 = styled.img`
    position: absolute;
    top: 100px;
    right: 41px;
    width: 350px;
    height: auto;
    object-fit: contain; 
    z-index: 0;
    @media (max-width: 1301px) {
        width: 250px;
        top: 220px;
        right: 0;
    }
    @media (max-width: 999px) {
        width: 200px;
        top: 270px;
        right: 12%;
    }
`;

const EventImg = styled.img`
    position: absolute;
    bottom: 20px;
    right: 48px;
    opacity: 0;
    @media (max-width: 1301px) {
        display: none;
    }
`;

const MobileEventImg = styled.img`
    position: absolute;
    top: 340px;
    width: 414px;
    opacity: 0;
    right:0;
     z-index: 1;
    @media (min-width: 1301px) {
        display: none;
    }
    @media (max-width: 999px) {
        top: 370px;
        width: 414px;
    }
`;

const Surprise = styled.img`
    position: absolute;
    bottom: 350px;
    right: 560px;
     z-index: 2;
    @media (max-width: 1301px) {
        top: 310px;
        right: 290px;
        width: 104px;
    }
    @media (max-width: 999px) {
        top: 330px;
        left: 27px;
        bottom: unset;
        right: unset;
        width: 104px;
    }
`;

const ButtonWrapper = styled.div`
    position: absolute;
    bottom: 80px;
    right: 250px;
    z-index: 10;
    width: 289px;
    opacity: 0;
    @media (max-width: 1300px) and (min-width: 1000px) {
        right: 12%;
        bottom: 75px;
        width: 220px;
    }
    @media (max-width: 999px) {
        width: 220px;
        left: 24%;
    }
`;

const NewYearEvent = () => {
    const { fadeInEnlarge , fadeInFromLeft, fadeInFromRight,fadeInAndPulse , fadeInFromBottom, btnFadeInFromBottom } = useAnimations();

	return (
		<Section>
			<Fireworks ref={fadeInEnlarge} id="sec1" src="./home/new-year-event-fire.png" alt="fireworks" />
			<LineOne src="./home/shadow-line1.svg" alt="line one" />
			<LineTwo src="./home/shadow-line2.svg" alt="line two" />

			<Title ref={fadeInFromLeft}>
				<img src="./home/new-year-event-title.svg" alt="title" />
				<img src="./home/common-title-lottery.svg" alt="common title lottery" />
			</Title>
			<Desc ref={fadeInFromLeft}>
				<span>2024/12/15-2025/1/20</span>期間，
				<br />
				成功網路投保<span>「國外旅平險」</span>
			</Desc>

            <EnglishTitlePicture2 ref={fadeInFromRight} src="./home/english-title2.png" alt="english title" />
			<EventImg ref={fadeInFromBottom} src="./home/new-year-event.svg" alt="event" />
			<MobileEventImg ref={fadeInFromBottom} src="./home/new-year-event-mobile.svg" alt="mobile event" />
            <Surprise ref={fadeInAndPulse} src="./home/new-year-event-surprise.png" alt="surprise" />
			<ButtonWrapper ref={btnFadeInFromBottom}>
                <a target="_blank" href="https://e-commerce.transglobe.com.tw/product/eta?utm_source=ec_eventpage&utm_medium=button&utm_campaign=ec_eventpage_transglobe-journey_newyear&utm_term=2024q4&utm_content=eta">
				    <Button color="blue" height="60px" alt="投保立即抽">投保立即抽</Button>
                </a>
			</ButtonWrapper>
			<Flowers src="./home/new-year-event-flower.svg" alt="flower" />
			<MobileFlowers src="./home/new-year-event-flower-mobile.svg" alt="mobile flower" />
		</Section>
	);
};

export default NewYearEvent;
