import {createStore,applyMiddleware,compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'
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
export default function configureStore(initalState) {
  const store = createStore(
  	rootReducer, 
  	initalState,
  	distinguish(process.env.NODE_ENV!=='production')
  )
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default
      store.replaceReducer(nextReducer)
    })
  }
  return store
}
