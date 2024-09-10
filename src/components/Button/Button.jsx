import styled from "styled-components";
import PropTypes from "prop-types";

const colorMapping = {
	white: "#FFFFFF",
	yellow: "#FED430",
	red: "#FF0000",
	blue: "#2496F0",
};

const textColorMapping = {
	white: "#000000",
	yellow: "#000000",
	red: "#000000",
	blue: "#FFFFFF",
};

const hoverTextColorMapping = {
	white: "#000000",
	yellow: "#000000",
	red: "#FF0000",
	blue: "#2496F0",
};

const Layer = styled.div`
  width: 100%;
  height: 65px;
  background-color: ${(props) => colorMapping[props.$color]};
  border-radius: 8px;
  position: absolute;
  top: 5px;
  left: 5px;
  transition: all 0.3s ease;
`;

const Border = styled.div`
  width: 100%;
  height: 65px;
  font-size: 25px;
  font-weight: bold;
  border: solid 2px black;
  border-radius: 8px;
  color: ${(props) => textColorMapping[props.$color]};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  transition: all 0.3s ease;
`;

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
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;

  &:hover {
    ${Layer} {
      top: 0;
      left: 0;
      background-color: white;
    }
    ${Border} {
      color: ${(props) => hoverTextColorMapping[props.$color]};
      background-color: ${(props) => colorMapping[props.$color]};
    }
  }
`;

const Button = ({ color = "yellow", children }) => {
	return (
		<Wrapper>
			<Layer $color={color} />
			<Border $color={color}>
				<div style={{ zIndex: 5 }}>{children}</div>
			</Border>
		</Wrapper>
	);
};

Button.propTypes = {
	color: PropTypes.string,
	children: PropTypes.node.isRequired,
};

export default Button;
