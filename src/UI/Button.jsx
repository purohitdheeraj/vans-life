import styled from "styled-components";

const ButtonStyled = styled.button`
	background: ${(props) =>
		props.background ? props.background : "#ff8c38"};
	border: none;
	width: 100%;
	text-align: center;
	padding: 8px;
	color: #fff;
	font-weight: 700;
	cursor: pointer;
	border-radius: 5px;
	margin-top: 5rem;
	text-decoration: none;

	&:hover {
		transform: translate(1px, 1px);
	}
`;

const Button = ({ children }, props) => {
	return (
		<ButtonStyled {...props}>{children}</ButtonStyled>
	);
};

export default Button;
