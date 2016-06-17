module.exports={
    path: 'manage',
    getComponents(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('../../components/Manage')['default'])
        },'manage')
    }
}
