import React,{Component} from 'react'
import {Link,IndexLink,withRouter} from 'react-router'
import styles from './style.css'
@withRouter
export default class extends Component{
    logout(){
        const router=this.props.router
        router.push({pathname:'/'})
    }
    componentWillMount(){
        this.props.router.setRouteLeaveHook(
            this.props.route,
            nextLocation=>this.routerWillLeave(nextLocation)
        )
    }
    routerWillLeave(nextLocation) {
        return '确定要退出吗?';
    }
    render(){
        return(
            <div className={styles.container}>
                <header className={styles.header}>
                    <nav className={styles.nav}>
                        <ul>
                            <li><Link to="/app/work" activeClassName={styles.active}>工作</Link></li>
                            <li><Link to="/app/manage" activeClassName={styles.active}>管理</Link></li>
                        </ul>
                    </nav>
                    <div className={styles.user}>
                        <span className={styles.logout} onClick={::this.logout}>注销</span>
                    </div>
                </header>
                <div className={styles.body}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}