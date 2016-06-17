module.exports={
    path:'crm',
    getComponents(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('../../components/Crm')['default'])
        },'crm')
    },
    childRoutes:[{
        path:''
    }]
}