import {SectionClientsContainer} from './widgets';
import {SectionMinorTitle, SectionTitle} from '../../widgets/section-title';
import {ClientCards} from './client-cards';

export const SectionClients = () => {
	return <SectionClientsContainer>
		<SectionTitle>Meet Our Clients</SectionTitle>
		<SectionMinorTitle>Success-Driven Partnerships</SectionMinorTitle>
		<ClientCards/>
	</SectionClientsContainer>;
};