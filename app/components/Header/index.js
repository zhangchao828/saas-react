import React from 'react'
import {Link} from 'react-router'
import styles from './style.css'
const Header=props=>(
    <div className={styles.container}>
        <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/home/course">Course</Link></li>
        </ul>
        <div>
            {props.children}
        </div>
    </div>
)
export default Header