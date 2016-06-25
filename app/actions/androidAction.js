import * as type from './types/androidType'
import API from '../api/android'
export const search=params=>async (dispatch,getState)=>{
    try {
        let response=await API.search_api(params)
        let result =await response.json()
        dispatch({
            type:type.SEARCH,
            data:result.data
        })
        setTimeout(()=>{
            dispatch(loading(false))
        },1500)
    }catch (err){
        console.log(err)
    }
}
export const loading=loading=>({
    type:'LOADING',
    loading
})
export const paging=pager=>({
    type:'PADING',
    pager
})