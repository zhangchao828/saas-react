import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import App from './container/App'
render(
	<App>

	</App>,
	document.getElementById('react-root')
)
if (module.hot) {
	module.hot.accept('./container/App', () => {
		const App=require('./container/App')
		render(
			<App>

			</App>,
			document.getElementById('react-root')
		)
	})
}