import {Suspense} from 'react';
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';
import {Router} from './router';
import {Header} from '../header';
import {Home} from '../home';
import {Footer} from '../footer';
import {About} from '../about';
import {Services} from '../services';
import {GetAQuote} from '../get-a-quote';
import {Clients} from '../clients';
import {PricingAndPlan} from '../pricing-plan';

export const Routes = () => {
	return <Suspense fallback={<div/>}>
		<HashRouter>
			<Header/>
			<Switch>
				<Route path={Router.HOME}><Home/></Route>
				<Route path={Router.SERVICES}><Services/></Route>
				<Route path={Router.GET_A_QUOTE}><GetAQuote/></Route>
				<Route path={Router.PLAN_AND_PRICING}><PricingAndPlan/></Route>
				<Route path={Router.CLIENTS}><Clients/></Route>
				<Route path={Router.ABOUT}><About/></Route>
				<Route path="*">
					<Redirect to={Router.HOME}/>
				</Route>
			</Switch>
			<Footer/>
		</HashRouter>
	</Suspense>;
};