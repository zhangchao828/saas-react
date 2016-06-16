import React from 'react'
import {render} from 'react-dom'
import {Router,browserHistory,hashHistory} from 'react-router'
import routerConfig from './routerConfig'
// setInterval(()=>{
// 	if(localStorage.isLogin==='true'){
// 		localStorage.isLogin='false'
// 	}
// },5000)
render(
	<Router history={browserHistory} routes={routerConfig}>

	</Router>,
	document.getElementById('react-root')
)