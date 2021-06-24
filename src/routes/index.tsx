import {Suspense} from 'react';
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';
import {Router} from './router';
import {Header} from '../header';
import {Home} from '../home';

export const Routes = () => {
	return <Suspense fallback={<div/>}>
		<Header/>
		<HashRouter>
			<Switch>
				<Route path={Router.HOME}><Home/></Route>
				{/*<Route path={Router.SERVICES}></Route>*/}
				{/*<Route path={Router.GET_A_QUOTE}></Route>*/}
				{/*<Route path={Router.PLAN_AND_PRICING}></Route>*/}
				{/*<Route path={Router.CLIENTS}></Route>*/}
				{/*<Route path={Router.ABOUT}></Route>*/}
				<Route path="*">
					<Redirect to={Router.HOME}/>
				</Route>
			</Switch>
		</HashRouter>
	</Suspense>;
};