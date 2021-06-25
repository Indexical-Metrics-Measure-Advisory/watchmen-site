import {AboutContainer, AboutImageContainer, SectionComment, SectionMinorTitle, SectionTitle} from './widgets';

export const About = () => {
	return <AboutContainer>
		<SectionTitle>WHAT WE DO</SectionTitle>
		<SectionMinorTitle>More Than Just IT Support</SectionMinorTitle>
		<SectionComment>
			Matryoshka data provides organizations of all sizes with the best, most trustworthy IT solutions. In the
			ever-evolving technology market, we believe that companies need reliable allies who can guide them through
			the challenges that accompany technological growth. We provide cloud, security and mobility services - to
			name a few. Contact us today to find out more.
		</SectionComment>
		<AboutImageContainer/>
	</AboutContainer>;
};