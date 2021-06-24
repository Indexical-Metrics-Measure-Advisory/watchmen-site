import {ServiceCard, ServiceCardImage, ServiceCardsContainer} from './widgets';
import ServicePipeline from '../../assets/service-pipeline.webp';
import ServiceGovernance from '../../assets/service-governance.webp';
import ServiceContent from '../../assets/service-content.webp';

export const ServiceCards = () => {
	return <ServiceCardsContainer>
		<ServiceCard>
			<ServiceCardImage image={ServicePipeline}/>
		</ServiceCard>
		<ServiceCard>
			<ServiceCardImage image={ServiceGovernance}/>
		</ServiceCard>
		<ServiceCard>
			<ServiceCardImage image={ServiceContent}/>
		</ServiceCard>
	</ServiceCardsContainer>;
};