import {
	ClientCard,
	ClientCardImage,
	ClientsCards,
	ClientsContainer,
	ClientsImageContainer,
	SectionMinorTitle,
	SectionTitle
} from './widgets';
import ClientHexa from '../assets/client-hexa.png';
import ClientItaka from '../assets/client-itaka.png';
import ClientPolar from '../assets/client-polar.png';
import ClientTargo from '../assets/client-targo.png';
import ClientVinli from '../assets/client-volve.png';
import ClientShareBit from '../assets/client-sovix.png';
import ClientHera from '../assets/client-hera.png';
import ClientAxes from '../assets/client-axes.png';

export const Clients = () => {
	return <ClientsContainer>
		<ClientsImageContainer>
			<SectionTitle>AN IMPRESSIVE PORTFOLIO OF CLIENTS</SectionTitle>
			<SectionMinorTitle>Our Solutions - Their Success</SectionMinorTitle>
		</ClientsImageContainer>
		<ClientsCards>
			{[
				[ClientHexa, 'Hexa'],
				[ClientItaka, 'Itaka'],
				[ClientPolar, 'Polar'],
				[ClientTargo, 'Targo'],
				[ClientVinli, 'Volve'],
				[ClientShareBit, 'Sovix'],
				[ClientHera, 'Hera'],
				[ClientAxes, 'Axes']
			].map(([client, name]) => {
				return <ClientCard key={Math.random()}>
					<ClientCardImage image={client} name={name}/>
				</ClientCard>;
			})}
		</ClientsCards>
	</ClientsContainer>;
};