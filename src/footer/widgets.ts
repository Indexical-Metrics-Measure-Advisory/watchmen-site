import styled from 'styled-components';

export const FooterContainer = styled.header.attrs({'data-widget': 'footer'})`
	display: grid;
	position: relative;
	grid-template-columns: 1fr;
	align-items: center;
	text-align: center;
	width: 100%;
	height: var(--header-height);
	padding: calc(var(--v-margin) * 2) var(--h-margin) 0;
	background-color: var(--dark-bg-color);
	color: var(--dark-font-color);
	font-size: 14px;
	font-family: Poppins, sans-serif;
`;
