import {BiggestSlogan, MajorComment, MinorSlogan, SectionMainContainer, SectionMainContent} from './widgets';

export const SectionMain = () => {
	return <SectionMainContainer>
		<SectionMainContent>
			<BiggestSlogan>Data Has<br/> A Better Idea</BiggestSlogan>
			<MinorSlogan>We Get the IT Job Done</MinorSlogan>
			<MajorComment>
				In today’s business climate, every minute counts. Managing your data and services can be time consuming
				and often frustrating. With our winning IT solutions, matryoshka is here to help. We’ll provide your
				organization with all the data analysis and services that you need - so you have the peace of mind to
				focus on the rest of your business.
			</MajorComment>
		</SectionMainContent>
	</SectionMainContainer>;
};