import { combineReducers } from 'redux'
// import {routerReducer as routing } from 'react-router-redux'
import {reducer as form} from 'redux-form'
import * as reducers from './all-reducers'
//合并所有reducers
export default combineReducers({
    ...reducers,
    // routing,
	form
})