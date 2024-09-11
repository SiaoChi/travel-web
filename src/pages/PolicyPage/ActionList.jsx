import styled from "styled-components";

const List = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 24px;
  counter-reset: item;
  > ol {
    counter-reset: item;
  }
`;

const Item = styled.li`
  counter-increment: item;
  display: flex;
  align-items: baseline;
  line-height: 1.5;
  &::before {
    content: counter(item);
    font-size: 65px;
    font-weight: bold;
    margin-right: 30px;
    line-height: 65px;
    color: #2496F0;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  line-height: 40px;
`;

const Note = styled.div`
  font-size: 20px;
  line-height: ${({ lineHeight }) => lineHeight}px;
  color: ${({ highlight }) => (highlight ? "#2496F0" : "#000000")};
  white-space: pre-wrap;
`;

const Flex = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 22px;
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
						<SmallItem>1</SmallItem>
						<Note lineHeight={30}>
							單筆保費滿200元，該筆保單即享「500元好禮即享券」抽獎機會乙次
							<br />
							（共抽100名，每人獲獎次數不限）。
						</Note>
					</div>
					<div
						style={{ display: "flex", alignItems: "flex-start", gap: "22px" }}
					>
						<SmallItem>2</SmallItem>
						<div>
							<Note lineHeight={30}>
								單筆保費滿500元，該筆保單即享「星宇航空東京來回機票」抽獎機會乙次
								<br />
								（價值20,000元旅遊商品兌換券乙組，共抽5名，每人限獲獎乙次）。
							</Note>
							<Note highlight lineHeight={30}>
								註：「首次成功投保者」係指自註冊後從未投保任一險種之網路投保會員，且於活動期間成功投保旅平險為其首筆保單。
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

export default ActionList;
