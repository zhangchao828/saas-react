module.exports={
    path:'statistics',
    getComponents(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('../../components/Statistics')['default'])
        },'statistics')
    }
}