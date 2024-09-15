import styled from "styled-components";
import { useEffect, useState } from "react";
import { HashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom";
import { gsap, useGSAP } from "../../gsap";
import Button from "../../components/Button/Button";

const Wrap = styled.div`
  padding-top: 90px;
  background-color: #FFFAF1;
  display: flex;
  justify-content: center;
  overflow: hidden;
  @media (max-width: 1300px) {
    padding-top: 65px;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1500px;
  position: relative;
  height: 2780px;
  @media (max-width: 1300px) {
    width: 414px;
    height: 2500px;
  }
`;

const YellowBackground = styled.div`
  position: absolute;
  top: 427px;
  left: 0;
  width: 100%;
  height: 1081px;
  background: url('./mgm/mgm-trapezoid.svg') no-repeat center center;
  @media (max-width: 1300px) {
    top: 525px;
    height: 850px;
    width: 414px;
    background-size: cover;
  }
`;

const BannerFlower = styled.img`
  position: absolute;
  top: 0;
  right: 20px;
  width: 900px;
  @media (max-width: 1300px) {
    display: none;
  }
`;

const ContentFlower = styled.img`
  position: absolute;
  top: 700px;
  left: 60px;
  width: 1300px;
`;

const ContentPoint = styled.img`
  position: absolute;
  top: 660px;
  left: 78px;
  width: 1360px;
`;

const BackgroundBuilding = styled.div`
  position: absolute;
  bottom: 375px;
  left: 100px;
  width: 1312px;
  height: 353px;
  background: url('./mgm/mgm-building.svg') no-repeat center center;
  @media (max-width: 1300px) {
    width: 414px;
    height: 218px;
    background: url('./mgm/mgm-building-mobile.svg') no-repeat center center;
    left: 0;
    bottom: -20px;
  }
`;

const BlueBackground = styled.div`
  position: absolute;
  bottom: -32px;
  width: 100%;
  height: 278px;
  background: url('./mgm/mgm-blue-building.svg') no-repeat center center;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1300px) {
    height: 408px;
    background: #2496F0;
    align-items: flex-start;
    padding-top: 40px;
  }
`;

const Buttons = styled.div`
    display: flex;
    align-items: center;
    width: 1039px;
    gap: 73px;
    @media (max-width: 1300px) {
        flex-direction: column;
        gap: 29px;
        width: 294px;
    }
`;

const Video = styled.video`
  position: absolute;
  top: 0;
  right: 50px;
  @media (max-width: 1300px) {
    align-self: center;
    position: static;
  }
`;

const BannerTitle = styled.img`
    position: absolute;
    top: 50px;
    left: 100px;
    width: 500px;
    animation: fadeIn 1s ease-in-out backwards;
    @media (max-width: 1300px) {
        width: 100%;
        top: 330px;
        left: 15px;
    }
`;

const BannerTitlePoint = styled.img`
    position: absolute;
    top: 50px;
    left: 100px;
    width: 500px;
    animation: fadeIn 1s ease-in-out backwards;
    animation-delay: .5s;
    @media (max-width: 1300px) {
        width: 100%;
        top: 330px;
        left: 15px;
    }
`;

const Desc = styled.div`
    position: absolute;
    top: 320px;
    left: 120px;
    width: 456px;
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 35px;
    letter-spacing: 4px;
    font-size: 25px;
    font-weight: bold;
    > p > span {
        color:  ${(props) => (props.isBlue ? "#2496F0" : "#FF837E")};
    }
    @media (max-width: 1300px) {
        top: 550px;
        left: 0px;
        font-size: 20px;
        line-height: 20px;
        width: 100%;
    }
`;

const EnglishTitle = styled.p`
    position: absolute;
    top: 471px;
    left: 74px;
    font-size: 65px;
    line-height: 65px;
    font-weight: bold;
    letter-spacing: 2px;
    color: #2496F0;
    @media (max-width: 1300px) {
      font-size: 40px;
      line-height: 40px;
      top: 660px;
      left: 20px;
    }
`;

const Br = styled.br`
  display: ${(props) => (props.reverse ? "block" : "none")};
  @media (max-width: 1300px) {
    display: ${(props) => (props.reverse ? "none" : "block")};
  }
`;

const ContentDesc = styled(Desc)`
    font-size: 20px;
    top: 730px;
    left: 50%;
    transform: translateX(-50%);
    @media (max-width: 1300px) {
      top: 800px;
      font-size: 16px;
      height: fit-content;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 10px;
    }
`;

const LinePointsText = styled.img`
    position: absolute;
    top: 790px;
    left: 50%;
    transform: translateX(-50%);
    width: 387px;
    @media (max-width: 1300px) {
      top: 850px;
    }
`;

const MgmContentOne = styled.div`
    position: absolute;
    top: 900px;
    left: 50%;
    transform: translateX(-50%);
    width: 974px;
    height: 263px;
    background: url('./mgm/mgm-content1.svg') no-repeat center center;
    background-size: cover;
    @media (max-width: 1300px) {
      top: 950px;
      width: 404px;
      height: 207px;
      background: url('./mgm/mgm-content1-mobile.svg') no-repeat center center;
    }
`;

const MgmContentTwo = styled.div`
    position: absolute;
    top: 1163px;
    left: 50%;
    transform: translateX(-48%);
    width: 1012px;
    height: 308px;
    background: url('./mgm/mgm-content2.svg') no-repeat center center;
    background-size: cover;
    @media (max-width: 1300px) {
      top: 1136px;
      width: 409px;
      height: 187px;
      background: url('./mgm/mgm-content2-mobile.svg') no-repeat center center;
    }
`;

const MgmContentThree = styled.div`
    position: absolute;
    top: 1463px;
    left: 50%;
    transform: translateX(-52%);
    width: 929px;
    height: 299px;
    background: url('./mgm/mgm-content3.svg') no-repeat center center;
    background-size: cover;
    @media (max-width: 1300px) {
      top: 1300px;
      width: 414px;
      height: 189px;
      background: url('./mgm/mgm-content3-mobile.svg') no-repeat center center;
    }
`;

const People = styled.div`
    position: absolute;
    top: 1800px;
    left: 50%;
    transform: translateX(-50%);
    width: 821px;
    height: 683px;
    background: url('./mgm/mgm-people-and-frame.svg') no-repeat center center;
    background-size: cover;
    pointer-events: none;
    @media (max-width: 1300px) {
        top: 1500px;
        width: 359px;
        height: 597px;
        background: url('./mgm/mgm-people-and-frame-mobile.svg') no-repeat center center;
    }
`;

const ButtonContainer = styled.div`
    position: absolute;
    top: 78%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    width: 294px;
    @media (max-width: 1300px) {
        width: 229px;
        top: 70%;
    }
`;

const ActionDesc = styled(Desc)`
    font-size: 20px;
    top: 2110px;
    left: 50%;
    transform: translateX(-50%);
    letter-spacing: 1px;
`;

const ActionLinePoints = styled.img`
    position: absolute;
    top: 2160px;
    left: 50%;
    transform: translateX(-50%);
    width: 717px;
`;

const BottomDesc = styled(Desc)`
    font-size: 16px;
    font-weight: 400;
    top: 2380px;
    left: 50%;
    transform: translateX(-50%);
    line-height: 25px;
    letter-spacing: 1px;
`;

const DesktopPart = styled.div`
  @media (max-width: 1300px) {
      display: none;
  }
`;

const MgmPage = () => {
	const [isBlue, setIsBlue] = useState(true);

	useGSAP(() => {
		gsap.utils.toArray(".mgm-content").forEach((content) => {
			gsap.from(content, {
				y: 100,
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
	});

	useEffect(() => {
		const interval = setInterval(() => {
			setIsBlue(!isBlue);
		}, 1000);

		return () => clearInterval(interval);
	}, [isBlue]);

	return (
		<Wrap>
			<Container>
				<DesktopPart>
					<BannerFlower src="./mgm/mgm-banner-flower.svg" />
					<ContentFlower src="./mgm/mgm-info-flower.svg" />
					<ContentPoint src="./mgm/mgm-content-p-point.svg" />
				</DesktopPart>
				<Video src="./mgm/mgm-banner-video-mobile.mp4" autoPlay muted playsInline />
				<BannerTitle src="./mgm/mgm-title.png" />
				<BannerTitlePoint src="./mgm/mgm-title-p.png" />
			    <YellowBackground />
				<Desc isBlue={isBlue}>
					<p>推薦好友全球旅平險</p>
					<p>
						快樂<span>+1+1+1+1+1+1+1+1+1</span>
					</p>
				</Desc>
				<EnglishTitle>
					COLLECT
					<Br reverse /> A LOT OF LINE POINTS
				</EnglishTitle>

				<ContentDesc>
					<p>2024/10/1~2025/1/31</p>
					<p>成功邀請親友投保旅平險，達指定筆數</p>
				</ContentDesc>
				<LinePointsText src="./mgm/mgm-line-points-text.svg" />

				<MgmContentOne className="mgm-content" />
				<MgmContentTwo className="mgm-content" />
				<MgmContentThree className="mgm-content" />

				<People className="mgm-content">
                    <ButtonContainer>
                        <Button color="red">
                            <a href="https://e-commerce.transglobe.com.tw/member/missionActivities/etamgm?utm_source=ec_eventpage&utm_medium=button&utm_campaign=ec_eventpage_transglobe-journey_etamgm&utm_term=2024q4&utm_content=missionActivities">立即推薦親友</a>
                        </Button>
                    </ButtonContainer>
                </People>
                <DesktopPart>
                    <ActionDesc>
                        <p>只要親友點選「你的推薦連結」成功投保</p>
                    </ActionDesc>
                    <ActionLinePoints src="./mgm/mgm-bottom-info-title.svg" />
                    <BottomDesc>
                        <p>點擊上方按鈕後，註冊或登入取得邀請碼</p>
                        <p>就能分享給親友，一起抽點數！</p>
                    </BottomDesc>
                </DesktopPart>
				<BlueBackground>
				    <BackgroundBuilding />
                    <Buttons>
                        <Button color="yellow">
                            <a href="https://e-commerce.transglobe.com.tw/member/missionActivities?utm_source=ec_eventpage&utm_medium=button&utm_campaign=ec_eventpage_transglobe-journey_mgmsearch&utm_term=2024q4&utm_content=missionActivities">
                                推薦好友<Br reverse />
                                成功筆數查詢
                            </a>
                        </Button>
                        <Button color="yellow">
                            <HashLink to="/#sec2">參加更多抽獎</HashLink>
                        </Button>
                        <Button color="white" hoverBgColor="#FF837E">
                            <Link to="/policy">活動辦法</Link>
                        </Button>
                    </Buttons>
                </BlueBackground>
			</Container>
		</Wrap>
	);
};

export default MgmPage;
