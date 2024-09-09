import styled from "styled-components";

const Wrapper = styled.button`
  width: 100%;
  height: 65px;
  font-size: 25px;
  font-weight: bold;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const Layer = styled.div`
  width: 100%;
  height: 65px;
  background-color: ${props => props.$color ?? "#FED430"};
  border-radius: 8px;
  position: absolute;
  top: 5px;
  left: 5px;
`

const Border = styled.div`
  width: 100%;
  height: 65px;
  font-size: 25px;
  font-weight: bold;
  border: solid 2px black;
  border-radius: 8px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`

const Button = ({ color, children }) => {
  return (
    <Wrapper>
      <Layer />
      <Border $color={color}>
        <div style={{ zIndex: 5 }}>
          {children}
        </div>
      </Border>
    </Wrapper>
  )
}

export default Button;
