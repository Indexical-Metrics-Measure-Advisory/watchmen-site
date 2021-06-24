import styled from 'styled-components';

export const SectionServicesContainer = styled.div.attrs({'data-widget': 'home-section-services'})`
	display: flex;
	position: relative;
	flex-direction: column;
	width: 100%;
	padding: var(--section-v-margin) var(--section-h-margin);
	background-color: var(--light-bg-color);
	color: var(--light-font-color);
`;
export const ServiceCardsContainer = styled.div.attrs({'data-widget': 'home-service-cards'})`
	display: grid;
	position: relative;
	grid-template-columns: 1fr 1fr 1fr;
	grid-column-gap: var(--service-card-column-gap);
	margin-top: calc(var(--v-margin) * 2);
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
	padding: var(--h-margin) var(--home-service-card-v-margin);
	justify-items: center;
	> div:first-child {
		text-align: center;
	}
	> button[data-widget='service-card-button'] {
		align-self: end;
	}
`;
