import Login from '../components/Login'
import App from '../components/Header'
import Home from '../components/Home'
export default{
    component:'div',
    childRoutes:[{
        path:'/',
        component:Login,
        onEnter: function (nextState, replace) {
            // if(localStorage.isLogin==='true'){
            //     replace('/home')
            // }
        }
    },{
        path:'/home',
        component:App,
        indexRoute:{
          component:Home
        },
        childRoutes:[
            require('./course')
        ]
    }]
}