import styled from 'styled-components';
import {atMobile} from '../theme';

export const HomeContainer = styled.div.attrs({'data-widget': 'home'})`
`;
export const SectionTitle = styled.div.attrs({'data-widget': 'section-title'})`
	position: relative;
	font-family: Oswald, sans-serif;
	font-weight: 500;
	font-size: 50px;
	line-height: 1.5em;
	text-transform: uppercase;
	margin: 0 auto;
`;
export const SectionMinorTitle = styled.div.attrs({'data-widget': 'section-minor-title'})`
	position: relative;
	font-family: Raleway, sans-serif;
	font-weight: 400;
	font-size: 22px;
	line-height: 1.5em;
	margin: 0 auto;
	
	${atMobile} {
		margin: 0;
	}
`;
export const SectionComment = styled.div.attrs({'data-widget': 'section-comment'})`
	position: relative;
	font-family: Raleway, sans-serif;
	font-weight: 400;
	font-size: 18px;
	line-height: 1.5em;
	margin: 0 auto;
	text-align: center;
	
	${atMobile} {
		margin: 0;
		font-size: 14px;
	}
`;