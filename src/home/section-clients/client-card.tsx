import styled from 'styled-components';

export const ClientCardName = styled.div.attrs({'data-widget': 'client-card-name'})`
	position: relative;
	font-family: var(--client-card-name-font-family);
	font-size: var(--client-card-name-font-size);
	font-weight: var(--client-card-name-font-weight);
	line-height: var(--client-card-name-line-height);
	color: var(--dark-font-color);
	text-transform: uppercase;
`;