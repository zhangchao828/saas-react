import stubbedCourses from '../stubs/COURSES'
export default{
    component: 'div',
    childRoutes: [ {
        path: '/',
        component: require('../components/App'),
        childRoutes: [
            require('./Calendar'),
            require('./Course'),
            require('./Grades'),
            require('./Messages'),
            require('./Profile')
        ]
    } ]
}
