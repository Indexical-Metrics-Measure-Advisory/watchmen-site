import styled from 'styled-components';
import AboutImage from '../assets/about.jpeg';

export const AboutContainer = styled.div.attrs({'data-widget': 'about'})`
	display: flex;
	position: relative;
	flex-direction: column;
	background-color: var(--dark-bg-color);
	color: var(--dark-font-color)
`;
export const SectionTitle = styled.div.attrs({'data-widget': 'section-title'})`
	position: relative;
	font-family: Oswald, sans-serif;
	font-weight: 500;
	font-size: 50px;
	line-height: 1.5em;
	text-transform: uppercase;
	margin: 80px auto 0;
`;
export const SectionMinorTitle = styled.div.attrs({'data-widget': 'section-minor-title'})`
	position: relative;
	font-family: Raleway, sans-serif;
	font-weight: 400;
	font-size: 22px;
	line-height: 1.5em;
	margin: 32px auto;
`;
export const SectionComment = styled.div.attrs({'data-widget': 'section-comment'})`
	position: relative;
	font-family: Raleway, sans-serif;
	font-weight: 400;
	font-size: 18px;
	line-height: 1.5em;
	margin: 0 auto;
	text-align: center;
	width: 50%;
`;
export const AboutImageContainer = styled.div.attrs({'data-widget': 'about-image'})`
	position: relative;
	width: 100%;
	height: 500px;
	margin-top: 64px;
	background-image: url(${AboutImage});
	background-position: center;
	background-size: cover;
`;