module.exports={
    path: 'course',
    getComponents(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('../components/Course')['default'])
        })
    },
    childRoutes:[{
        path:'test',
        getComponents(nextState,cb){
            require.ensure([], (require) => {
                cb(null, require('../components/Test')['default'])
            })
        }
    }]
}
