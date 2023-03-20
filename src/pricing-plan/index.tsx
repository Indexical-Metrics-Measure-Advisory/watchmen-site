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
					A demo measures & metrics set on insurance industry, including dozens indicators and related topics,
					pipelines, spaces and subjects.
				</ExperimentDescription>
				<ExperimentDownloadLink>
					<span onClick={onDownload1Clicked}>Download</span>
				</ExperimentDownloadLink>
			</ExperimentFeature>
			<ExperimentWarning>
				Please note all experiment contents are available for non-commercial purposes only.<br/>
				For commercial purposes, please send mail to <a href="mailto:market@mail.matrdata.com" target="_blank"
				                                       rel="noreferrer">market@matrdata.com</a> to get more details.
			</ExperimentWarning>
		</ExperimentFeatures>
	</PricingAndPlanContainer>;
};