import styled from "styled-components";
import { useEffect, useState } from "react";

const Section = styled.section`
    position: relative;
    height: 660px;
    @media (max-width: 1301px) {
        height: 951px;
    }
`;

const YellowPolygon = styled.img`
    position: absolute;
    top: 380px;
    left: 0;
    width: 755px;
    @media (max-width: 1301px) {
        top: 617px;
    }
`;

const BannerTitle = styled.div`
    position: relative;
    margin: 20px 0px 20px 91px;
    @media (max-width: 1301px) {
        margin: 0;
        position: absolute;
        top: 255px;
        width: 359px;
        left: 50%;
        transform: translateX(-50%);
    }
`;

const TitleText = styled.img`
    padding-top: 70px;
    width: 486px;
    animation: fadeIn 1s ease-in-out backwards;
`;

const TitleAirplaine = styled.img`
    width: 520px;
    position: absolute;
    top: 58px;
    left: -10px;
    animation: fadeIn 1s ease-in-out backwards;
    animation-delay: .5s;
`;

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
        color: ${(props) => (props.isBlue ? "#2496F0" : "#FF837E")};
    }
    @media (max-width: 1301px) {
        margin: 0;
        position: absolute;
        top: 529px;
        width: 354px;
        left: 50%;
        transform: translateX(-50%);
        line-height: 30px;
        letter-spacing: 2px;
        font-size: 20px;
    }
`;

const EnglishTitle = styled.p`
    position: relative;
    z-index: 1;
    font-size: 65px;
    line-height: 65px;
    margin-left: 74px;
    font-weight: bold;
    letter-spacing: 2px;
    color: #2496F0;
    text-shadow: 0px 5px 5px lightgrey;
    @media (max-width: 1301px) {
        font-size: 40px;
        line-height: 45px;
        margin: 0;
        position: absolute;
        top: 679px;
        width: 354px;
        left: 50%;
        transform: translateX(-50%);
    }
`;

const BgFlowers = styled.img`
    position: absolute;
    right: 50px;
    width: 795px;
    @media (max-width: 1301px) {
        width: 414px;
        height: 294px;
        left: 50%;
        transform: translateX(-50%);
    }
`;

const LineOne = styled.img`
    position: absolute;
    top: 308px;
    left: 364px;
    width: 343px;
    @media (max-width: 1301px) {
        top: 200px;
        left: -50px;
        width: 182px;
        transform: scaleY(-1);
    }
`;

const LineTwo = styled.img`
    position: absolute;
    top: 300px;
    right: 0;
    width: 383px;
    transform:rotate(-5deg);  
    @media (max-width: 1301px) {
        top: 200px;
        right: -100px;
        width: 204px;
        transform: scaleY(-1) rotate(-10deg);
    }
`;

const EventBanner = () => {
	const [isBlue, setIsBlue] = useState(true);

	useEffect(() => {
		const interval = setInterval(() => {
			setIsBlue(!isBlue);
		}, 1000);

		return () => clearInterval(interval);
	}, [isBlue]);

	return (
		<Section>
			<YellowPolygon src="./home/home-polygon.svg" />
			<BgFlowers src="./home/event-banner-flower.png" />
			<LineOne src="./home/shadow-line1.svg" />
			<LineTwo src="./home/shadow-line2.svg" />

			<BannerTitle>
				<TitleText src="./home/event-banner-title.png" />
				<TitleAirplaine src="./home/event-banner-airplane.png" />
			</BannerTitle>
			<Desc isBlue={isBlue}>
				<p>保全球旅平險</p>
				<p>
					驚喜<span>多多多多多多</span>到滿出來！
				</p>
			</Desc>
			<EnglishTitle>
				TRAVEL
				<br />A TRANSGLOBE JOURNEY
			</EnglishTitle>
		</Section>
	);
};

export default EventBanner;
