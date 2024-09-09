import styled from "styled-components";
import Button from "../../components/Button"

const Wrap = styled.div`
  padding-top: 121px;
  background-color: #FFF5CD;
  display: flex;
  justify-content: center;
  position: relative;
`

const Container = styled.div`
  width: 1366px;
  position: relative;
  overflow: hidden;
  padding: 62px 166px 49px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Flower = styled.img`
  width: 100%;
  position: absolute;
`

const Title = styled.div`
  font-size: 60px;
  font-weight: bold;
  margin-bottom: 63px;
`

const Buttons = styled.div`
  width: 613px;
  display: flex;
  gap: 25px;
  margin-bottom: 37px;
`

const Border = styled.div`
  width: 100%;
  height: 1px;
  background-color: #000;
`

const TitleText = styled.img`
  width: 419px;
`

const TitleAirplaine = styled.img`
  width: 419px;
  position: absolute;
  top: 4px;
  left: -10px;
`

const BannerWrapper = styled.div`
  position: relative;
  margin-top: 20px;
  margin-bottom: 56px;
`

const Description = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 30px;
`

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
`

const Text = styled.div`
  font-weight: bold;
  font-size: 18px;
`

const Spacer = styled.div`
  width: 100%;
  height: ${props => props.height}px;
`


function PolicyPage() {
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
        <img alt="rule 1" src="./policy/award.png" />
        <Spacer height={58} />
      </Container>
    </Wrap>
  )
}

export default PolicyPage;
