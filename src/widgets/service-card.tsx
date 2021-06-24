import styled from 'styled-components';

export const ServiceCardSlogan = styled.div.attrs({'data-widget': 'service-card-slogan'})`
	position: relative;
	font-family: var(--service-card-slogan-font-family);
	font-size: var(--service-card-slogan-font-size);
	font-weight: var(--service-card-slogan-font-weight);
	line-height: var(--service-card-slogan-line-height);
	color: var(--dark-font-color);
`;
export const ServiceCardButton = styled.button.attrs({'data-widget': 'service-card-button'})`
	display: flex;
	position: relative;
	align-items: center;
	justify-content: center;
	height: var(--service-card-button-height);
	font-family: var(--service-card-button-font-family);
	font-size: var(--service-card-button-font-size);
	font-weight: var(--service-card-button-font-weight);
	padding: 0 var(--button-padding);
	background-color: var(--light-bg-color);
	color: var(--light-font-color);
	white-space: nowrap;
	cursor: pointer;
	transition: var(--transition);
	&:hover {
		background-color: var(--light-hover-bg-color);
	}
`;