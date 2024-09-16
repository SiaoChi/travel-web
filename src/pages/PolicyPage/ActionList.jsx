import styled from "styled-components";

const List = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 24px;
  counter-reset: item;
`;

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2496F0;
  border-radius: 100%;
  width: 15px;
  height: 15px;
  flex-shrink: 0;
`;
const Item = styled.li`
  counter-increment: item;
  display: flex;
  align-items: baseline;
  line-height: 1.5;
  &::before {
    content: counter(item);
		min-width: 30px;
    font-size: 65px;
    font-weight: bold;
    margin-right: 30px;
    line-height: 65px;
    color: #2496F0;
  }
	@media (max-width: 480px) {
		&::before {
			font-size: 50px;
			margin-right: 20px;
			line-height: 40px;
		}
	}
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
	@media (max-width: 480px) {
		gap: 20px;
	}
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  line-height: 40px;
	font-family: "Noto Serif TC";
`;

const Note = styled.div`
  font-size: 20px;
  font-weight: 300;
  line-height: ${({ lineHeight }) => lineHeight}px;
  color: ${({ highlight }) => (highlight ? "#2496F0" : "#000000")};
  white-space: pre-wrap;
  font-family: Noto TC;
	@media (max-width: 480px) {
		margin-left: ${({ marginLeft }) => marginLeft};
	}
`;

const Flex = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 22px;
	@media (max-width: 480px) {
		flex-direction: column;
		align-items: flex-start;
		gap: 10px;
	}
`;

const SmallItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2496F0;
  color: #FFFFFF;
  border-radius: 100%;
  width: 30px;
  height: 30px;
  font-size: 20px;
  font-weight: bold;
  flex-shrink: 0;
	@media (max-width: 480px) {
		margin-left: ${({ marginLeft }) => marginLeft};
	}
`;

const SubTitle = styled.div`
  font-size: 25px;
  line-height: 25px;
  color: #000000;
  font-weight: bold;
`;

function ActionList() {
	return (
		<List>
			<Item>
				<ItemWrapper>
					<Flex>
						<Title>跨年出國抽獎趣</Title>
						<Note lineHeight={20}>(僅限國外旅平險)</Note>
					</Flex>
					<Note lineHeight={30}>
						於2024/12/15-2025/1/20期間成功投保「國外旅平險」，不限單筆保費金額，可額外享「8,800元旅遊大紅包」加碼抽獎機會乙次（價值8,800元好禮即享券，共抽5名，每人限獲獎乙次）。
					</Note>
				</ItemWrapper>
			</Item>
			<Item>
				<ItemWrapper>
					<Flex>
						<Title>投保滿額抽獎趣</Title>
					</Flex>
					<div
						style={{ display: "flex", alignItems: "flex-start", gap: "22px" }}
					>
						<SmallItem marginLeft="-50px">1</SmallItem>
						<Note lineHeight={30}>
							單筆保費滿200元，該筆保單即享「500元好禮即享券」抽獎機會乙次
							<br />
							（共抽100名，每人獲獎次數不限）。
						</Note>
					</div>
					<div
						style={{ display: "flex", alignItems: "flex-start", gap: "22px" }}
					>
						<SmallItem marginLeft="-50px">2</SmallItem>
						<div>
							<Note lineHeight={30}>
								單筆保費滿500元，該筆保單即享「星宇航空東京來回機票」抽獎機會乙次
								<br />
								（價值20,000元旅遊商品兌換券乙組，共抽5名，每人限獲獎乙次）。
							</Note>
							<Note highlight lineHeight={30}>
								註：上述活動採擇優最高門檻計，每筆保單享乙個獎項抽獎機會一次。
							</Note>
						</div>
					</div>
				</ItemWrapper>
			</Item>
			<Item>
				<ItemWrapper>
					<Flex>
						<Title>首次投保抽獎趣</Title>
						<Note lineHeight={20}>(僅限國外旅平險)</Note>
					</Flex>
					<div>
						<Note lineHeight={30}>
							活動期間於本公司網路投保首次成功投保者*，不限該筆旅平險保費金額，即享「200元全聯禮券」抽獎機會乙次（共抽200名，每人限獲獎乙次）。
						</Note>
						<Note highlight lineHeight={30}>
							註：「首次成功投保者」係指自註冊後從未投保任一險種之網路投保會員，且於活動期間成功投保旅平險為其首筆保單。
						</Note>
					</div>
				</ItemWrapper>
			</Item>
		</List>
	);
}

export const AwardList = () => {
	return (
		<div>
			<div
				style={{
					paddingBottom: "40px",
					borderBottom: "1px solid #000000",
				}}
			>
				<div style={{ marginBottom: "30px" }}>
					<Title>跨年出國抽獎趣</Title>
				</div>
				<Flex style={{ marginBottom: "20px" }}>
					<SubTitle>8,800元好禮即享券</SubTitle>
					<Note lineHeight={20}>（無效期餘額型）</Note>
				</Flex>
				<Note>
					20大品牌讓收券者自選面額，可多次自由選配。
					<br />
					適用通路：全聯、王品集團、7-ELEVEN、全家、家樂福、大潤發、屈臣氏、特力集團、漢來美食通用券、遠東SOGO百貨、遠東百貨、遠東巨城購物中心、foodpanda、寶雅集團、漢神百貨/漢神巨蛋、瓦城集團、爭鮮集團、小北百貨、美廉社&三友藥妝通用、楓康超市。
				</Note>
			</div>
			<div style={{ marginTop: "40px" }}>
				<div style={{ marginBottom: "30px" }}>
					<Title>投保滿額抽獎趣</Title>
				</div>
				<Flex style={{ marginBottom: "20px" }}>
					<SubTitle>500元好禮即享券</SubTitle>
					<Note lineHeight={20}>（無效期餘額型）</Note>
				</Flex>
				<Note>
					可分次抵用。五大品牌擇一使用，一旦選定品牌，限全額度單一品牌兌換使用。
					<br />
					適用通路：家樂福、遠東SOGO百貨、遠東百貨、王品集團、7-ELEVEN。
				</Note>
			</div>
			<div
				style={{
					marginTop: "40px",
					paddingBottom: "40px",
					borderBottom: "1px solid #000000",
				}}
			>
				<Flex>
					<SubTitle>星宇航空東京來回機票</SubTitle>
					<Note lineHeight={20}>
						（以ezfly 優惠碼形式提供「價值20,000元旅遊兌換券」）
					</Note>
				</Flex>
				<div style={{ marginTop: "20px" }}>
					<div style={{ display: "flex", alignItems: "baseline", gap: "20px" }}>
						<Circle />
						<Note lineHeight={30}>
							本優惠碼ezfly易飛網全品項都可使用，恕無法兌換現金或找零，請一次抵用完畢，不可重複使用。
						</Note>
					</div>
				</div>
				<div style={{ marginTop: "20px" }}>
					<div style={{ display: "flex", alignItems: "baseline", gap: "20px" }}>
						<Circle />
						<Note lineHeight={30}>
							兌換方式：本優惠碼需以人工訂票方式預約行程並成功開票或確認完成訂房、訂票，方可使用。
						</Note>
					</div>
				</div>
				<div style={{ marginTop: "20px" }}>
					<div style={{ display: "flex", alignItems: "baseline", gap: "20px" }}>
						<Circle />
						<Note lineHeight={30}>
							本優惠碼因訂票方式，若預定品項為國內外機票或其他旅遊行程等預定品項，則另需支付人工訂票手續費，詳細費用請洽ezfly專人。
						</Note>
					</div>
				</div>
			</div>
			<div style={{ marginTop: "40px" }}>
				<div style={{ marginBottom: "30px" }}>
					<Title>首次投保抽獎趣</Title>
				</div>
				<Flex style={{ marginBottom: "20px" }}>
					<SubTitle>200元全聯禮券</SubTitle>
					<Note lineHeight={20}>（無效期餘額型）</Note>
				</Flex>
				<Note>
					限全聯實體門市使用，可分次使用至面額兌換完畢，恕無法支付線上購物（含PXGo!、分批取、小時達等)、外送平台、代收業務（含雙北專用購物袋)、服務事項、兌換現金/儲值金/禮券/禮卡及菸品等相關受法令限制商品。
				</Note>
			</div>
		</div>
	);
};

export function Invitor() {
	return (
		<div style={{ width: "100%" }}>
			<Title>邀請人</Title>
			<div
				style={{
					marginTop: "24px",
					display: "flex",
					flexDirection: "column",
					gap: "20px",
				}}
			>
				<div style={{ display: "flex", alignItems: "baseline", gap: "20px" }}>
					<Circle />
					<Note lineHeight={30}>
						成功邀請1筆保單，享「50點LINE
						POINTS好禮即享券」抽獎機會乙次（共抽200名）。
					</Note>
				</div>
				<div style={{ display: "flex", alignItems: "baseline", gap: "20px" }}>
					<Circle />
					<Note lineHeight={30}>
						成功邀請2筆保單，享「150點LINE
						POINTS好禮即享券」抽獎機會乙次（共抽200名）。
					</Note>
				</div>
				<div style={{ display: "flex", alignItems: "baseline", gap: "20px" }}>
					<Circle />
					<Note lineHeight={30}>
						成功邀請3筆以上保單，享「300點LINE
						POINTS好禮即享券」抽獎機會乙次（共抽100名）。
					</Note>
				</div>
			</div>
		</div>
	);
}

export function Receiver() {
	return (
		<div
			style={{
				width: "100%",
				display: "flex",
				flexDirection: "column",
				gap: "20px",
			}}
		>
			<Title>被邀請人</Title>
			<div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
				<Note>
					不限單筆保費金額，該筆保單即享「50點LINE
					POINTS好禮即享券」抽獎機會乙次
				</Note>
				<Note>（共抽300名，每人限獲獎乙次）。</Note>
				<Note highlight>
					註：被邀請人投保時須填入「邀請人推薦碼」資訊（不可為本人推薦碼），雙方方符合抽獎資格。
				</Note>
			</div>
		</div>
	);
}

const CaseWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 20px;
	width: 183px;
	height: 42px;
	border: 1px solid #000000;
	@media (max-width: 480px) {
		width: fit-content;
		padding: 0 20px;
	}
`;

export function Case() {
	return (
		<div>
			<CaseWrapper>案例說明</CaseWrapper>
			<div style={{ marginTop: "20px" }}>
				<Note>
					全小球邀請五位朋友參與此活動，其中有兩位朋友於活動期間共成功投保3筆旅平險（且皆有填寫全小球之推薦碼)，則全小球可享「300點LINE
					POINTS好禮即享券」抽獎機會乙次; 而兩位朋友分別享有「50點LINE
					POINTS好禮即享券」1次與2次之抽獎機會。
				</Note>
			</div>
		</div>
	);
}

export function LinePoints() {
	return (
		<>
			<div
				style={{
					width: "100%",
					display: "flex",
					flexDirection: "column",
					gap: "24px",
				}}
			>
				<Title>
					50點、150點、300點
					<br />
					LINE POINTS好禮即享券
				</Title>
				<div style={{ display: "flex", alignItems: "flex-start", gap: "22px" }}>
					<SmallItem>1</SmallItem>
					<Note lineHeight={30}>
						LINE POINTS即享券僅限LINE帳號註冊國家為台灣的用戶使用。
					</Note>
				</div>
				<div style={{ display: "flex", alignItems: "flex-start", gap: "22px" }}>
					<SmallItem>2</SmallItem>
					<Note lineHeight={30}>
						LINE POINTS的有效期限為最後一次獲得點數當天起算180天內，
						<br />
						一旦超過有效期限，您所持有的點數將會全數失效。
					</Note>
				</div>
			</div>
			<div style={{ marginTop: "24px" }}>
				<CaseWrapper>活動獎項發放說明</CaseWrapper>
				<div style={{ marginTop: "20px" }}>
					<Note>
						本活動獎項採電子票券形式，將以Edenred之LINE「好禮即享券領券通知」的官方帳號發送通知型訊息予中獎者。
						若您無法接收到通知型訊息，活動小組將另發送好禮即享券簡訊通知。
					</Note>
				</div>
			</div>
		</>
	);
}

export default ActionList;
