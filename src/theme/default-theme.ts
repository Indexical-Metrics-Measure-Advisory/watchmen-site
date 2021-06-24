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

	sectionVMargin: 108,
	sectionHMargin: 64,

	sectionTitleFontFamily: 'Oswald, sans-serif',
	sectionTitleFontWeight: 500,
	sectionTitleFontSize: 50,
	sectionTitleLineHeight: '1.5em',

	sectionMinorTitleFontFamily: 'Raleway, sans-serif',
	sectionMinorTitleFontWeight: 400,
	sectionMinorTitleFontSize: 22,
	sectionMinorTitleLineHeight: '1.5em',

	sectionCommentFontFamily: 'Raleway, sans-serif',
	sectionCommentFontWeight: 400,
	sectionCommentFontSize: 18,
	sectionCommentLineHeight: '1.5em',

	biggestSloganFontFamily: 'Oswald, sans-serif',
	biggestSloganFontWeight: 500,
	biggestSloganFontSize: 88,

	minorSloganFontFamily: 'Oswald, sans-serif',
	minorSloganFontWeight: 500,
	minorSloganFontSize: 22,

	majorCommentFontFamily: 'Poppins, sans-serif',
	majorCommentFontWeight: 400,
	majorCommentFontSize: 18,
	majorCommentLineHeight: '1.5em',
};

export type ThemeType = typeof DefaultTheme