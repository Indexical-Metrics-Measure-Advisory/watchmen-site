import styled from 'styled-components';
import color from 'color';
import {getTheme} from '../theme';
import GetAQuoteImage from '../assets/get-a-quote.jpeg';

export const GetAQuoteContainer = styled.div.attrs({'data-widget': 'get-a-quote'})`
	display: flex;
	position: relative;
	flex-direction: column;
	background-color: var(--dark-bg-color);
	color: var(--dark-font-color)
`;
export const GetAQuoteImageContainer = styled.div.attrs({'data-widget': 'get-a-quote-image'})`
	position: relative;
	width: 100%;
	height: 560px;
	background-image: url(${GetAQuoteImage});
	background-position: center;
	background-size: cover;
`;
export const SectionTitle = styled.div.attrs({'data-widget': 'section-title'})`
	position: relative;
	font-family: Oswald, sans-serif;
	font-weight: 500;
	font-size: 50px;
	line-height: 1.5em;
	text-transform: uppercase;
	margin: 64px auto 32px;
`;
export const SectionComment = styled.div.attrs({'data-widget': 'section-comment'})`
	position: relative;
	font-family: Raleway, sans-serif;
	font-weight: 400;
	font-size: 18px;
	line-height: 1.5em;
	margin: 0 auto;
	text-align: center;
	width: 50%;
`;
export const GetAQuoteForm = styled.div.attrs({'data-widget': 'get-a-quote-form'})`
	display: grid;
	grid-template-columns: 1fr;
	grid-column-gap: var(--h-margin);
	position: relative;
	min-width: 50%;
	padding: 32px 64px 64px;
	margin: 0 auto;
	color: var(--dark-font-color);
`;
export const FieldName = styled.div.attrs({'data-widget': 'form-field-name'})<{ required: boolean }>`
	position: relative;
	font-family: Raleway, sans-serif;
	font-weight: 500;
	font-size: 18px;
	line-height: 1.5em;
	margin-bottom: 4px;
	&:first-child {
		padding-top: 12px;
	}
	&:after {
		content: '*';
		display: ${({required}) => required ? 'inline-block' : 'none'};
		margin-left: 4px;
	}
`;
export const FieldInput = styled.input.attrs<{ pass: boolean }>(({pass}) => {
	return {
		'data-widget': 'form-field-input',
		style: {
			backgroundColor: pass ? (void 0) : color(getTheme().dangerColor).alpha(0.1),
			borderColor: pass ? (void 0) : 'var(--danger-color)'
		}
	};
})<{ pass: boolean }>`
	position: relative;
	font-family: Raleway, sans-serif;
	color: var(--dark-font-color);
	background-color: transparent;
	height: 48px;
	padding: 0 12px;
	margin-bottom: 20px;
	appearance: none;
	outline: none;
	border: 1px solid var(--dark-font-color);
	transition: all 300ms ease-in-out;
	&::placeholder {
		color: var(--dark-font-color);
	}
`;
export const FieldMInput = styled.textarea.attrs<{ pass: boolean }>(({pass}) => {
	return {
		'data-widget': 'form-field-minput',
		style: {
			backgroundColor: pass ? (void 0) : color(getTheme().dangerColor).alpha(0.1),
			borderColor: pass ? (void 0) : 'var(--danger-color)'
		}
	};
})<{ pass: boolean }>`
	position: relative;
	font-family: Raleway, sans-serif;
	color: var(--dark-font-color);
	background-color: transparent;
	height: 192px;
	padding: 12px;
	margin-bottom: 20px;
	appearance: none;
	outline: none;
	border: 1px solid var(--dark-font-color);
	resize: none;
	transition: all 300ms ease-in-out;
	&::placeholder {
		color: var(--dark-font-color);
	}
`;
export const SubmitButton = styled.button.attrs({'data-widget': 'form-submit-button'})`
	display: flex;
	position: relative;
	align-items: center;
	justify-content: center;
	font-family: Raleway, sans-serif;
	font-size: 18px;
	font-weight: 500;
	color: var(--dark-bg-color);
	background-color: var(--dark-font-color);
	height: var(--input-height);
	padding: 12px;
	appearance: none;
	cursor: pointer;
	transition: background-color 300ms ease-in-out;
	&:hover {
		background-color: var(--button-hover-color);
	}
`;
