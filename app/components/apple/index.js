import React,{Component,PropTypes} from 'react'
import styles from './style.css'
// import { reduxForm } from 'redux-form'
// @reduxForm({ 
//   form: 'contact', // a unique name for this form
//   fields: ['firstName', 'lastName', 'email'] // all the fields in your form
// })
export default class extends Component{
    // static propTypes={
    //     handler:PropTypes.func
    // }
    state={
        value:'双向绑定'
    }
    changeHandler(e){
        this.setState({
            value:e.target.value
        })
    }
    render(){
        let value=this.state.value
        return(
            <div>
                <h1>{value||'双向绑定'}</h1>
                <input type="text" onChange={::this.changeHandler} defaultValue={value}/>
            </div>
        )
    }
}