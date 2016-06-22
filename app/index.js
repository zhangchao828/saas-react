import React from 'react'
import {render} from 'react-dom'
import {Router,browserHistory,hashHistory} from 'react-router'
import routerConfig from './routerConfig'
import configureStore from './store'
import {Provider} from 'react-redux'
import { syncHistoryWithStore} from 'react-router-redux'
const history = syncHistoryWithStore(browserHistory, store)
const store = configureStore({})
render(
	//向整个应用提供store
	<Provider store={store}>
		<Router history={history} routes={routerConfig}>

		</Router>
	</Provider>,
	document.getElementById('react-root')
)