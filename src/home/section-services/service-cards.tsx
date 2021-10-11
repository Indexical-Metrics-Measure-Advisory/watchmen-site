import ServiceContent from '../../assets/service-content.jpeg';
import ServiceGovernance from '../../assets/service-governance.jpeg';
import ServicePipeline from '../../assets/service-pipeline.jpeg';
import {
	ServiceCard,
	ServiceCardButton,
	ServiceCardContent,
	ServiceCardImage,
	ServiceCardsContainer,
	ServiceCardSlogan
} from './widgets';

export const ServiceCards = () => {
	const onLearnMoreClicked = () => {
		const link = document.createElement('a');
		link.href = `${process.env.PUBLIC_URL}/matryoshka-data-en-20211011.pdf`;
		link.target = '_blank';
		link.download = `Matryoshka-Data Watchmen Introduction 2021.pdf`;
		link.click();
	};

	return <ServiceCardsContainer>
		<ServiceCard>
			<ServiceCardImage image={ServicePipeline}/>
			<ServiceCardContent>
				<ServiceCardSlogan>Lake, Pipelines and Streams</ServiceCardSlogan>
				<ServiceCardButton onClick={onLearnMoreClicked}>Learn More</ServiceCardButton>
			</ServiceCardContent>
		</ServiceCard>
		<ServiceCard>
			<ServiceCardImage image={ServiceGovernance}/>
			<ServiceCardContent>
				<ServiceCardSlogan>Consanguinity and Governance</ServiceCardSlogan>
				<ServiceCardButton onClick={onLearnMoreClicked}>Learn More</ServiceCardButton>
			</ServiceCardContent>
		</ServiceCard>
		<ServiceCard>
			<ServiceCardImage image={ServiceContent}/>
			<ServiceCardContent>
				<ServiceCardSlogan>Business Content and Advisory</ServiceCardSlogan>
				<ServiceCardButton onClick={onLearnMoreClicked}>Learn More</ServiceCardButton>
			</ServiceCardContent>
		</ServiceCard>
	</ServiceCardsContainer>;
};