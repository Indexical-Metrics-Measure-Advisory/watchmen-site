import {AboutContainer, AboutImageContainer, SectionComment, SectionMinorTitle, SectionTitle} from './widgets';

export const About = () => {
	return <AboutContainer>
		<SectionTitle>What We Do</SectionTitle>
		<SectionMinorTitle>Professional IT Support</SectionMinorTitle>
		<SectionComment>
			With a comprehensive range of services, Matryoshka Data can guarantee your technology needs are not just
			met, but exceeded. We work closely with our clients to create customized plans that are seamlessly
			integrated, effective and sustainable for many years to come. Reach out today to see how we can help.
		</SectionComment>
		<AboutImageContainer/>
	</AboutContainer>;
};