import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Accordion from "../../components/Accordion";
import Details from "./Details";
import ActionList, {
	AwardList,
	Invitor,
	Receiver,
	Case,
	LinePoints,
} from "./ActionList";

const Wrap = styled.div`
  padding-top: 73px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  @media (max-width: 500px) {
    padding-top: 65px;
  }
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.bg || "#FFF5CD"};
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1366px;
  position: relative;
  padding: 62px 166px 49px;
  display: flex;
  flex-direction: column;
  align-items: center;
	z-index: 2;
	@media (max-width: 850px) {
		padding: 62px 60px 49px;
	}
	@media (max-width: 480px) {
		padding: 62px 20px 49px;
	}
`;

const Flower = styled.img`
  width: 100%;
  position: absolute;
  pointer-events: none;
`;

const Title = styled.div`
  font-size: 60px;
  font-weight: bold;
  margin-bottom: 63px;
	font-family: "Noto Serif TC";
	@media (max-width: 480px) {
		font-size: 40px;
	}
`;

const Buttons = styled.div`
  width: 613px;
  display: flex;
  gap: 25px;
  margin-bottom: 37px;
	> a {
		width: 100%;
	}
	@media (max-width: 480px) {
		width: 100%;
	}
`;

const Border = styled.div`
  width: 100%;
  height: 1px;
  border: 1px solid #000;
  border-style: ${(props) => (props.dashed ? "dashed" : "solid")};
`;

const TitleText = styled.img`
  width: 419px;
`;

const TitleADecoration = styled.img`
  width: 419px;
  position: absolute;
  top: 4px;
`;

const BannerWrapper = styled.div`
  position: relative;
  margin-top: 20px;
  margin-bottom: 56px;
`;

const Description = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 30px;
	@media (max-width: 480px) {
		flex-direction: column;
		gap: 20px;
	}
`;

const Label = styled.div`
  width: 183px;
  min-width: 183px;
  height: 42px;
  background-color: #2496F0;
  color: #FFFAF1;
  font-weight: bold;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
	font-family: "Noto Sans TC";
	letter-spacing: 2px;
	@media (max-width: 480px) {
		width: 128px;
		min-width: 128px;
	}
`;

const Text = styled.div`
  font-weight: bold;
  font-size: 20px;
	font-family: "Noto Sans TC";
	padding-top: 10px;
`;

const Spacer = styled.div`
  width: 100%;
  height: ${(props) => props.height}px;
`;

const Notice = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 25px 50px;
  background-color: #FED430;
  .title {
    font-size: 20px;
    font-weight: bold;
  }
  .text {
    font-size: 20px;
  }
	@media (max-width: 480px) {
		padding: 36px 34px;
	}
`;

const Br = styled.br`
  display: ${(props) => (props.reverse ? "block" : "none")};
  @media (max-width: 1300px) {
    display: ${(props) => (props.reverse ? "none" : "block")};
  }
`;

function PolicyPage() {
	const [isOpenDetails, setIsOpenDetails] = useState(false);
	const [isOpenDetailsPart2, setIsOpenDetailsPart2] = useState(false);
	return (
		<Wrap>
			<Background>
				<Container>
					<Title>活動辦法</Title>
					<Buttons>
						<Button onClick={() => {
							const targetElement = document.getElementById('sec1');
							const menuHeight = document.querySelector('.menu').offsetHeight;
							const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - menuHeight - 60;
							window.scrollTo({
								top: targetPosition,
								behavior: 'smooth'
							});
						}}>
							旅行全球抽獎趣
						</Button>
						<Button onClick={() => {
							const targetElement = document.getElementById('sec2');
							const menuHeight = document.querySelector('.menu').offsetHeight;
							const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - menuHeight - 60;
							window.scrollTo({
								top: targetPosition,
								behavior: 'smooth'
							});
						}}>
							分享全球樂透抽
						</Button>
					</Buttons>
					<Border />
					<BannerWrapper id="sec1">
						<TitleText src="./home/event-banner-title.png" />
						<TitleADecoration src="./home/event-banner-airplane.png" />
					</BannerWrapper>
					<Description>
						<Label>活動期間</Label>
						<Text>2024/10/1-2025/1/31</Text>
					</Description>
					<Spacer height={32} />
					<Border />
					<Spacer height={32} />
					<Description>
						<Label>活動辦法</Label>
						<Text>
							凡於活動期間內成功網路投保「國內外旅行平安險」，
							<Br reverse />
							並達指定活動條件，即符合該項抽獎資格。
						</Text>
					</Description>
					<Spacer height={83} />
					<ActionList />
					<Spacer height={40} />
					<Border />
					<Spacer height={53} />
					<Description>
						<Label>得獎公告</Label>
						<Text>得獎者將於2025/4/30前於本網站統一公告。</Text>
					</Description>
					<Spacer height={44} />
					<Border />
					<Spacer height={53} />
					<Description>
						<Label>獎項說明</Label>
					</Description>
					<Spacer height={25} />
					<AwardList />
					<Spacer height={40} />
					<Notice>
						<div className="title">活動獎項發放說明</div>
						<div className="text">
							本活動獎項採電子票券形式，將以Edenred之LINE「好禮即享券領券通知」的官方帳號發送通知型訊息予中獎者。若您無法接收到通知型訊息，活動小組將另發送好禮即享券簡訊通知。
						</div>
					</Notice>
					<Spacer height={58} />
					<Accordion
						title="注意事項"
						isOpen={isOpenDetails}
						onClick={() => setIsOpenDetails(!isOpenDetails)}
					>
						<Details />
					</Accordion>
				</Container>
				<Flower src="./policy/flower.svg" alt="" />
			</Background>
			<Background bg="#FED430">
				<Container id="sec2">
					<BannerWrapper id="sec1">
						<TitleText src="./mgm/mgm-title.png" />
						<TitleADecoration src="./mgm/mgm-title-p.png" />
					</BannerWrapper>
					<Description>
						<Label>活動期間</Label>
						<Text>2024/10/1-2025/1/31</Text>
					</Description>
					<Spacer height={32} />
					<Border />
					<Spacer height={32} />
					<Description>
						<Label>活動辦法</Label>
						<Text>
							活動期間邀請親友成功投保國內外旅平險達指定筆數，
							<Br reverse />
							即符合LINE POINTS抽獎資格。
						</Text>
					</Description>
					<Spacer height={42} />
					<Invitor />
					<Spacer height={42} />
					<Receiver />
					<Spacer height={42} />
					<Case />
					<Spacer height={45} />
					<Border />
					<Spacer height={54} />
					<Description>
						<Label>得獎公告</Label>
						<Text>得獎者將於2025/4/30前於本網站統一公告。</Text>
					</Description>
					<Spacer height={44} />
					<Border />
					<Spacer height={53} />
					<Description>
						<Label>獎項說明</Label>
					</Description>
					<Spacer height={42} />
					<LinePoints />
					<Spacer height={42} />
					<Accordion
						title="注意事項"
						isOpen={isOpenDetailsPart2}
						onClick={() => {
							setIsOpenDetailsPart2(!isOpenDetailsPart2);
						}}
					>
						<Details isPart2 />
					</Accordion>
					<Spacer height={50} />
					<Border />
					<Spacer height={35} />
					<Buttons>
						<Link to="/">
							<Button color="blue">旅行全球抽獎趣</Button>
						</Link>
						<Link to="/mgm">
							<Button color="blue">分享全球樂透抽</Button>
						</Link>
					</Buttons>
				</Container>
			</Background>
		</Wrap>
	);
}

export default PolicyPage;
