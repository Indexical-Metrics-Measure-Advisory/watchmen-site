export const DefaultTheme = {
	code: 'default',

	titleFontFamily: 'Poppins, sans-serif',
	titleFontWeight: 700,

	darkBgColor: 'rgb(24,24,24,0.95)',
	darkFontColor: 'rgb(249,249,249)',
	lightBgColor: 'rgb(249,249,249)',
	lightFontColor: 'rgb(24,24,24)',
	lightHoverBgColor: 'rgba(255,167,78,0.9)',

	vMargin: 32,
	hMargin: 64,

	transition: 'all 300ms ease-in-out',

	buttonLineHeight: '2em',
	buttonHoverColor: 'rgba(255,167,78,0.9)',
	buttonPadding: 24,

	logoBgColor: 'rgba(255,167,78,1)',
	logoPathColor: 'rgb(255,255,255)',

	headerHeight: 120,
	headerLogoSize: 40,
	headerCompanyFontSize: 24,
	headerMenuFontFamily: 'Montserrat, sans-serif',
	headerMenuFontSize: 14,
};

export type ThemeType = typeof DefaultTheme