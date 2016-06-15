import React,{Component} from 'react'
import { Link } from 'react-router'
export default class extends Component{
    render(){
        return(
            <div>
                <Link to="/home">Home</Link>{' '}
                <Link to="/course">Course</Link>{' '}
                <div>
                    {this.props.children||'App'}
                </div>
            </div>
        )
    }
}