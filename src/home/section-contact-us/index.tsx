import {
	FieldInput,
	FieldMInput,
	FieldName,
	SectionContactUsContainer,
	SectionContactUsContent,
	SubmitButton
} from './widgets';
import {SectionComment, SectionTitle} from '../widgets';
import {ChangeEvent, useState} from 'react';

interface DataError {
	passName: boolean;
	passEmail: boolean;
	passMessage: boolean;

	passAll: boolean;
}

export const SectionContactUs = () => {
	const [data, setData] = useState({name: '', email: '', subject: '', message: ''});
	const [sent, setSent] = useState(false);
	const [error, setError] = useState<DataError>({passName: true, passEmail: true, passMessage: true, passAll: true});

	const onNameChanged = (event: ChangeEvent<HTMLInputElement>) => {
		const {value} = event.target;
		setData({...data, name: value});
		setError({...error, passName: value.trim().length !== 0});
	};
	const onEmailChanged = (event: ChangeEvent<HTMLInputElement>) => {
		const {value} = event.target;
		setData({...data, email: value});
		setError({...error, passEmail: value.trim().length !== 0});
	};
	const onSubjectChanged = (event: ChangeEvent<HTMLInputElement>) => {
		const {value} = event.target;
		setData({...data, subject: value});
	};
	const onMessageChanged = (event: ChangeEvent<HTMLTextAreaElement>) => {
		const {value} = event.target;
		setData({...data, message: value});
		setError({...error, passMessage: value.trim().length !== 0});
	};
	const onSubmitClicked = async () => {
		// validate
		let nameOK = true;
		let emailOK = true;
		let messageOK = true;
		if (data.name.trim().length === 0) {
			nameOK = false;
		}
		if (data.email.trim().length === 0) {
			emailOK = false;
		}
		if (data.message.trim().length === 0) {
			messageOK = false;
		}
		if (!nameOK || !emailOK || !messageOK) {
			setError({passName: nameOK, passEmail: emailOK, passMessage: messageOK, passAll: false});
			return;
		}

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
						{tag: 'div', text: {tag: 'lark_md', content: `Name: ${data.name.trim()}`}},
						{tag: 'div', text: {tag: 'lark_md', content: `Email: ${data.email.trim()}`}},
						{tag: 'hr'},
						{tag: 'div', text: {tag: 'lark_md', content: `Subject: ${data.subject.trim()}`}},
						{tag: 'hr'},
						{tag: 'div', text: {tag: 'lark_md', content: data.message.trim()}},
						{tag: 'hr'},
						{
							tag: 'action',
							actions: [{
								tag: 'button',
								text: {tag: 'plain_text', content: 'Reply it! You have to, boy!'},
								type: 'primary',
								url: `mailto:${data.email.trim() || ''}`
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
				setError({passName: true, passEmail: true, passMessage: true, passAll: false});
				setTimeout(() => {
					setError({passName: true, passEmail: true, passMessage: true, passAll: true});
				}, 5000);
			}
		} catch {
			setError({passName: true, passEmail: true, passMessage: true, passAll: false});
			setTimeout(() => {
				setError({passName: true, passEmail: true, passMessage: true, passAll: true});
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
			<FieldInput placeholder={error.passName ? 'Enter your name' : 'Name is required'}
			            value={data.name}
			            onChange={onNameChanged}
			            pass={error.passName}/>
			<FieldName required={true}>Email</FieldName>
			<FieldInput placeholder={error.passEmail ? 'Enter your email' : 'Email is required'}
			            value={data.email}
			            onChange={onEmailChanged}
			            pass={error.passEmail}/>
			<FieldName required={false}>Subject</FieldName>
			<FieldInput placeholder="Type the subject"
			            value={data.subject}
			            onChange={onSubjectChanged}
			            pass={true}/>
			<FieldName required={true}>Message</FieldName>
			<FieldMInput placeholder={error.passMessage ? 'Type your message here...' : 'Message is required'}
			             value={data.message}
			             onChange={onMessageChanged}
			             pass={error.passMessage}/>
			<SubmitButton onClick={onSubmitClicked}>
				{sent
					? 'Appreciate you, we will contact you soon.'
					: (!error.passAll ? 'Something went error...' : 'Submit')}
			</SubmitButton>
		</SectionContactUsContent>
	</SectionContactUsContainer>;
};