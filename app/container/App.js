import React from 'react'
import {Provider} from 'react-redux'
import {Router,browserHistory} from 'react-router'
import routerConfig from '../routerConfig'
// import { syncHistoryWithStore} from 'react-router-redux'
import configureStore from '../store'
const store = configureStore({})
// const history = syncHistoryWithStore(browserHistory, store)
export default ()=>(
    <Provider store={store}>
        <Router history={browserHistory} routes={routerConfig}>

        </Router>
    </Provider>
)