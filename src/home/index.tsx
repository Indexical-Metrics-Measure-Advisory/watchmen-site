import {SectionMain} from './section-main';
import {SectionServices} from './section-services';
import {SectionClients} from './section-clients';
import {SectionContactUs} from './section-contact-us';

export const Home = () => {
	return <>
		<SectionMain/>
		<SectionServices/>
		<SectionClients/>
		<SectionContactUs/>
	</>;
};