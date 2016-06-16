import React,{Component} from 'react'
import {Link} from 'react-router'
export default class extends Component{
    render(){
        return(
            <div>
                Course
                <ul>
                    <li>
                        <Link to="/home/course/test">test</Link>
                    </li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}