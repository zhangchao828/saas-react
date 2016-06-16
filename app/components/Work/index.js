import React,{Component} from 'react'
import {Link} from 'react-router'
export default class extends Component{
    render(){
        return(
            <div>
                Work
                <Link to="/app/crm">Crm</Link>
                {this.props.children}
            </div>
        )
    }
}