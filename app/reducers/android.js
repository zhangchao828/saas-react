import {SEARCH} from '../actions/types/androidType'
import update from 'react-addons-update'
const initialState={
    data:[],
    loading:false,
    pagination:{
        showQuickJumper:true,
        showTotal:total => `共 ${total} 条`,
        showSizeChanger:true
    }
}
export default (state=initialState,action)=>{
    switch (action.type){
        case SEARCH:
            return update(state,{data:{$set:action.data}})
        case 'LOADING':
            return update(state,{loading:{$set:action.loading}})
        case 'PADING':
            return update(state,{pagination:{$set:action.pager}})
        default:
            return state
    }
}