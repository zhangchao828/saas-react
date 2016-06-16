import Login from '../components/Login'
import App from '../components/Header'
import Work from '../components/Work'
export default{
    // component:'div',
    childRoutes:[{
        path:'/',
        component:Login,
        onEnter: function (nextState, replace) {
            // if(localStorage.isLogin==='true'){
            //     replace('/home')
            // }
        }
    },{
        path:'/app',
        component:App,
        indexRoute:{
          component:  Work
        },
        childRoutes:[
            require('./work'),
            // require('./manage')
        ]
    }]
}