import styled from 'styled-components';

export const ServicesContainer = styled.div.attrs({'data-widget': 'services'})`
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
export const ServiceCard = styled.div.attrs({'data-widget': 'service-card'})`
	display: grid;
	position: relative;
	grid-template-columns: 1fr 1fr;
	height: 650px;
	margin: 64px 64px 0;
`;
export const ServiceCardContent = styled.div.attrs({'data-widget': 'service-card-content'})`
	display: grid;
	position: relative;
	grid-template-columns: 1fr;
	grid-template-rows: auto auto 1fr auto;
	background-color: var(--big-card-bg-color);
	padding: 108px 32px 64px;
`;
export const ServiceCardSlogan = styled.div.attrs({'data-widget': 'service-card-slogan'})`
	position: relative;
	font-family: Oswald, sans-serif;
	font-size: 32px;
	font-weight: 500;
	line-height: 1.5em;
	text-align: center;
	color: var(--dark-font-color);
`;
export const ServiceCardMinorSlogan = styled.div.attrs({'data-widget': 'service-card-minor-slogan'})`
	position: relative;
	font-family: Raleway, sans-serif;
	font-size: 20px;
	font-weight: 400;
	line-height: 1.5em;
	text-align: center;
	margin: 40px 0 32px;
	color: var(--dark-font-color);
`;
export const ServiceCardComment = styled.div.attrs({'data-widget': 'section-comment'})`
	position: relative;
	font-family: Raleway, sans-serif;
	font-weight: 400;
	font-size: 18px;
	line-height: 1.5em;
	margin: 0 auto;
	text-align: center;
	width: 75%;
`;
export const ServiceCardButton = styled.button.attrs({'data-widget': 'service-card-button'})`
	display: flex;
	position: relative;
	align-items: center;
	justify-content: center;
	justify-self: center;
	height: 48px;
	font-family: Raleway, sans-serif;
	font-size: 18px;
	font-weight: 400;
	padding: 0 24px;
	background-color: var(--light-bg-color);
	color: var(--light-font-color);
	white-space: nowrap;
	cursor: pointer;
	transition: background-color 300ms ease-in-out;
	&:hover {
		background-color: var(--button-hover-color);
	}
`;
export const ServiceCardImage = styled.div.attrs<{ image: string }>(({image}) => {
	return {
		'data-widget': 'service-card-content',
		style: {
			backgroundImage: `url(${image})`
		}
	};
})<{ image: string }>`
	position: relative;
	background-position: center;
	background-size: cover;
`;