import fetch from 'isomorphic-fetch'
export default{
    search_api:async params=>{
        try {
            let res= await fetch('/assets/data/test.json',{
                method:'GET',
                //body:JSON.stringify(params)
            })
            /*
            不要试图打印res.json(),因为这样就已经执行了res.json()，
            它是一个Promise对象，然后下面又return一下res.json(),又执行一遍就会报错
             */
            console.log(res.json())
            return res.json();
        }catch (err){
            console.log(err)
        }
    }
}