import * as type from './types/androidType'
import API from '../api/android'
export const search=params=>async (dispatch,getState)=>{
    let result=await API.search_api(params)
    dispatch({
        type:type.SEARCH,
        data:result.data
    })
    setTimeout(()=>{
        dispatch(loading(false))
    },1500)
}
export const loading=loading=>({
    type:'LOADING',
    loading
})
export const paging=pager=>({
    type:'PADING',
    pager
})