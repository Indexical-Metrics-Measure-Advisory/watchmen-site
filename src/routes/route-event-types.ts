import {Router} from './router';

export enum RouteEventTypes {
	ROUTE_CHANGED = 'route-changed',
}

export interface RouteEventBus {
	// theme
	fire(type: RouteEventTypes.ROUTE_CHANGED, route: Router): this;
	on(type: RouteEventTypes.ROUTE_CHANGED, listener: (route: Router) => void): this;
	off(type: RouteEventTypes.ROUTE_CHANGED, listener: (route: Router) => void): this;
}