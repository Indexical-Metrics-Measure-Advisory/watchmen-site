import {SectionMain} from './section-main';
import {SectionServices} from './section-services';
import {SectionClients} from './section-clients';
import {SectionContactUs} from './section-contact-us';
import {HomeContainer} from './widgets';

export const Home = () => {
	return <HomeContainer>
		<SectionMain/>
		<SectionServices/>
		<SectionClients/>
		<SectionContactUs/>
	</HomeContainer>;
};