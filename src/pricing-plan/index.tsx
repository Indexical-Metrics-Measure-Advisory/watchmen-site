import {
	PlanButton,
	PlanCard,
	PlanCards,
	PlanComment,
	PlanName,
	PlanPrice,
	PlanSeparator,
	PlanSlogan,
	PlanTitle,
	PricingAndPlanContainer,
	SectionTitle
} from './widgets';
import {useHistory} from 'react-router-dom';
import {Router} from '../routes/router';

export const PricingAndPlan = () => {
	const history = useHistory();
	const onFreeClicked = () => {
		window.open('https://imma-watchmen.com', '_blank');
	};
	const onEnterpriseClicked = () => {
		history.push(Router.GET_A_QUOTE);
	};
	return <PricingAndPlanContainer>
		<SectionTitle>Choose your pricing plan</SectionTitle>
		<PlanCards>
			<PlanCard>
				<PlanTitle>Free</PlanTitle>
				<PlanPrice>0</PlanPrice>
				<PlanSlogan>The basics for individuals and organizations</PlanSlogan>
				<PlanName>Free Plan</PlanName>
				<PlanButton onClick={onFreeClicked}>Get Started</PlanButton>
				<PlanSeparator/>
				<PlanComment>Ready for self-hosting</PlanComment>
				<PlanComment>Built-in Oracle, MySQL & MongoDB supports</PlanComment>
			</PlanCard>
			<PlanCard>
				<PlanTitle>Enterprise</PlanTitle>
				<PlanPrice>1 +</PlanPrice>
				<PlanSlogan>Security, compliance, and flexible deployment</PlanSlogan>
				<PlanName>Enterprise Edition</PlanName>
				<PlanButton onClick={onEnterpriseClicked}>Get A Quote</PlanButton>
				<PlanSeparator/>
				<PlanComment>Everything included in Free, plus...</PlanComment>
				<PlanComment>Our premium support</PlanComment>
			</PlanCard>
		</PlanCards>
	</PricingAndPlanContainer>;
};