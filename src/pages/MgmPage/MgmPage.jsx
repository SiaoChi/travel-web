import styled from "styled-components";
import { useEffect, useState } from "react";
import { HashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom";
import { gsap, useGSAP } from "../../gsap";
import Button from "../../components/Button/Button";
import { useAnimations } from "../../components/Animation/useAnimations";

const Wrap = styled.div`
  padding-top: 90px;
  background-color: #FFFAF1;
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative; 
  z-index: 0;

  @media (max-width: 1300px) {
    padding-top: 65px;
  }
`;

// 藍色底
const BottomBlueBg = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 211px;
  background-color: #2496F0;
  z-index: 1;


  @media (max-width: 999px) {
     width: 100%;
     height: 400px;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1500px;
  position: relative;
  height: 2780px;

  @media (max-width: 1300px) and (min-width: 1000px) {
    width: 800px;
    height: 2180px;
  }

  @media (max-width: 999px) {
    width: 415px;
    height: 2500px;
  }
`;

const YellowBackground = styled.div`
  position: absolute;
  top: 427px;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  aspect-ratio: 1640 / 1260;
  background: url('./mgm/mgm-trapezoid.png') no-repeat center center;
  background-size: cover;
  z-index: 1;

  @media (max-width: 1300px) and (min-width: 1000px) {
    // 如果需要，在這裡添加 1000px - 1300px 範圍的樣式
  }

  @media (max-width: 999px) {
    top: 530px;
    aspect-ratio: 410 / 700;
  }
`;

const ContentFlower = styled.img`
  position: absolute;
  top: 700px;
  left: 60px;
  width: 1300px;
  z-index: 1;

  @media (max-width: 1300px) and (min-width: 1000px) {
    // 如果需要，在這裡添加 1000px - 1300px 範圍的樣式
  }

  @media (max-width: 999px) {
    display: none;
  }
`;

const MobileContentFlower = styled.img`
  position: absolute;
  top: 585px;
  left: 25px;
  width: 373px;
    z-index: 1;

  @media (max-width: 1300px) and (min-width: 1000px) {
    // 如果需要，在這裡添加 1000px - 1300px 範圍的樣式
  }

  @media (min-width: 999px) {
    display: none;
  }
`;

const ContentPoint = styled.img`
  position: absolute;
  top: 660px;
  left: 78px;
  width: 1360px;
  z-index: 1;

  @media (max-width: 1300px) and (min-width: 1000px) {
    // 如果需要，在這裡添加 1000px - 1300px 範圍的樣式
  }

  @media (max-width: 999px) {
    display: none;
  }
`;

// 不要動他是people的背景building
const BackgroundBuilding = styled.div`
  position: absolute;
  bottom: 375px;
  left: 50%;
  transform: translateX(-50%);
  width: 1312px;
  height: 353px;
  background: url('./mgm/mgm-building.svg') no-repeat center center;
  z-index: 1;

  @media (max-width: 1300px) and (min-width: 1000px) {
   bottom: 400px;
  }


  @media (max-width: 999px) {
    width: 414px;
    height: 218px;
    bottom: -20px;
    background-size: cover;

  }
`;

// 藍色底建築物
const DeskBlueBackgroundBuilding = styled.div`
  position: absolute;
  bottom: -20px;
  transform: translateX(-50%);
  left: 50%;
  width: 100%;
  height: 278px;
  background: url('./mgm/mgm-blue-building.svg') no-repeat center center;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;

  @media (max-width: 999px) {
    bottom: 0;
    height: 400px;
    width: 100vw;
    padding-top: 40px;
    align-items: start;
    background:none;
    left: 53%;
  }

  @media (max-width: 800px) {
    bottom: 0;
    height: 400px;
    width: 100vw;
    background:none;
    left: 51%;
  }
`;

const Buttons = styled.div`
    display: flex;
    align-items: center;
    width: 1039px;
    gap: 73px;
    > a {
      width: 100%;
    }

    @media (max-width: 1300px) and (min-width: 1000px) {
      // 如果需要，在這裡添加 1000px - 1300px 範圍的樣式
    }

    @media (max-width: 999px) {
        flex-direction: column;
        gap: 29px;
        width: 294px;
        z-index: 10;
    }
`;

const Video = styled.video`
  position: absolute;
  top: 0;
  right: 150px;
  width: 610px;
  z-index: 0;
  clip-path: inset(1px 1px);

  @media (max-width: 1300px) and (min-width: 1000px) {
  top:40px;  
  right: 0;
    width: 400px;
  }

  @media (max-width: 999px) {
    align-self: center;
    position: static;
    display: none;
  }
`;

const BannerTitle = styled.img`
    position: absolute;
    top: 50px;
    left: 100px;
    width: 500px;
    z-index: 1; 
    animation: fadeIn 1s ease-in-out backwards;

    @media (max-width: 1300px) and (min-width: 1000px) {
      left: 0;
      top: 60px;
      width: 50%;
    }

    @media (max-width: 999px) {
        width: 354px;
        top: 340px;
        left: 7%;
    }
`;

const BannerTitlePoint = styled.img`
    position: absolute;
    top: 50px;
    left: 100px;
    width: 500px;
    animation: fadeIn 1s ease-in-out backwards;
    animation-delay: .5s;
    z-index: 1;

    @media (max-width: 1300px) and (min-width: 1000px) {
      left: 0;
      top: 60px;
      width: 50%;
    }

    @media (max-width: 999px) {
        width: 354px;
        top: 340px;
        left: 7%;
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
    z-index: 1;
    > p > span {
        color:  ${(props) => (props.isBlue ? "#2496F0" : "#FF837E")};
    }

    @media (max-width: 1300px) and (min-width: 1000px) {
      left: 0;
      top: 300px;
      width: 50%;
    }

    @media (max-width: 999px) {
        top: 530px;
        left: 0px;
        font-size: 20px;
        line-height: 30px;
        letter-spacing: 2px;
        width: 100%;
    }
`;

const EnglishTitlePicture = styled.img`
  position: absolute;
  top: 475px;
  left: 112px;
  z-index: 2;
  width: 754px;
  height: auto;
  object-fit: contain; 

  @media (max-width: 1300px) and (min-width: 1000px) {
    top: 455px;
    width: 80%;
    left: 0;
  }

  @media (max-width: 999px) {
    display: none;
  }
`;

const EnglishTitlePictureMobile = styled.img`
  display: none;
  position: absolute;
  top: 475px;
  left: 112px;
  z-index: 2;
  top: 668px;
  left: 20px;
  width: 337px;
  object-fit: contain; 

  @media (max-width: 999px) {
    display: block;
  }
`;

const Br = styled.br`
  display: ${(props) => (props.reverse ? "block" : "none")};

  @media (max-width: 1300px) and (min-width: 1000px) {
    // 如果需要，在這裡添加 1000px - 1300px 範圍的樣式
  }

  @media (max-width: 999px) {
    display: ${(props) => (props.reverse ? "none" : "block")};
  }
`;

const ContentDesc = styled(Desc)`
    font-size: 20px;
    top: 730px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;

    @media (max-width: 1300px) and (min-width: 1000px) {
      top: 600px;
      width: 90%;
    }

    @media (max-width: 999px) {
      top: 780px;
      font-size: 20px;
      height: fit-content;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 280px;
      text-align: center;
    }
`;

const LinePointsText = styled.img`
    position: absolute;
    top: 790px;
    left: 50%;
    transform: translateX(-50%);
    width: 387px;
    z-index: 1;

    @media (max-width: 1300px) and (min-width: 1000px) {
      top: 670px;
    }

    @media (max-width: 999px) {
      top: 850px;
      width: 340px;
    }
`;

const MgmContentWrapper = styled.div`
  position: absolute;
  top: 900px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  width: 974px;
  height: 900px;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 2px;
  max-width: 1008px;
  border: 2px solid black;


  @media (max-width: 1300px) and (min-width: 1000px) {
    width: 600px;
    height: 500px;
    top:750px
  }

  @media (max-width: 999px) {
    top:950px;
    width: 409px;
    height: 530px;
  }
`;

const MgmContentOne = styled.div`
    z-index: 1;
    width: 1008px;
    height: 307px;
    background: url('./mgm/mgm-content1.png') no-repeat center center;
    background-size: cover;
     border: 2px solid black;

    @media (max-width: 1300px) and (min-width: 1000px) {
      background-size: contain;
      width: 80%;
    }

    @media (max-width: 999px) {
      width: 409px;
      background: url('./mgm/mgm-content1-mobile.png') no-repeat center center;
      background-size: contain;
    }    
`;

const MgmContentTwo = styled.div`
    width: 1008px;
    height: 307px;
    z-index: 1;
    background: url('./mgm/mgm-content2.png') no-repeat center center;
    background-size: cover;
    margin-top: -50px;

    @media (max-width: 1300px) and (min-width: 1000px) {
      background-size: contain;
      width: 80%;
    }

    @media (max-width: 999px) {
      background: url('./mgm/mgm-content2-mobile.png') no-repeat center center;
      width: 409px;
      background-size: contain;
    }  
`;

const MgmContentThree = styled.div`
    width: 1008px;
    height: 307px;
    z-index: 1;
    background: url('./mgm/mgm-content3.png') no-repeat center center;
    background-size: cover;
     margin-top:-30px;

    @media (max-width: 1300px) and (min-width: 1000px) {
      background-size: contain;
      width: 80%;
    }

    @media (max-width: 999px) {
      width: 409px;
      margin-top:-35px;
      background: url('./mgm/mgm-content3-mobile.png') no-repeat center center;
      background-size: contain;
    }  
`;

const People = styled.div`
    width: 821px;
    height: 683px;
    background: url('./mgm/mgm-people-and-frame.png') no-repeat center center;
    background-size: contain; 
    object-fit: contain;  
    pointer-events: none;
    z-index: 1;

    @media (max-width: 1300px) and (min-width: 1000px) {
      // 如果需要，在這裡添加 1000px - 1300px 範圍的樣式
    }

    @media (max-width: 999px) {
        width: 409px;
        height: 601px;
        background: url('./mgm/mgm-people-and-frame-mobile.png') no-repeat center center;
        background-size: contain; 
    }
`;


const PeopleWrapper = styled.div`
    position: absolute;
    top: 1800px;
    left: 50%;
    transform: translateX(-50%);
    pointer-events: none;
    z-index: 1;
    width: 100%;
    display: flex;
    justify-content: center;

    @media (max-width: 1300px) and (min-width: 1000px) {
      top: 1250px;
    }

    @media (max-width: 999px) {
        top: 1490px;
        width: 409px; 
        height: 601px;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 294px;
    z-index:1;
    > a {
      width: 100%;
    }

    @media (max-width: 1300px) and (min-width: 1000px) {
      // 如果需要，在這裡添加 1000px - 1300px 範圍的樣式
    }

    @media (max-width: 999px) {
        width: 229px;
    }

    @media (max-width: 800px) {
        width: 229px;
    }
     @media (max-width: 400px) {
        width: 229px;
    }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 2290px;
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 1300px) and (min-width: 1000px) {
     top: 1730px;
  }

  @media (max-width: 999px) {
      top: 1880px;
  }
`;

const ActionDesc = styled(Desc)`
    font-size: 20px;
    top: 2110px;
    left: 50%;
    transform: translateX(-50%);
    letter-spacing: 1px;
    z-index:1;

    @media (max-width: 1300px) and (min-width: 1000px) {
      top: 1560px;
    }

    @media (max-width: 999px) {
      display: none;
    }
`;

const ActionLinePoints = styled.img`
    position: absolute;
    top: 2160px;
    left: 50%;
    transform: translateX(-50%);
    width: 717px;
    z-index:1;

    @media (max-width: 1300px) and (min-width: 1000px) {
      // 如果需要，在這裡添加 1000px - 1300px 範圍的樣式
    }

    @media (max-width: 999px) {
      display: none;
    }
`;

const BottomDesc = styled(Desc)`
    font-size: 16px;
    font-weight: 400;
    top: 2380px;
    left: 50%;
    transform: translateX(-50%);
    line-height: 25px;
    letter-spacing: 1px;

    @media (max-width: 1300px) and (min-width: 1000px) {
      // 如果需要，在這裡添加 1000px - 1300px 範圍的樣式
    }

    @media (max-width: 999px) {
      display: none;
    }
`;

const DesktopPart = styled.div`
  @media (max-width: 1300px) and (min-width: 1000px) {
    // 如果需要，在這裡添加 1000px - 1300px 範圍的樣式
  }

  @media (max-width: 999px) {
      display: none;
  }
`;

// 透明底黑線建築物
const Building = styled.img`
  display: none;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 50%;
  object-fit: cover;
  z-index: 0;
  object-fit: contain;
  object-position: bottom;
  left: 30%;

  @media (max-width: 1000px) {
    display: hidden;
    width: 100%;
    left: 0;
  }
`;

const IpadBuilding = styled.img`
  display: none;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 50%;
  object-fit: cover;
  z-index: -1;
  object-fit: contain;
  object-position: bottom;
  left: 30%;

  @media (min-width: 501px) and (max-width: 1300px) {
    display: block;  
    width: 100%;
    left: 0;
    height: 100%;
  }
`;

const MgmPage = () => {
  const {fadeInFromBottom}= useAnimations();
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
       <YellowBackground />
			<Container>
				<Video src="./mgm/mgm-banner-video-mobile.mp4" autoPlay muted playsInline />
				<BannerTitle src="./mgm/mgm-title.png" />
				<BannerTitlePoint src="./mgm/mgm-title-p.png" />
				<Desc isBlue={isBlue}>
					<p>推薦好友全球旅平險</p>
					<p>
						快樂<span>+1+1+1+1+1+1+1+1+1</span>
					</p>
				</Desc>
        <EnglishTitlePicture src="./mgm/english-title.png" alt="English Title" />
        <EnglishTitlePictureMobile src="./mgm/english-title-mobile.png" alt="English Title" />
        <MobileContentFlower src="./mgm/mgm-points-and-flower-mobile.svg" />
				<ContentDesc>
					<p>2024/10/1~2025/1/31</p>
					<p>成功邀請親友投保旅平險，達指定筆數</p>
				</ContentDesc>
				<LinePointsText src="./mgm/mgm-line-points-text.svg" />
        <MgmContentWrapper>
          <MgmContentOne className="mgm-content" />
          <MgmContentTwo className="mgm-content" />
          <MgmContentThree className="mgm-content" />
        </MgmContentWrapper>
        <DesktopPart>
					{/* <BannerFlower src="./mgm/mgm-banner-flower.svg" /> */}
					<ContentFlower src="./mgm/mgm-info-flower.svg" />
					<ContentPoint src="./mgm/mgm-content-p-point.svg" />
				</DesktopPart>

        <BackgroundBuilding />

        <PeopleWrapper>
          <People className="mgm-content" />
        </PeopleWrapper>

        <ButtonWrapper>
          <ButtonContainer ref={fadeInFromBottom}>
              <a target="_blank" href="https://e-commerce.transglobe.com.tw/member/missionActivities/etamgm?utm_source=ec_eventpage&utm_medium=button&utm_campaign=ec_eventpage_transglobe-journey_etamgm&utm_term=2024q4&utm_content=missionActivities">
              <Button  color="red">立即推薦親友</Button>
            </a>
          </ButtonContainer>
        </ButtonWrapper>

        {/* <DesktopPart>
            <ActionDesc>
                <p>只要親友點選「你的推薦連結」成功投保</p>
            </ActionDesc>
            <ActionLinePoints src="./mgm/mgm-bottom-info-title.svg" />
            <BottomDesc>
                <p>點擊上方按鈕後，註冊或登入取得邀請碼</p>
                <p>就能分享給親友，一起抽點數！</p>
            </BottomDesc>
        </DesktopPart> */}

				<DeskBlueBackgroundBuilding>
          <Buttons>
              <a target="_blank" href="https://e-commerce.transglobe.com.tw/member/missionActivities?utm_source=ec_eventpage&utm_medium=button&utm_campaign=ec_eventpage_transglobe-journey_mgmsearch&utm_term=2024q4&utm_content=missionActivities">
                  <Button color="yellow" height="82px">
                  推薦好友 <Br reverse />
                  成功筆數查詢
                  </Button>
              </a>
              {/* 此圖會跳頁會被NAVBAR蓋掉，所以先暴力解 */}
              <HashLink 
                to="/#sec2" 
                scroll={(el) => {
                  const yOffset = -80;
                  const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
                  window.scrollTo({top: y, behavior: 'smooth'});
                }}
              >
                <Button color="yellow"  height="82px">參加更多抽獎</Button>
              </HashLink>
              <Link to="/policy">
                <Button color="white" hoverBgColor="#FF837E"  height="82px">活動辦法</Button>
              </Link>
          </Buttons>
          <Building src="./mgm/mgm-building-mb.svg" />
          <IpadBuilding src="./mgm/mgm-building-ipad.svg" />
        </DeskBlueBackgroundBuilding>
			</Container>
      <BottomBlueBg />
		</Wrap>
	);
};

export default MgmPage;