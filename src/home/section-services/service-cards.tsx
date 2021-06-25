import {
	ServiceCard,
	ServiceCardButton,
	ServiceCardContent,
	ServiceCardImage,
	ServiceCardsContainer,
	ServiceCardSlogan
} from './widgets';
import ServicePipeline from '../../assets/service-pipeline.jpeg';
import ServiceGovernance from '../../assets/service-governance.jpeg';
import ServiceContent from '../../assets/service-content.jpeg';

export const ServiceCards = () => {
	return <ServiceCardsContainer>
		<ServiceCard>
			<ServiceCardImage image={ServicePipeline}/>
			<ServiceCardContent>
				<ServiceCardSlogan>Lake, Pipelines and Streams</ServiceCardSlogan>
				<ServiceCardButton>Learn More</ServiceCardButton>
			</ServiceCardContent>
		</ServiceCard>
		<ServiceCard>
			<ServiceCardImage image={ServiceGovernance}/>
			<ServiceCardContent>
				<ServiceCardSlogan>Consanguinity and Governance</ServiceCardSlogan>
				<ServiceCardButton>Learn More</ServiceCardButton>
			</ServiceCardContent>
		</ServiceCard>
		<ServiceCard>
			<ServiceCardImage image={ServiceContent}/>
			<ServiceCardContent>
				<ServiceCardSlogan>Business Content and Advisory</ServiceCardSlogan>
				<ServiceCardButton>Learn More</ServiceCardButton>
			</ServiceCardContent>
		</ServiceCard>
	</ServiceCardsContainer>;
};