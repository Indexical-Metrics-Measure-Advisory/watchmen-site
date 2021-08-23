import styled from 'styled-components';
import {atMobile} from '../theme';

export const HeaderContainer = styled.header.attrs({'data-widget': 'header'})`
	display: grid;
	position: relative;
	grid-template-columns: auto auto 1fr auto;
	align-items: center;
	width: 100%;
	height: 120px;
	padding: 32px 64px;
	background-color: var(--dark-bg-color);

	> svg {
		width: 40px;
		height: 40px;
	}
	
	${atMobile} {
		padding: 16px 16px;
		height: 80px;
	}
`;
export const HeaderCompanyName = styled.div.attrs({'data-widget': 'header-company-name'})`
	display: flex;
	position: relative;
	align-items: center;
	font-family: Poppins, sans-serif;
	font-weight: 700;
	font-size: 24px;
	color: var(--dark-font-color);
	margin-left: 16px;
`;
export const Menus = styled.div.attrs({'data-widget': 'header-menus'})`
	display: flex;
	position: relative;
	align-items: center;
	${atMobile} {
		display: none;
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