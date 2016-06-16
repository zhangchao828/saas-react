import React from 'react'
import {Link} from 'react-router'
import styles from './style.css'
const Header=props=>(
    <div className={styles.container}>
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul>
                    <li><Link to="/app">工作</Link></li>
                    <li><Link to="/manage">管理</Link></li>
                </ul>
            </nav>
            <div className={styles.user}>
                <span>用户</span>
                <span>注销</span>
            </div>
        </header>
        <div>
            {props.children}
        </div>
    </div>
)
export default Header