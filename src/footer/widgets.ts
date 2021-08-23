import styled from 'styled-components';
import {atMobile} from '../theme';

export const FooterContainer = styled.footer.attrs({'data-widget': 'footer'})`
	display: grid;
	position: relative;
	grid-template-columns: 1fr;
	align-items: center;
	text-align: center;
	width: 100%;
	height: 120px;
	padding: 64px 64px 0;
	background-color: var(--dark-bg-color);
	color: var(--dark-font-color);
	font-size: 14px;
	font-family: Poppins, sans-serif;
	
	${atMobile} {
		padding: 32px;
		height: auto;
	}
`;

export const Menus = styled.div.attrs({'data-widget': 'header-menus'})`
	display: none;
	flex-direction: column;
	position: relative;
	align-items: center;
	padding-top: 32px;
	
	${atMobile} {
		display: flex;
	}
`;
export const Menu = styled.div.attrs<{ active: boolean }>(({active}) => {
	return {
		'data-widget': 'header-menu',
		style: {
			color: active ? 'var(--button-hover-color)' : (void 0),
			textDecoration: active ? 'underline' : (void 0)
		}
	};
})<{ active: boolean }>`
	display: flex;
	position: relative;
	align-items: center;
	font-family: Montserrat, sans-serif;
	font-size: 14px;
	color: var(--dark-font-color);
	padding: 0 16px;
	line-height: 2em;
	cursor: pointer;
	transition: color 300ms ease-in-out;
	&:hover {
		color: var(--button-hover-color);
	}
`;