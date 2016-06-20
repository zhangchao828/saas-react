import {createStore,applyMiddleware,compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'
const initialState = {}
const distinguish=function (isDev=true) {
    if (isDev){
        return compose(
            applyMiddleware(thunkMiddleware),
            //redux开发工具(游览器端需要安装相应插件redux-devTool),生产环境不需要
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    }else{
        return applyMiddleware(thunkMiddleware)
    }
}
export default createStore(
    rootReducer,
    initialState,
    distinguish(process.env.NODE_ENV!=='production')
)
