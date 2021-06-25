import styled from 'styled-components';

export const SectionClientsContainer = styled.div.attrs({'data-widget': 'home-section-clients'})`
	display: flex;
	position: relative;
	flex-direction: column;
	width: 100%;
	padding: 108px 64px;
	background-color: var(--dark-bg-color);
	color: var(--dark-font-color);
	> div[data-widget=section-title] {
		padding-bottom: 0;
	}
	> div[data-widget=section-minor-title] {
		padding-bottom: 48px;
	}

`;
export const ClientCardsContainer = styled.div.attrs({'data-widget': 'home-client-cards'})`
	display: grid;
	position: relative;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-column-gap: 48px;
	margin: 32px 64px 0;
`;
export const ClientCard = styled.div.attrs({'data-widget': 'home-client-card'})`
	display: flex;
	position: relative;
	flex-direction: column;
`;
export const ClientCardImage = styled.div.attrs<{ image: string }>(({image}) => {
	return {
		'data-widget': 'home-client-card-image',
		style: {
			backgroundImage: `url(${image})`
		}
	};
})<{ image: string }>`
	position: relative;
	height: 200px;
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
`;
export const ClientCardContent = styled.div.attrs({'data-widget': 'home-client-card-content'})`
	display: grid;
	position: relative;
	grid-template-columns: 1fr;
	padding: 32px 0 0;
	justify-items: center;
	> div[data-widget=section-comment] {
		width: 80%;
		margin: 32px 0 0;
	}
`;
export const ClientCardName = styled.div.attrs({'data-widget': 'client-card-name'})`
	position: relative;
	font-family: Oswald, sans-serif;
	font-size: 28px;
	font-weight: 500;
	line-height: 1.5em;
	color: var(--dark-font-color);
	text-transform: uppercase;
`;