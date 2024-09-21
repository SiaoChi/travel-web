import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";

const Section = styled.section`
    position: relative;
    height: 660px;
    border: 2px solid gray; 

    
    @media (max-width: 1300px) {
        height: 450px;
    }
    @media (max-width: 999px) {
        height: 900px;
        width: 414px;
        left: 50%;
        transform: translateX(-50%);
    }
`;

const Video = styled.video`
    position: absolute;
    top: 0;
    right: 50px;
    width: 760px;
    z-index: -1;
    clip-path: inset(1px 1px);
    @media (max-width: 1300px) and (min-width: 1000px) {
        width: 450px;
        right: 0;
        top: 50px;
    }
    @media (max-width: 999px) {
        display: none;
    }
`;

const MobileVideo = styled.video`
    display: none;
    z-index: 0;
    @media (max-width: 999px) {
        display: block;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 400px;
    }
`;

const BannerTitle = styled.div`
    position: relative;
    margin: 20px 0px 20px 91px;
    @media (max-width: 1300px) and (min-width: 1000px) {
        margin: 0;
        position: absolute;
        top: 0;
        width: 400px;
        left: 0;
    }
    @media (max-width: 999px) {
        margin: 0;
        position: absolute;
        top: 255px;
        width: 359px;
        left: 50%;
        transform: translateX(-50%);
    }
`;

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const zoomInAnimation = keyframes`
    0% {
        opacity: 0;
        transform: scale(0.8);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
`;

const TitleText = styled.img`
    padding-top: 70px;
    width: 486px;
    animation: ${zoomInAnimation} 1s ease-in-out backwards;
    @media (max-width: 1300px) and (min-width: 1000px) {
        
    }
`;

const TitleAirplaine = styled.img`
    width: 520px;
    position: absolute;
    top: 58px;
    left: -10px;
    animation: ${fadeIn} 1s ease-in-out backwards;
    animation-delay: .5s;
    @media (max-width: 1300px) {
        width: 530px;
        margin: 60px 15px 10px 0px;
        top: 0;
        left: 10px;
    }
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
    z-index: 10;
    > p > span {
        color: ${(props) => (props.$isBlue ? "#2496F0" : "#FF837E")};
    }
    @media (max-width: 1300px) and (min-width: 1000px) {
        margin: 0;
        position: absolute;
        top: 300px;
        width: 50%;
        left: 0;
    }   
    @media (max-width: 999px) {
        margin: 0;
        position: absolute;
        top: 529px;
        width: 354px;
        left: 50%;
        transform: translateX(-50%);
        line-height: 30px;
        letter-spacing: 1px;
        font-size: 20px;
    }
`;

const EnglishTitlePicture1 = styled.img`
    position: relative;
    margin-left: 74px;
    width: 850px;
    height: auto;
    object-fit: contain; 
    @media (max-width: 1300px) and (min-width: 1000px) {
        width: 85%;
        margin-left: 0;
        top: 415px;
    }
    @media (max-width: 999px) {
        display: none;
    }
`;

const EnglishTitlePictureMobile1 = styled.img`
    display: none;
    @media (max-width: 999px) {
     display: block;
        position: absolute;
        top: 679px;
        width: 320px;
        left: 10%;
    }
`;

const MobileLineOne = styled.img`
    display: none;
`;

const MobileLineTwo = styled.img`
    display: none;
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
            <MobileLineOne src="./home/shadow-line1-mobile.svg" />
            <MobileLineTwo src="./home/shadow-line2-mobile.svg" />
            <Video src="./home/event-banner-video-desktop.mp4" autoPlay muted playsInline preload="auto" />
            <MobileVideo src="./home/event-banner-video-mobile.mp4" poster="./home/event-banner-mobile.jpg.jpg" autoPlay muted playsInline preload="auto" />

			<BannerTitle>
				<TitleText src="./home/event-banner-title.png" />
				<TitleAirplaine src="./home/event-banner-airplane.png" />
			</BannerTitle>
			<Desc $isBlue={isBlue}>
				<p>投保全球旅平險</p>
				<p>
					驚喜<span>多多多多多多</span>到滿出來！
				</p>
			</Desc>
            <EnglishTitlePicture1 src="./home/english-title1.png" />
            <EnglishTitlePictureMobile1 src="./home/english-title1-mobile.png" />
		</Section>
	);
};

export default EventBanner;
