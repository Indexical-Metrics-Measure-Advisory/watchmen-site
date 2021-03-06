import styled from 'styled-components';
import HomeContactUsImage from '../../assets/contact-us.jpeg';
import color from 'color';
import {atMobile, getTheme} from '../../theme';

export const SectionContactUsContainer = styled.div.attrs({'data-widget': 'home-section-contact-us'})`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-column-gap: var(--h-margin);
	position: relative;
	width: 100%;
	height: 800px;
	padding: 96px 64px 64px;
	color: var(--dark-font-color);
	&:before {
		content: '';
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url(${HomeContactUsImage});
		background-position: center;
		background-size: cover;
		filter: saturate(1.2) hue-rotate(315deg) opacity(0.95);
		z-index: -1;
	}
	
	${atMobile} {
		grid-template-columns: 1fr;
		padding: 48px 32px 32px;
		height: auto;
	}
`;
export const SectionContactUsContent = styled.div.attrs({'data-widget': 'home-section-contact-us-content'})`
	display: flex;
	position: relative;
	flex-direction: column;
	> div[data-widget=section-title] {
		padding-bottom: 0;
		margin: 0 auto;
	}
	> div[data-widget=section-comment] {
		margin: 32px auto 0;
		max-width: 50%;
		&:nth-child(3),
		&:nth-child(4) {
			font-family: Poppins, sans-serif;
			font-weight: 500;
		}
	}
	
	${atMobile} {
		margin-bottom: 32px;
		> div[data-widget=section-title] {
			margin: 0;
		}
		> div[data-widget=section-comment] {
			margin: 32px 0 0;
			max-width: 100%;
			text-align: left;
		}
	}
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
	
	${atMobile} {
		font-size: 14px;
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
	width: 60%;
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
	
	${atMobile} {
		width: 100%;
		font-size: 14px;
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
	width: 60%;
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
	${atMobile} {
		width: 100%;
		font-size: 14px;
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
	width: 60%;
	height: var(--input-height);
	padding: 12px;
	appearance: none;
	cursor: pointer;
	transition: background-color 300ms ease-in-out;
	&:hover {
		background-color: var(--button-hover-color);
	}
`;
