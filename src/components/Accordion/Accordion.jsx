import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "../Button";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Spacer = styled.div`
  height: 40px;
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

function Accordion({ title, isOpen, onClick, children }) {
	return (
		<Wrapper>
			<Button
				onClick={onClick}
				color="white"
				icon={isOpen ? <Minus /> : <Plus />}
			>
				{title}
			</Button>
			<Spacer />
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
