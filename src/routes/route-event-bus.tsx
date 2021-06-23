import EventEmitter from 'events';
import React, {useContext, useState} from 'react';
import {RouteEventBus} from './route-event-types';

const Context = React.createContext<RouteEventBus>({} as RouteEventBus);
Context.displayName = 'RouteEventBus';

export const RouteEventBusProvider = (props: { children?: ((props: any) => React.ReactNode) | React.ReactNode }) => {
	const {children} = props;

	const [emitter] = useState(new EventEmitter().setMaxListeners(999999));
	const [bus] = useState<RouteEventBus>({
		fire: (type: string, ...data: Array<any>): RouteEventBus => {
			emitter.emit(type, ...data);
			return bus;
		},
		on: (type: string, listener: (...data: Array<any>) => void): RouteEventBus => {
			if (emitter.rawListeners(type).includes(listener)) {
				console.error(`Listener on [${type}] was added into route event bus, check it.`);
			}
			emitter.on(type, listener);
			return bus;
		},
		off: (type: string, listener: (...data: Array<any>) => void): RouteEventBus => {
			emitter.off(type, listener);
			return bus;
		}
	});

	return <Context.Provider value={bus}>
		{children}
	</Context.Provider>;
};

export const useRouteEventBus = () => useContext(Context);
