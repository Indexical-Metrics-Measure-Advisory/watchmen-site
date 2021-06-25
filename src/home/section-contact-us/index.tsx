import {
	FieldInput,
	FieldMInput,
	FieldName,
	SectionContactUsContainer,
	SectionContactUsContent,
	SubmitButton
} from './widgets';
import {SectionComment, SectionTitle} from '../widgets';
import {useRef, useState} from 'react';

export const SectionContactUs = () => {
	const nameRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const subjectRef = useRef<HTMLInputElement>(null);
	const messageRef = useRef<HTMLTextAreaElement>(null);
	const [sent, setSent] = useState(false);
	const [error, setError] = useState(false);

	const onSubmitClicked = async () => {
		try {
			const url = 'https://open.feishu.cn/open-apis/bot/v2/hook/f94b26a3-6cf2-4110-a70d-d79577a79271';
			const headers: HeadersInit = {
				'Content-Type': 'application/json'
			};

			const body = JSON.stringify({
				msg_type: 'interactive',
				card: {
					config: {wide_screen_mode: true},
					header: {
						title: {tag: 'plain_text', content: '有消息从Matryoshka官网来了!'}
					},
					elements: [
						{tag: 'hr'},
						{tag: 'div', text: {tag: 'lark_md', content: `Name: ${nameRef.current?.value.trim()}`}},
						{tag: 'div', text: {tag: 'lark_md', content: `Email: ${emailRef.current?.value.trim()}`}},
						{tag: 'hr'},
						{tag: 'div', text: {tag: 'lark_md', content: `Subject: ${subjectRef.current?.value.trim()}`}},
						{tag: 'hr'},
						{tag: 'div', text: {tag: 'lark_md', content: messageRef.current?.value.trim()}},
						{tag: 'hr'},
						{
							tag: 'action',
							actions: [{
								tag: 'button',
								text: {tag: 'plain_text', content: 'Reply it! you have to, boy!'},
								type: 'primary',
								url: `mailto:${emailRef.current?.value.trim() || ''}`
							}]
						}
					]
				}
			});

			const response = await fetch(url, {method: 'POST', headers, body});

			const {ok} = response;

			if (ok) {
				const data = await response.json();
				// eslint-disable-next-line
				if (data.StatusCode == '0') {
					setSent(true);
					setTimeout(() => {
						setSent(false);
					}, 10000);
				}
			} else {
				setError(true);
				setTimeout(() => {
					setError(false);
				}, 5000);
			}
		} catch {
			setError(true);
			setTimeout(() => {
				setError(false);
			}, 5000);
		}
	};

	return <SectionContactUsContainer>
		<SectionContactUsContent>
			<SectionTitle>Contact Us</SectionTitle>
			<SectionComment>
				We always want to hear from you at matryoshka. Contact us today to find the customized IT solutions that
				best fit your needs.
			</SectionComment>
			<SectionComment>
				Haikou, Hainan, China
			</SectionComment>
			<SectionComment>
				<a href="mailto:market@matrdata.com" target="_blank" rel="noreferrer">market@matrdata.com</a>
			</SectionComment>
		</SectionContactUsContent>
		<SectionContactUsContent>
			<FieldName required={true}>Name</FieldName>
			<FieldInput placeholder="Enter your name" ref={nameRef}/>
			<FieldName required={true}>Email</FieldName>
			<FieldInput placeholder="Enter your email" ref={emailRef}/>
			<FieldName required={false}>Subject</FieldName>
			<FieldInput placeholder="Type the subject" ref={subjectRef}/>
			<FieldName required={true}>Message</FieldName>
			<FieldMInput placeholder="Type your message here..." ref={messageRef}/>
			<SubmitButton onClick={onSubmitClicked}>
				{sent
					? 'Appreciate you, we will contact you soon.'
					: (error ? 'Something went error...' : 'Submit')}
			</SubmitButton>
		</SectionContactUsContent>
	</SectionContactUsContainer>;
};