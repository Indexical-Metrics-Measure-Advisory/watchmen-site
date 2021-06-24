import styled from 'styled-components';

export const SectionServicesContainer = styled.div.attrs({'data-widget': 'home-section-services'})`
	display: flex;
	position: relative;
	flex-direction: column;
	width: 100%;
	padding: var(--section-h-margin) var(--section-v-margin);
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
	background-size: contain;
`;