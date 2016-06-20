import {SEARCH} from '../actions/types/androidType'
const initialState={
    data:[],
    loading:false
}
export default (state=initialState,action)=>{
    switch (action.type){
        case SEARCH:
            return Object.assign({},state,{data:action.data})
        case 'LOADING':
            return Object.assign({},state,{loading:action.loading})
        default:
            return state
    }
}