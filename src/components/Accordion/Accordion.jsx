import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Minus = () => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			title="減號圖標"
		>
			<path
				d="M6 12L18 12"
				stroke="#000000"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

const Plus = () => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			title="加號圖標"
		>
			<path
				d="M12 6V18M6 12H18"
				stroke="#000000"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

const Layer = styled.div`
  width: ${(props) => props.$width || "100%"};
  height: ${(props) => props.$height || "65px"};
  background-color: #FFFAF1;
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
  font-weight: bold;
  border: solid 2px black;
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  transition: all 0.3s ease;
  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const Button = styled.button`
  width: ${(props) => props.$width || "100%"};
  height: ${(props) => props.$height || "65px"};
  font-size: 25px;
  font-weight: bold;
  color: black;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  cursor: pointer;
  border: none;
  padding: 0;
`;

const IconWrapper = styled.div`
  position: relative;
  right: 50px;
`;

function Accordion({ title, isOpen, onClick, children }) {
	return (
		<Wrapper>
			<Button onClick={onClick}>
				<Layer />
				<Border>
					<div style={{ zIndex: 5 }}>{title}</div>
				</Border>
				{isOpen ? (
					<IconWrapper>
						<Minus />
					</IconWrapper>
				) : (
					<IconWrapper>
						<Plus />
					</IconWrapper>
				)}
			</Button>
			{isOpen && children}
		</Wrapper>
	);
}

Accordion.propTypes = {
	title: PropTypes.string.isRequired,
	isOpen: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired,
};

export default Accordion;
