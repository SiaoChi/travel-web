import { useState } from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import Accordion from "../../components/Accordion";
import Details from "./Details";

const Wrap = styled.div`
  padding-top: 121px;
  background-color: #FFF5CD;
  display: flex;
  justify-content: center;
  position: relative;
`;

const Container = styled.div`
  width: 1366px;
  position: relative;
  overflow: hidden;
  padding: 62px 166px 49px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
`;

const Buttons = styled.div`
  width: 613px;
  display: flex;
  gap: 25px;
  margin-bottom: 37px;
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

const TitleAirplaine = styled.img`
  width: 419px;
  position: absolute;
  top: 4px;
  left: -10px;
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
`;

const Label = styled.div`
  width: 183px;
  height: 42px;
  background-color: #2496F0;
  color: #FFFAF1;
  font-weight: bold;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  font-weight: bold;
  font-size: 18px;
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
`;

function PolicyPage() {
	const [isOpenDetails, setIsOpenDetails] = useState(false);
	return (
		<Wrap>
			<Container>
				<Flower src="./policy/flower.svg" alt="" />
				<Title>活動辦法</Title>
				<Buttons>
					<Button>旅行全球抽獎趣</Button>
					<Button>分享全球樂透抽</Button>
				</Buttons>
				<Border />
				<BannerWrapper>
					<TitleText src="./home/event-banner-title.png" />
					<TitleAirplaine src="./home/event-banner-airplane.png" />
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
						<br />
						並達指定活動條件，即符合該項抽獎資格。
					</Text>
				</Description>
				<Spacer height={83} />
				<img alt="rule 1" src="./policy/rule1.png" />
				<Spacer height={40} />
				<img alt="rule 1" src="./policy/rule2.png" />
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
				<img alt="rule 1" src="./policy/award.svg" style={{ width: "100%" }} />
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
		</Wrap>
	);
}

export default PolicyPage;
