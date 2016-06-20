import React from 'react'
import {render} from 'react-dom'
import {Router,browserHistory,hashHistory} from 'react-router'
import routerConfig from './routerConfig'
import store from './store'
import {Provider} from 'react-redux'
render(
	//向整个应用提供store
	<Provider store={store}>
		<Router history={browserHistory} routes={routerConfig}>

		</Router>
	</Provider>,
	document.getElementById('react-root')
)