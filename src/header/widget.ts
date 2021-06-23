import styled from 'styled-components';

export const HeaderContainer = styled.header.attrs({'data-widget': 'header'})`
	display: grid;
	position: relative;
	grid-template-columns: auto auto 1fr auto;
	align-items: center;
	width: 100%;
	height: 120px;
	padding: var(--v-margin) var(--h-margin);
	background-color: var(--dark-bg-color);

	> svg {
		width: var(--header-logo-size);
		height: var(--header-logo-size);
	}
`;
export const HeaderCompanyName = styled.div.attrs({'data-widget': 'header-company-name'})`
	display: flex;
	position: relative;
	align-items: center;
	font-family: var(--title-font-family);
	font-weight: var(--title-font-weight);
	font-size: var(--header-company-font-size);
	color: var(--dark-font-color);
	margin-left: calc(var(--h-margin) / 4);
`;
export const Menus = styled.div.attrs({'data-widget': 'header-menus'})`
	display: flex;
	position: relative;
	align-items: center;
`;
export const Menu = styled.div.attrs<{ active: boolean }>(({active}) => {
	return {
		'data-widget': 'header-menu',
		style: {
			textDecoration: active ? 'underline' : (void 0)
		}
	};
})<{ active: boolean }>`
	display: flex;
	position: relative;
	align-items: center;
	font-family: var(--header-menu-font-family);
	font-size: var(--header-menu-font-size);
	color: var(--dark-font-color);
	padding: 0 calc(var(--h-margin) / 4);
	line-height: var(--button-line-height);
	cursor: pointer;
	transition: var(--transition);
	&:hover {
		color: var(--button-hover-color);
	}
`;