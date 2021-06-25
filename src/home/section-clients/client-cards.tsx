import {ClientCard, ClientCardContent, ClientCardImage, ClientCardName, ClientCardsContainer} from './widgets';
import ClientHexa from '../../assets/client-hexa.png';
import ClientItaka from '../../assets/client-itaka.png';
import ClientPolar from '../../assets/client-polar.png';
import ClientTargo from '../../assets/client-targo.png';
import {SectionComment} from '../widgets';

export const ClientCards = () => {
	return <ClientCardsContainer>
		<ClientCard>
			<ClientCardImage image={ClientHexa}/>
			<ClientCardContent>
				<ClientCardName>Hexa</ClientCardName>
				<SectionComment>
					"Matryoshka transformed our company by taking us mobile and implementing cloud solutions, which gave
					our employees the flexibility they needed to work most efficiently."
				</SectionComment>
			</ClientCardContent>
		</ClientCard>
		<ClientCard>
			<ClientCardImage image={ClientItaka}/>
			<ClientCardContent>
				<ClientCardName>Itaka</ClientCardName>
				<SectionComment>
					"Our company has confidently chosen matryoshka for our IT needs over many years. They always make
					sure we’re ahead of the technology curve, and are also very enjoyable to work with."
				</SectionComment>
			</ClientCardContent>
		</ClientCard>
		<ClientCard>
			<ClientCardImage image={ClientPolar}/>
			<ClientCardContent>
				<ClientCardName>Polar</ClientCardName>
				<SectionComment>
					"By really listening to our technology needs, matryoshka provided solutions that fit our unique
					business model. Their ongoing support and services have been instrumental to our company’s growth."
				</SectionComment>
			</ClientCardContent>
		</ClientCard>
		<ClientCard>
			<ClientCardImage image={ClientTargo}/>
			<ClientCardContent>
				<ClientCardName>Targo</ClientCardName>
				<SectionComment>
					Best technology, helped us!
				</SectionComment>
			</ClientCardContent>
		</ClientCard>
	</ClientCardsContainer>;
};