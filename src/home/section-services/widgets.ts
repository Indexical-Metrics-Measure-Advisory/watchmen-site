import styled from 'styled-components';

export const SectionServicesContainer = styled.div.attrs({'data-widget': 'home-section-services'})`
	display: flex;
	position: relative;
	flex-direction: column;
	width: 100%;
	padding: 108px 64px;
	background-color: var(--light-bg-color);
	color: var(--light-font-color);
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
	justify-items: center;
	> div:first-child {
		text-align: center;
	}
	> button[data-widget='service-card-button'] {
		align-self: end;
	}
`;
export const ServiceCardSlogan = styled.div.attrs({'data-widget': 'service-card-slogan'})`
	position: relative;
	font-family: Oswald, sans-serif;
	font-size: 28px;
	font-weight: 500;
	line-height: 1.5em;
	color: var(--dark-font-color);
`;
export const ServiceCardButton = styled.button.attrs({'data-widget': 'service-card-button'})`
	display: flex;
	position: relative;
	align-items: center;
	justify-content: center;
	height: 48px;
	font-family: Raleway, sans-serif;
	font-size: 18px;
	font-weight: 400;
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