import styled from 'styled-components';

export const FooterContainer = styled.footer.attrs({'data-widget': 'footer'})`
	display: grid;
	position: relative;
	grid-template-columns: 1fr;
	align-items: center;
	text-align: center;
	width: 100%;
	height: 120px;
	padding: 64px 64px 0;
	background-color: var(--dark-bg-color);
	color: var(--dark-font-color);
	font-size: 14px;
	font-family: Poppins, sans-serif;
`;
