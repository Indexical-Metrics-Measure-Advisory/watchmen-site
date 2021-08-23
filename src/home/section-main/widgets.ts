import color from 'color';
import styled from 'styled-components';
import HomePrimaryImage from '../../assets/home-primary-compressed.jpg';
import {atMobile, getTheme} from '../../theme';

export const SectionMainContainer = styled.div.attrs({'data-widget': 'home-section-main'})`
	position: relative;
	width: 100%;
	height: 900px;
	background-image: url(${HomePrimaryImage});
	background-position: center;
	background-size: contain;
	
	${atMobile} {
		height: auto;
	}
`;
export const SectionMainContent = styled.div.attrs({'data-widget': 'home-section-main-content'})`
	display: flex;
	position: relative;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	top: 0;
	left: 0;
	width: 50%;
	height: 100%;
	padding: 120px 24px;
	background-color: ${() => color(getTheme().darkBgColor).alpha(0.4).toString()};
	
	${atMobile} {
		width: 100%;
		padding: 20px 20px;
	}
`;
export const BiggestSlogan = styled.span.attrs({'data-widget': 'home-section-biggest-slogan'})`
	display: inline-flex;
	position: relative;
	font-family: Oswald, sans-serif;
	font-weight: 500;
	font-size: 88px;
	color: var(--dark-font-color);
	text-transform: uppercase;

	${atMobile} {
		
	}
`;
export const MinorSlogan = styled.span.attrs({'data-widget': 'home-section-minor-slogan'})`
	display: inline-flex;
	position: relative;
	font-family: Oswald, sans-serif;
	font-weight: 500;
	font-size: 22px;
	margin: 32px 0;
	color: var(--dark-font-color);

	${atMobile} {
		width: 100%;
	}
`;
export const MajorComment = styled.span.attrs({'data-widget': 'home-section-major-comment'})`
	display: inline-flex;
	position: relative;
	font-family: Poppins, sans-serif;
	font-weight: 400;
	font-size: 18px;
	line-height: 1.5em;
	color: var(--dark-font-color);
	width: 60%;
	text-align: center;
	
	${atMobile} {
		font-size: 14px;
		width: 100%;
		text-align: left;
	}
`;