import styled from "styled-components";
import PropTypes from "prop-types";

const colorMapping = {
	white: "#FFFFFF",
	yellow: "#FED430",
	red: "#FF837E",
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
	red: "#FF837E",
	blue: "#2496F0",
};

const Layer = styled.div`
  width: ${(props) => props.$width || "100%"};
  height: ${(props) => props.$height || "65px"};
  background-color: ${(props) => colorMapping[props.$color]};
  border-radius: 8px;
  position: absolute;
  top: 5px;
  left: 5px;
  transition: all 0.3s ease;
`;

const Border = styled.div`
  width: ${(props) => props.$width || "100%"};
  height: ${(props) => props.$height || "65px"};
  font-size: 25px;
  line-height: 30px;
  font-weight: bold;
  border: solid 2px black;
  border-radius: ${(props) => (props.$isAccordion ? "0" : "8px")};
  color: ${(props) => textColorMapping[props.$color]};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  transition: all 0.3s ease;
  font-family: "Noto Serif TC", "Noto Serif", serif; 
  font-weight: 700;
  @media (max-width: 1300px) {
    font-size: 20px;
  }
`;

const Wrapper = styled.button`
  width: ${(props) => props.$width || "100%"};
  height: ${(props) => props.$height || "65px"};
  font-size: 25px;
  font-weight: bold;
  border-radius: 8px;
  background-color: #FFFFFF;
  color: black;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  cursor: pointer;
  border: none;
  padding: 0;

  &:hover {
    ${Layer} {
      background-color: ${(props) => props.$hoverBgColor || "#FFFFFF"};
    }
    ${Border} {
      color: ${(props) => hoverTextColorMapping[props.$color]};
    }
  }
`;

const IconWrapper = styled.div`
  position: relative;
  right: 50px;
`;

const Button = ({
	color = "yellow",
	hoverBgColor,
	children,
	onClick,
	icon,
	width,
	height,
}) => {
	return (
		<Wrapper
			$color={color}
			$hoverBgColor={hoverBgColor}
			onClick={onClick}
			$width={width}
			$height={height}
		>
			<Layer $color={color} $width={width} $height={height} />
			<Border
				$color={color}
				$isAccordion={!!icon}
				$width={width}
				$height={height}
			>
				<div style={{ zIndex: 5 }}>{children}</div>
			</Border>
			{icon && <IconWrapper>{icon}</IconWrapper>}
		</Wrapper>
	);
};

Button.propTypes = {
	color: PropTypes.string,
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func,
	icon: PropTypes.node,
};

export default Button;
