import { combineReducers } from 'redux'
import {routerReducer as routing } from 'react-router-redux'
import {reducer as form} from 'redux-form'
import android from './android'
//合并所有reducers
export default combineReducers({
    android,
    routing,
	form
})