import {
	SectionComment,
	SectionMinorTitle,
	SectionTitle,
	ServiceCard,
	ServiceCardButton,
	ServiceCardComment,
	ServiceCardContent,
	ServiceCardImage,
	ServiceCardMinorSlogan,
	ServiceCardSlogan,
	ServicesContainer
} from './widgets';
import ServicePipeline from '../assets/big-service-pipeline.jpeg';
import ServiceGovernance from '../assets/big-service-governance.jpeg';
import ServiceContent from '../assets/big-service-content.jpeg';

export const Services = () => {
	return <ServicesContainer>
		<SectionTitle>What We Offer</SectionTitle>
		<SectionMinorTitle>More Than Just IT Support</SectionMinorTitle>
		<SectionComment>
			Matryoshka data provides organizations of all sizes with the best, most trustworthy IT solutions. In the
			ever-evolving technology market, we believe that companies need reliable allies who can guide them through
			the challenges that accompany technological growth. We provide cloud, security and mobility services - to
			name a few. Contact us today to find out more.
		</SectionComment>
		<ServiceCard>
			<ServiceCardContent>
				<ServiceCardSlogan>Lake, Pipelines and Streams</ServiceCardSlogan>
				<ServiceCardMinorSlogan>What We Do</ServiceCardMinorSlogan>
				<ServiceCardComment>
					Enabling your workforce with top-notch technologies isn’t just important, but imperative for
					business success. This customizable solution allows your team to work seamlessly and collaboratively
					in a protected space. No matter what IT services you need, Matryoshka Data will be there to support you
					every step of the way.
				</ServiceCardComment>
				<ServiceCardButton>Learn More</ServiceCardButton>
			</ServiceCardContent>
			<ServiceCardImage image={ServicePipeline}/>
		</ServiceCard>
		<ServiceCard>
			<ServiceCardImage image={ServiceGovernance}/>
			<ServiceCardContent>
				<ServiceCardSlogan>Consanguinity and Governance</ServiceCardSlogan>
				<ServiceCardMinorSlogan>How We Guarantee</ServiceCardMinorSlogan>
				<ServiceCardComment>
					Our IT solutions carve the path for organizations to modernize infrastructure and optimize workflow
					like never before. This service provides a wide variety of technological capabilities to boost
					efficiencies, enhance security and allow infinite scalability for future growth. With this resource
					and our expertise, we’ll help maximize your organization’s productivity.
				</ServiceCardComment>
				<ServiceCardButton>Learn More</ServiceCardButton>
			</ServiceCardContent>
		</ServiceCard>
		<ServiceCard>
			<ServiceCardContent>
				<ServiceCardSlogan>Business Content and Advisory</ServiceCardSlogan>
				<ServiceCardMinorSlogan>Beyond Technology</ServiceCardMinorSlogan>
				<ServiceCardComment>
					In today’s hyperconnected world, organizations are challenged in more ways than ever to stay ahead
					of the curve. This comprehensive service is designed to fit your unique needs without disrupting
					productivity or workflow. With our end-to-end solutions, Matryoshka Data is sure to help your
					organization succeed.
				</ServiceCardComment>
				<ServiceCardButton>Learn More</ServiceCardButton>
			</ServiceCardContent>
			<ServiceCardImage image={ServiceContent}/>
		</ServiceCard>
	</ServicesContainer>;
};