import styled, {keyframes} from 'styled-components';
import ClientsImage from '../assets/clients.jpeg';

export const ClientsContainer = styled.div.attrs({'data-widget': 'clients'})`
	display: flex;
	position: relative;
	flex-direction: column;
	background-color: var(--dark-bg-color);
	color: var(--dark-font-color)
`;
export const ClientsImageContainer = styled.div.attrs({'data-widget': 'clients-image'})`
	display: grid;
	position: relative;
	grid-template-columns: 1fr;
	grid-template-rows: 52% 1fr;
	grid-row-gap: 32px;
	width: 100%;
	height: 500px;
	&:before {
		content: '';
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url(${ClientsImage});
		background-position: center;
		background-size: cover;
		filter: brightness(0.9);
	}
`;
export const SectionTitle = styled.div.attrs({'data-widget': 'section-title'})`
	position: relative;
	justify-self: center;
	align-self: end;
	font-family: Oswald, sans-serif;
	font-weight: 500;
	font-size: 50px;
	line-height: 1.5em;
	text-transform: uppercase;
`;
export const SectionMinorTitle = styled.div.attrs({'data-widget': 'section-minor-title'})`
	position: relative;
	font-family: Raleway, sans-serif;
	font-weight: 500;
	font-size: 20px;
	line-height: 1.5em;
	margin: 0 auto;
	text-align: center;
	width: 50%;
`;
export const ClientsCards = styled.div.attrs({'data-widget': 'client-cards'})`
	display: grid;
	grid-template-columns: repeat(4, 220px);
	grid-template-rows: 1fr 1fr;
	grid-column-gap: 32px;
	grid-row-gap: 32px;
	justify-content: center;
	padding: 108px 0 48px;
`;
export const ClientCard = styled.div.attrs({'data-widget': 'client-card'})`
`;
const NameAnimation = keyframes`
	0% {
		letter-spacing: -0.5em;
		opacity: 0;
	}
	40% {
		opacity: 0.6;
	}
	100% {
		letter-spacing: 0.2em;
		opacity: 1;
	}
`;
export const ClientCardImage = styled.div.attrs<{ image: string }>(({image}) => {
	return {
		'data-widget': 'client-card-image',
		style: {
			backgroundImage: `url(${image})`
		}
	};
})<{ image: string, name: string }>`
	position: relative;
	background-position: center;
	background-size: cover;
	width: 220px;
	height: 220px;
	transition: filter 300ms ease-in-out;
	&:hover {
		cursor: crosshair;
		filter: drop-shadow(2px 4px 6px var(--button-hover-color));
		&:after {
			opacity: 1;
			animation: ${NameAnimation} 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
		}
	}
	&:after {
		content: '${({name}) => name}';
		display: block;
		position: absolute;
		top: 0;
		left: 50%;
		opacity: 0;
		font-family: Oswald, sans-serif;
		font-weight: 500;
		text-transform: uppercase;
		transform: translateX(-50%);
		transition: opacity 300ms ease-in-out;
		z-index: 1;
	}
`;