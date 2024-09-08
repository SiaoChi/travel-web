import styled from "styled-components"

const Section = styled.section`
    position: relative;
    height: 1127px;
`

const Temple = styled.img`
    position: absolute;
    top: -36px;
    left: 62px;
    width: 678px;
`

const Mountain = styled.img`
    position: absolute;
    top: 20px;
    right: -40px;
    width: 678px;
`

const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    margin: 100px 0px 0px 182px;
    > img {
        height: 60px;
    }
`

const Desc = styled.div`
    position: absolute;
    z-index: 1;
    margin-left: 192px;
    margin-top: 60px;
    line-height: 35px;
    letter-spacing: 4px;
    font-size: 25px;
    font-weight: bold;
    > span {
        color: #2496F0;
    }
`

const EnglishText = styled.div`
    position: absolute;
    top: 0;
    right: 41px;
    font-size: 65px;
    line-height: 65px;
    font-weight: bold;
    color: #2496F0;
    text-align: right;
`


const EventImgOne = styled.img`
    position: absolute;
    bottom: 340px;
    left: 122px;
`

const EventImgTwo = styled.img`
    position: absolute;
    bottom: 340px;
    right: 10px;
`

const ReachInsureAmountEvent = () => {

    return (
    
        <Section>
            <Temple src="./home/reach-insure-amount-event-temple.svg" />
            <Mountain src="./home/reach-insure-amount-event-mountain.svg" />

             <Title>
                <img src='./home/reach-insure-amount-event-title.svg' />
                <img src='./home/common-title-lottery.svg' />
            </Title>
            <Desc>
                2024/10/1~2025/1/31期間，<br/>
                成功網路投保<span>「國外旅平險」</span>，單筆保費滿額即可抽！
            </Desc>

            <EnglishText>TRAVEL<br/>JAPAN<br/>TOKYO</EnglishText>

            <EventImgOne src="./home/reach-insure-amount-event1.svg" />
            <EventImgTwo src="./home/reach-insure-amount-event2.svg" />
            

        </Section>
    )
}

export default ReachInsureAmountEvent