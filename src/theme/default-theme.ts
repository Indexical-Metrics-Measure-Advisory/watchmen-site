export const DefaultTheme = {
	code: 'default',

	titleFontFamily: 'Poppins, , sans-serif',
	titleFontWeight: 700,

	darkBgColor: 'rgb(24,24,24,0.95)',
	darkFontColor: 'rgb(249,249,249)',

	vMargin: 32,
	hMargin: 64,

	transition: 'all 300ms ease-in-out',

	buttonLineHeight: '2em',
	buttonHoverColor: 'rgb(203,143,140)',

	logoBgColor: 'rgb(138, 54, 56)',
	logoPathColor: 'rgb(255,255,255)',

	headerHeight: 120,
	headerLogoSize: 40,
	headerCompanyFontSize: 24,
	// headerMenuFontFamily: '\'Barlow Condensed\', sans-serif',Montserrat
	headerMenuFontFamily: 'Montserrat, sans-serif',
	headerMenuFontSize: 14,

	biggestSloganFontFamily: 'Oswald',
	biggestSloganFontWeight: 500,
	biggestSloganFontSize: 88
};

export type ThemeType = typeof DefaultTheme