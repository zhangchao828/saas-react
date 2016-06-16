import React,{Component} from 'react'
import {withRouter} from 'react-router'
@withRouter
export default class extends Component{
    login(){
        const router=this.props.router
        // localStorage.isLogin='true';
        router.replace({pathname:'/home'})
    }
    render(){
        return(
            <div>
                <button onClick={::this.login}>Login</button>
            </div>
        )
    }
}