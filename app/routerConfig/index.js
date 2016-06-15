import Login from '../components/Login'
import App from '../components/App/index'
export default{
    component:'div',
    childRoutes:[{
        path:'/',
        component:Login
    },{
        path:'/hunliji',
        component:App,
        childRoutes:[
            require('./home'),
            require('./course')
        ]
    }]
}