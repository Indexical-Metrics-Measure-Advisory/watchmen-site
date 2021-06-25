import {Suspense} from 'react';
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';
import {Router} from './router';
import {Header} from '../header';
import {Home} from '../home';
import {Footer} from '../footer';
import {About} from '../about';
import {Services} from '../services';

export const Routes = () => {
	return <Suspense fallback={<div/>}>
		<HashRouter>
			<Header/>
			<Switch>
				<Route path={Router.HOME}><Home/></Route>
				<Route path={Router.SERVICES}><Services/></Route>
				{/*<Route path={Router.GET_A_QUOTE}></Route>*/}
				{/*<Route path={Router.PLAN_AND_PRICING}></Route>*/}
				{/*<Route path={Router.CLIENTS}></Route>*/}
				<Route path={Router.ABOUT}><About/></Route>
				<Route path="*">
					<Redirect to={Router.HOME}/>
				</Route>
			</Switch>
		</HashRouter>
		<Footer/>
	</Suspense>;
};