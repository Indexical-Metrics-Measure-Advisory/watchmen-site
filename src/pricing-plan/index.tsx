import React from 'react';
import {useHistory} from 'react-router-dom';
import {Router} from '../routes/router';
import {
	ExperimentDescription,
	ExperimentDownloadLink,
	ExperimentFeature,
	ExperimentFeatures,
	ExperimentTitle,
	ExperimentWarning,
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
	SecondarySectionTitle,
	SectionTitle
} from './widgets';

export const PricingAndPlan = () => {
	const history = useHistory();
	const onFreeClicked = () => {
		window.open('https://imma-watchmen.com', '_blank');
	};
	const onEnterpriseClicked = () => {
		history.push(Router.GET_A_QUOTE);
	};
	const onDownload1Clicked = () => {
		const link = document.createElement('a');
		link.href = `${process.env.PUBLIC_URL}/metrics_asset.zip`;
		link.target = '_blank';
		link.download = `Insurance Measure & Metrics Set 2023.zip`;
		link.click();
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
		<SecondarySectionTitle>Experiment Features</SecondarySectionTitle>
		<ExperimentFeatures>
			<ExperimentFeature>
				<ExperimentTitle>Insurance Measure & Metrics Set</ExperimentTitle>
				<ExperimentDescription>
					Insurance metrics store that contains various key performance indicators (KPIs) and metrics related
					to insurance business operations. It provides a centralized platform for insurers to store, analyze
					and visualize the data that is collected across various systems and processes within their
					organization.<br/>
					The metrics can be related to different areas of insurance, including underwriting, claims
					management, policy administration, financial reporting, and more.<br/>
					By using insurance metrics stores, insurers can gain valuable insights into their business
					performance, identify trends and patterns, and make data-driven decisions. The metrics store can
					also be integrated with other analytical tools to further enhance data analysis and reporting
					capabilities.<br/>
					Overall, the insurance metrics store is an essential component of modern insurance operations,
					enabling insurers to optimize their performance and improve their bottom line.
				</ExperimentDescription>
				<ExperimentDownloadLink>
					<span onClick={onDownload1Clicked}>Download</span>
				</ExperimentDownloadLink>
			</ExperimentFeature>
			<ExperimentWarning>
				Please note all experiment contents are available for non-commercial purposes only.<br/>
				For commercial purposes, please contact us on <a href="mailto:market@mail.matrdata.com" target="_blank"
				                                                 rel="noreferrer">market@matrdata.com</a>.
			</ExperimentWarning>
		</ExperimentFeatures>
	</PricingAndPlanContainer>;
};