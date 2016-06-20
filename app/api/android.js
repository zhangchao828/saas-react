import fetch from 'isomorphic-fetch'
export default{
    search_api:async params=>{
        try {
            let res= await fetch('/assets/data/test.json',{
                method:'GET',
                //body:JSON.stringify(params)
            });
            return res.json();
        }catch (err){
            console.log(err)
        }
    }
}