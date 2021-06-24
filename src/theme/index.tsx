import {createGlobalStyle, ThemeProvider} from 'styled-components';
import {DefaultTheme, ThemeType} from './default-theme';
import 'normalize.css';

const shouldIgnorePixel = (key: string) => {
	return key.includes('FontWeight');
};
const convertToCssVariableName = (key: string) => {
	return '--' + key.split('').map(ch => (ch >= 'A' && ch <= 'Z') ? `-${ch.toLowerCase()}` : ch).join('');
};
const writeThemeProperty = (theme: ThemeType) => {
	return Object.keys(theme).map(key => {
		const name = convertToCssVariableName(key);
		const value = (theme as any)[key];
		if (typeof value === 'number') {
			if (shouldIgnorePixel(key)) {
				return `${name}: ${value};`;
			} else {
				return `${name}: ${value}px;`;
			}
		} else {
			return `${name}: ${value};`;
		}
	});
};

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
	*, *:before, *:after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html {
		${({theme}) => writeThemeProperty(theme)}
		width: 100%;
	}

	body {
		margin: 0;
		font-family: var(--font-family);
		font-size: var(--font-size);
		color: var(--font-color);
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		position: relative;
		background-color: var(--bg-color);
		overflow-x: hidden;
		width: 100%;
		min-width: 980px;
		//font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
	}

	a,
	a:visited {
		color: var(--font-color);
	}
	
	button {
		border: 0;
	}

	input::placeholder {
		color: var(--placeholder-color);
	}

	code {
		font-family: var(--code-font-family);
	}
`;

export const SiteTheme = () => {
	return <ThemeProvider theme={DefaultTheme}>
		<GlobalStyle/>
	</ThemeProvider>;
};