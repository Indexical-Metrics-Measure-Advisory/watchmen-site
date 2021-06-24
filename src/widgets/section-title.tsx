import styled from 'styled-components';

export const SectionTitle = styled.div.attrs({'data-widget': 'section-title'})`
	position: relative;
	font-family: var(--section-title-font-family);
	font-weight: var(--section-title-font-weight);
	font-size: var(--section-title-font-size);
	line-height: var(--section-title-line-height);
	text-transform: uppercase;
	margin: auto;
	padding-bottom: calc(var(--v-margin) * 2);
`;
export const SectionMinorTitle = styled.div.attrs({'data-widget': 'section-minor-title'})`
	position: relative;
	font-family: var(--section-minor-title-font-family);
	font-weight: var(--section-minor-title-font-weight);
	font-size: var(--section-minor-title-font-size);
	line-height: var(--section-minor-title-line-height);
	margin: auto;
	padding-bottom: var(--v-margin);
`;
export const SectionComment = styled.div.attrs({'data-widget': 'section-comment'})`
	position: relative;
	font-family: var(--section-comment-font-family);
	font-weight: var(--section-comment-font-weight);
	font-size: var(--section-comment-font-size);
	line-height: var(--section-comment-line-height);
	margin: auto;
	max-width: 65%;
	text-align: center;
`;