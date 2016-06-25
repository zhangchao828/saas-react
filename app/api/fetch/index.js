import fetch from 'isomorphic-fetch'
//这里设置默认的fetch配置
const defaultConfig={
    method:'GET'
}
export default (url,config={})=>{
    config={
        ...defaultConfig,
        ...config
    }
    return fetch(url,config)
}