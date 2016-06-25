import fetch from './fetch'
export default{
    search_api:params=>{
        return fetch('/assets/data/test.json',{
            // method:'GET',
            // body:JSON.stringify(params)
        })
    }
}