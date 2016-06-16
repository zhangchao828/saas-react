import Work from '../components/Work'
import Crm from '../components/Crm'
module.exports={
    component:Work,
    childRoutes:[{
        path:'crm',
        component:Crm
    }]
}
