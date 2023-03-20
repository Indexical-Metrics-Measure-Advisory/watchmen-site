import color from 'color';
import styled from 'styled-components';
import {atMobile, getTheme} from '../theme';

export const PricingAndPlanContainer = styled.div.attrs({'data-widget': 'pricing-and-plan'})`
	display          : flex;
	position         : relative;
	flex-direction   : column;
	background-color : var(--light-bg-color);
	color            : var(--light-font-color)
`;
export const SectionTitle = styled.div.attrs({'data-widget': 'section-title'})`
	position    : relative;
	font-family : Poppins, sans-serif;
	font-weight : 500;
	font-size   : 40px;
	line-height : 1.5em;
	margin      : 168px auto 48px;
	text-align  : center;
	${atMobile} {
		margin : 48px 32px;
	}
`;
export const PlanCards = styled.div.attrs({'data-widget': 'plan-cards'})`
	display               : grid;
	position              : relative;
	grid-template-columns : repeat(2, 450px);
	grid-column-gap       : 48px;
	justify-content       : center;
	margin-bottom         : 48px;
	${atMobile} {
		grid-template-columns : 1fr;
		grid-row-gap          : 32px;
		padding               : 0 32px;
	}
`;
export const PlanCard = styled.div.attrs({'data-widget': 'plan-card'})`
	display               : grid;
	position              : relative;
	grid-template-columns : 1fr;
	grid-template-rows    : auto auto auto auto auto auto auto auto;
	border                : 1px solid ${() => color(getTheme().darkBgColor).alpha(0.35).toString()};
	padding               : 32px 0;
	${atMobile} {
		text-align : center;
		padding    : 32px 16px;
	}
`;
export const PlanTitle = styled.div.attrs({'data-widget': 'plan-title'})`
	position     : relative;
	justify-self : center;
	font-family  : Raleway, sans-serif;
	font-weight  : 500;
	font-size    : 20px;
	padding-top  : 16px;
`;
export const PlanPrice = styled.div.attrs({'data-widget': 'plan-price'})`
	position     : relative;
	justify-self : center;
	font-family  : 'Barlow Condensed', sans-serif;
	font-weight  : 500;
	font-size    : 96px;
	padding      : 24px 0;
	&:before {
		content   : '$';
		display   : block;
		position  : absolute;
		top       : 40px;
		left      : -24px;
		font-size : 20px;
	}
`;
export const PlanSlogan = styled.div.attrs({'data-widget': 'plan-slogan'})`
	position       : relative;
	justify-self   : center;
	font-family    : Raleway, sans-serif;
	font-weight    : 400;
	font-size      : 14px;
	padding-bottom : 32px;
	${atMobile} {
		line-height : 1.8em;
	}
`;
export const PlanName = styled.div.attrs({'data-widget': 'plan-name'})`
	position       : relative;
	justify-self   : center;
	font-family    : Raleway, sans-serif;
	font-weight    : 500;
	font-size      : 12px;
	opacity        : 0.5;
	padding-bottom : 24px;
`;
export const PlanButton = styled.button.attrs({'data-widget': 'plan-button'})`
	display          : flex;
	position         : relative;
	align-items      : center;
	align-self       : end;
	justify-content  : center;
	justify-self     : center;
	height           : 48px;
	font-family      : 'Barlow Condensed', sans-serif;
	font-size        : 18px;
	font-weight      : 500;
	text-transform   : uppercase;
	width            : 75%;
	padding          : 0 24px;
	margin           : 16px 0 24px;
	background-color : var(--plan-button-bg-color);
	color            : var(--dark-font-color);
	white-space      : nowrap;
	cursor           : pointer;
	transition       : filter 300ms ease-in-out;
	&:hover {
		filter : brightness(1.5);
	}
`;
export const PlanSeparator = styled.div.attrs({'data-widget': 'plan-separator'})`
	position         : relative;
	width            : 100%;
	height           : 1px;
	background-color : ${() => color(getTheme().darkBgColor).alpha(0.35).toString()};
	margin-bottom    : 32px;
`;
export const PlanComment = styled.div.attrs({'data-widget': 'plan-comment'})`
	position     : relative;
	justify-self : center;
	font-family  : Raleway, sans-serif;
	font-weight  : 400;
	font-size    : 16px;
	line-height  : 2em;
	${atMobile} {
		text-align : center;
	}
`;
export const SecondarySectionTitle = styled.div.attrs({'data-widget': 'secondary-section-title'})`
	position    : relative;
	font-family : Poppins, sans-serif;
	font-weight : 500;
	font-size   : 40px;
	line-height : 1.5em;
	margin      : 64px auto 48px;
	text-align  : center;
	${atMobile} {
		margin : 48px 32px;
	}
`;
export const ExperimentFeatures = styled.div.attrs({'data-widget': 'experiment-features'})`
	display               : grid;
	position              : relative;
	grid-template-columns : 948px;
	justify-content       : center;
	margin-bottom         : 120px;
	${atMobile} {
		grid-template-columns : 1fr;
		grid-row-gap          : 32px;
		padding               : 0 32px;
	}
`;
export const ExperimentFeature = styled.div.attrs({'data-widget': 'experiment-feature'})`
	position : relative;
	border   : 1px solid ${() => color(getTheme().darkBgColor).alpha(0.35).toString()};
	padding  : 32px;
`;
export const ExperimentTitle = styled.div.attrs({'data-widget': 'experiment-title'})`
	position       : relative;
	justify-self   : center;
	font-family    : Raleway, sans-serif;
	font-weight    : 500;
	font-size      : 20px;
	padding-bottom : 16px;
`;
export const ExperimentDescription = styled.div.attrs({'data-widget': 'experiment-desc'})`
	position    : relative;
	opacity     : 0.7;
	font-family : Raleway, sans-serif;
	font-size   : 0.8em;
	line-height : 1.4em;
`;
export const ExperimentDownloadLink = styled.div.attrs({'data-widget': 'experiment-download-link'})`
	position     : relative;
	justify-self : center;
	font-family  : Raleway, sans-serif;
	padding-top  : 16px;
	> span {
		text-decoration : underline;
		cursor          : pointer;
	}
`;
export const ExperimentWarning = styled.div.attrs({'data-widget': 'experiment-warning'})`
	position    : relative;
	opacity     : 0.5;
	padding-top : 32px;
	line-height : 1.5em;
	font-size   : 0.8em;
`;
