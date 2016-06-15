import React from 'react'
import {render} from 'react-dom'
import {Router,browserHistory,hashHistory} from 'react-router'
// import routerConfig from './routerConfig'
import routerConfig from './routes'
render(
	<Router history={browserHistory} routes={routerConfig}>

	</Router>,
	document.getElementById('react-root')
)