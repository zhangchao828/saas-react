import Work from '../../components/Work'
//如果这里写成export.default的形式，那么导入就需要写成require(./work)['default']
module.exports={
	path:'work',
    component:Work,
	indexRoute:{
		onEnter: (nextState, replace) => replace('/app/work/crm')
	},
    childRoutes:[
		require('./crm'),
		require('./control'),
		require('./statistics')
	]
}
