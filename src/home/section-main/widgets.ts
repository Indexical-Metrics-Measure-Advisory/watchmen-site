import color from 'color';
import styled from 'styled-components';
import HomePrimaryImage from '../../assets/home-primary-compressed.jpg';

export const SectionMainContainer = styled.div.attrs({'data-widget': 'home-section-main'})`
	position: relative;
	width: 100%;
	height: 900px;
	background-image: url(${HomePrimaryImage});
	background-position: center;
	background-size: cover;
`;
export const SectionMainContent = styled.div.attrs({'data-widget': 'home-section-main-content'})`
	display: flex;
	position: relative;
	justify-content: center;
	top: 0;
	left: 0;
	width: 50%;
	height: 100%;
	padding: 120px 20px;
	background-color: ${({theme}) => color(theme.darkBgColor).alpha(0.4).toString()};
`;
export const BiggestSlogan = styled.span.attrs({'data-widget': 'home-section-biggest-slogan'})`
	display: inline-flex;
	position: relative;
	font-family: var(--biggest-slogan-font-family);
	font-weight: var(--biggest-slogan-font-weight);
	font-size: var(--biggest-slogan-font-size);
	color: var(--dark-font-color);
	text-transform: uppercase;
`;