import styled from "styled-components";

const getBackground = (type) => {
	switch (type) {
		case "simple":
			return "#E17654";
		case "rugged":
			return "#115E59";
		case "luxury":
			return "#161616";
		case "clear":
			return "#4D4D4D";
		default:
			return "#FFEAD0";
	}
};

const StyledBadge = styled.div`
	background: ${(props) =>
		props.isSelected && props.type
			? getBackground(props.type)
			: "#FFEAD0"};
	color: ${(props) =>
		props.isSelected ? "#FFEAD0" : "#4D4D4D"};
	text-align: center;
	padding: 6px;
	max-width: ${(props) =>
		props.maxWidth ? props.maxWidth : "10rem"};
	border-radius: 5px;
	display: grid;
	place-items: center;

	&:hover {
		background: ${(props) =>
			props.toHover && getBackground(props.type)};
		color: #fff;
	}
`;

function Badge(props) {
	return <StyledBadge {...props} />;
}

export default Badge;
