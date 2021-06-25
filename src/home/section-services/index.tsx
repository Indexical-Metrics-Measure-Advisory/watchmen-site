import {SectionServicesContainer} from './widgets';
import {SectionComment, SectionMinorTitle, SectionTitle} from '../widgets';
import {ServiceCards} from './service-cards';

export const SectionServices = () => {
	return <SectionServicesContainer>
		<SectionTitle>Our Comprehensive Services</SectionTitle>
		<SectionMinorTitle>Intelligent IT Solutions</SectionMinorTitle>
		<SectionComment>
			Matryoshka Data provides a variety of innovative and comprehensive IT solutions. We deliver quality services
			in the most efficient way, and our experts will work collaboratively with you to customize our offerings to
			your particular needs. Book a meeting with one of our consultants to hear more about how we can assist your
			operation.
		</SectionComment>
		<ServiceCards/>
	</SectionServicesContainer>;
};