import {HeaderCompanyName, HeaderContainer, Menu, Menus} from './widget';
import {Logo} from '../widgets/logo';
import {useEffect, useState} from 'react';
import {Router} from '../routes/router';
import {useRouteEventBus} from '../routes/route-event-bus';
import {RouteEventTypes} from '../routes/route-event-types';

export const Header = () => {
	const [route, setRoute] = useState<Router>(Router.HOME);

	const {on, off} = useRouteEventBus();
	useEffect(() => {
		const onRouteChanged = (route: Router) => {
			setRoute(route);
		};
		on(RouteEventTypes.ROUTE_CHANGED, onRouteChanged);
		return () => {
			off(RouteEventTypes.ROUTE_CHANGED, onRouteChanged);
		};
	}, [on, off]);

	return <HeaderContainer>
		<Logo/>
		<HeaderCompanyName>Matryoshka Data</HeaderCompanyName>
		<div/>
		<Menus>
			<Menu active={route === Router.HOME}>Home</Menu>
			<Menu active={route === Router.SERVICES}>Services</Menu>
			<Menu active={route === Router.GET_A_QUOTE}>Get A Quote</Menu>
			<Menu active={route === Router.PLAN_AND_PRICING}>Plan & Pricing</Menu>
			<Menu active={route === Router.CLIENTS}>Clients</Menu>
			<Menu active={route === Router.ABOUT}>About</Menu>
		</Menus>
	</HeaderContainer>;
};