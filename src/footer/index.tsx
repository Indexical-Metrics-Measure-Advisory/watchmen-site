import React, {useEffect, useState} from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import {Router} from '../routes/router';
import {FooterContainer, Menu, Menus} from './widgets';

export const Footer = () => {
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

	return <FooterContainer>
		<div>©2021 by Matryoshka Data.</div>
		<Menus>
			<Menu active={route === Router.HOME} onClick={onMenuClicked(Router.HOME)}>Home</Menu>
			<Menu active={route === Router.SERVICES} onClick={onMenuClicked(Router.SERVICES)}>Services</Menu>
			{/*<Menu active={route === Router.CLIENTS} onClick={onMenuClicked(Router.CLIENTS)}>Clients</Menu>*/}
			<Menu active={route === Router.PLAN_AND_PRICING}
			      onClick={onMenuClicked(Router.PLAN_AND_PRICING)}>
				Plans & Pricing
			</Menu>
			<Menu active={route === Router.GET_A_QUOTE} onClick={onMenuClicked(Router.GET_A_QUOTE)}>Get A Quote</Menu>
			<Menu active={route === Router.ABOUT} onClick={onMenuClicked(Router.ABOUT)}>About</Menu>
		</Menus>
	</FooterContainer>;
};