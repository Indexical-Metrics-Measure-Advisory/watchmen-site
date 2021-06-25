import styled from 'styled-components';

export const SectionServicesContainer = styled.div.attrs({'data-widget': 'home-section-services'})`
	display: flex;
	position: relative;
	flex-direction: column;
	width: 100%;
	padding: 108px 64px;
	background-color: var(--light-bg-color);
	color: var(--light-font-color);
	> div[data-widget=section-title] {
		padding-bottom: 32px;
	}
	> div[data-widget=section-minor-title] {
		padding-bottom: 48px;
	}
	> div[data-widget=section-comment] {
		width: 60%;
	}
`;
export const ServiceCardsContainer = styled.div.attrs({'data-widget': 'home-service-cards'})`
	display: grid;
	position: relative;
	grid-template-columns: 1fr 1fr 1fr;
	grid-column-gap: 48px;
	margin-top: 108px;
`;
export const ServiceCard = styled.div.attrs({'data-widget': 'home-service-card'})`
	display: flex;
	position: relative;
	flex-direction: column;
`;
export const ServiceCardImage = styled.div.attrs<{ image: string }>(({image}) => {
	return {
		'data-widget': 'home-service-card-image',
		style: {
			backgroundImage: `url(${image})`
		}
	};
})<{ image: string }>`
	position: relative;
	height: 300px;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;
export const ServiceCardContent = styled.div.attrs({'data-widget': 'home-service-card-content'})`
	display: grid;
	position: relative;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr 1fr;
	height: 320px;
	background-color: var(--dark-bg-color);
	padding: 64px 48px;
`;
export const ServiceCardSlogan = styled.div.attrs({'data-widget': 'service-card-slogan'})`
	position: relative;
	font-family: Oswald, sans-serif;
	font-size: 28px;
	font-weight: 500;
	line-height: 1.5em;
	text-align: center;
	color: var(--dark-font-color);
`;
export const ServiceCardButton = styled.button.attrs({'data-widget': 'service-card-button'})`
	display: flex;
	position: relative;
	align-items: center;
	align-self: end;
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