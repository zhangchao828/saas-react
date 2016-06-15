// import React from 'react'
// import {render} from 'react-dom'
// import {Router,browserHistory,hashHistory} from 'react-router'
// import routerConfig from './routerConfig'
// render(
// 	<Router history={browserHistory} routes={routerConfig}>
//
// 	</Router>,
// 	document.getElementById('react-root')
// )

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link,browserHistory } from 'react-router'

const App = React.createClass({
	render() {
		return (
			<div>
				<h1>App</h1>
				<ul>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/inbox">Inbox</Link></li>
				</ul>
				{this.props.children}
			</div>
		)
	}
})

const About = React.createClass({
	render() {
		return <h3>About</h3>
	}
})

const Inbox = React.createClass({
	render() {
		return (
			<div>
				<h2>Inbox</h2>
				<li><Link to="/messages">About</Link></li>
				{this.props.children || "Welcome to your Inbox"}
			</div>
		)
	}
})

const Message = React.createClass({
	render() {
		return <h3>Message {this.props.params.id}</h3>
	}
})

render((
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<Route path="about" component={About} />
			<Route path="inbox" component={Inbox}>
				<Route path="messages/:id" component={Message} />
			</Route>
		</Route>
	</Router>
), document.body)