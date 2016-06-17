module.exports={
    path:'control',
    getComponents(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('../../components/Control')['default'])
        },'control')
    }
}