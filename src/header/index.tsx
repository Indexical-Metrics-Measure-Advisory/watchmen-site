import {HeaderCompanyName, HeaderContainer, Menu, Menus} from './widget';
import {Logo} from '../widgets/logo';
import {useEffect, useState} from 'react';
import {Router} from '../routes/router';
import {useHistory, useLocation} from 'react-router-dom';

export const Header = () => {
	const history = useHistory();
	const location = useLocation();
	const [route, setRoute] = useState<Router>(Router.HOME);
	//
	useEffect(() => {
		setRoute(location.pathname as Router);
	}, [location]);

	const onMenuClicked = (route: Router) => () => {
		history.push(route);
	};

	return <HeaderContainer>
		<Logo/>
		<HeaderCompanyName>Matryoshka Data</HeaderCompanyName>
		<div/>
		<Menus>
			<Menu active={route === Router.HOME} onClick={onMenuClicked(Router.HOME)}>Home</Menu>
			<Menu active={route === Router.SERVICES}>Services</Menu>
			<Menu active={route === Router.GET_A_QUOTE}>Get A Quote</Menu>
			<Menu active={route === Router.PLAN_AND_PRICING}>Plan & Pricing</Menu>
			<Menu active={route === Router.CLIENTS}>Clients</Menu>
			<Menu active={route === Router.ABOUT} onClick={onMenuClicked(Router.ABOUT)}>About</Menu>
		</Menus>
	</HeaderContainer>;
};