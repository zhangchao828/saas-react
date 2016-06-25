import * as type from './types/androidType'
import API from '../api/android'
export const search=params=>async (dispatch,getState)=>{
    try {
        let response=await API.search_api(params)
        //请求成功之后，ok为true，status为200
        if(response.ok){
            let result =await response.json()
            dispatch({
                type:type.SEARCH,
                data:result.data
            })
            setTimeout(()=>{
                dispatch(loading(false))
            },1500)
        }else{
            // dispatch({
            //     type:'ERROR',
            //     errInfo:response.statusText
            // })
            console.log(`状态码:${response.status},错误信息:${response.statusText}`)
        }
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