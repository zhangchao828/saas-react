/*
各种权限判断验证
 */
export default{
    isLogin:()=>window.localStorage.getItem('token'),
    removeToken:key=>{
        window.localStorage.removeItem(key)
    },
    setToken:(key,value)=>{
        window.localStorage.setItem(key,value)
    },
    getToken:key=>window.localStorage.getItem(key)
}