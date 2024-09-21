import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";
import { useAnimations } from "../../Animation/useAnimations";

const Section = styled.section`
    position: relative;
    height: 660px;

    @media (max-width: 1300px) {
        height: 440px;
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
        width: 500px;
        right: -8%;
        top: 50px;
    }
    @media (max-width: 999px) {
        display: none;
    }
`;

const MobileSubVideoWrapper = styled.div`
  display: none;
  position: absolute;
  top: 20px;
  width: 422px;
  aspect-ratio: 422 / 327;
  z-index: 0;
  @media (max-width: 999px) {
    display: flex;
    position: relative;
    width: 95%;
  }
`;

const MobileKvCase = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 0;
  opacity: 0;
  @media (max-width: 999px) {
    display: block;
  }
`;

const MobileKvFlower = styled.img`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
 width: 100%;
  z-index: -1;
  opacity: 0;
  @media (max-width: 999px) {
    display: block;
  }
`;

const MobileKvFlight = styled.img`
  position: absolute;
  top: 0;
  left: 0;
width: 100%;
  object-fit: contain;
  background-size: contain;
  z-index: 0;
  opacity: 0;
  @media (max-width: 999px) {
    display: block;
  }
`;



const MobileVideo = styled.video`
    display: none;
    z-index: 0;
    @media (max-width: 999px) {
        display:none;
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
        width: 370px;
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
        top: 280px;
        width: 50%;
        left: 0;
        font-size: 22px;
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
        top: 430px;
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
        width: 300px;
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
    const {fadeInFromBottom, fadeInEnlarge,fadeInFromLeft, fadeInFromRight} = useAnimations();
	const [isBlue, setIsBlue] = useState(true);

	useEffect(() => {
		const interval = setInterval(() => {
			setIsBlue(!isBlue);
		}, 1000);

		return () => clearInterval(interval);
	}, [isBlue]);

	return (
		<Section>
            <Video src="./home/event-banner-video-desktop.mp4" autoPlay muted playsInline preload="auto" />
            <MobileSubVideoWrapper>
                <MobileKvCase ref={fadeInFromBottom} src="./home/mb-kv-case.png" />
                <MobileKvFlower ref={fadeInEnlarge} src="./home/mb-kv-flower.png" />
                <MobileKvFlight ref={fadeInFromRight} src="./home/mb-kv-flight.png" />
            </MobileSubVideoWrapper>
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
            <EnglishTitlePicture1 ref={fadeInFromLeft} src="./home/english-title1.png" alt="english title" />
            <EnglishTitlePictureMobile1 ref={fadeInFromLeft} src="./home/english-title1-mobile.png" alt="mobile english title" />
		</Section>
	);
};

export default EventBanner;
