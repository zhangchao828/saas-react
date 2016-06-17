import React,{Component} from 'react'
import {Link,IndexLink} from 'react-router'
import styles from './style.css'
export default class extends Component{
    render(){
        return(
            <div className={styles.container}>
                <nav className={styles.nav}>
                    <ul>
                        <li>
                            <Link activeClassName={styles.active} to="/app/work/control">摄控表</Link>
                        </li>
                        <li>
                            <Link  activeClassName={styles.active} to="/app/work/crm">Crm</Link>
                        </li>
                        <li>
                            <Link  activeClassName={styles.active} to="/app/work/statistics">统计分析</Link>
                        </li>
                    </ul>
                </nav>
                <div className={styles.body}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}