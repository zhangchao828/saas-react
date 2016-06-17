import Login from '../components/Login'
import App from '../components/Header'
import Error from '../components/Error'
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
            //进入/app的时候定向到/app/work/crm
            onEnter: (nextState, replace) => replace('/app/work/crm')
        },
        childRoutes:[
            require('./work'),
            require('./manage')
        ]
    },{
        path:'*',
        component:Error
    }]
}