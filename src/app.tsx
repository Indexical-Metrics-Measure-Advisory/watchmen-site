import './app.css';
import {Routes} from './routes';
import {SiteTheme} from './theme';
import {RouteEventBusProvider} from './routes/route-event-bus';

const App = () => {
	return <RouteEventBusProvider>
		<SiteTheme/>
		<Routes/>
	</RouteEventBusProvider>;
};

export default App;
