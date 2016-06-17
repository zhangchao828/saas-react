module.exports={
    path:'crm',
    indexRoute:{
        onEnter: (nextState, replace) => replace('/app/work/crm/android')
    },
    getComponents(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('../../components/Crm')['default'])
        },'crm')
    },
    childRoutes:[{
        path:'android',
        getComponents(nextState, cb) {
            require.ensure([], (require) => {
                cb(null, require('../../components/Android')['default'])
            },'android')
        }
    },{
        path:'apple',
        getComponents(nextState, cb) {
            require.ensure([], (require) => {
                cb(null, require('../../components/Apple')['default'])
            },'apple')
        }
    }]
}