import React,{Component} from 'react'
import styles from './style.css'
import {withRouter} from 'react-router'
@withRouter
export default class extends Component{
    login(){
        const router=this.props.router
        // localStorage.isLogin='true';
        router.push({pathname:'/app'})
    }
    render(){
        return(
            <div className={styles.container}>
                <header className={styles.header}>
                    <img className={styles.logo} src="assets/img/logo.png" alt=""/>
                </header>
                <div className={styles.login_container}>
                    <p>登录</p>
                    <div>
                        <div>账号或密码错误</div>
                        <div>
                            <input type="text" placeholder="手机号"/>
                                <i></i>
                        </div>
                        <div>
                            <input type="password" placeholder="登录密码"/>
                        </div>
                        <div>
                            <input type="radio"/>
                                <span>记住我</span>
                                <a>忘记密码</a>
                        </div>
                        <div>
                            <button onClick={::this.login}>登录</button>
                        </div>
                        <p>没有账号？<a href="#">免费注册</a></p>
                    </div>
                </div>
                <footer className={styles.footer}>
                    <div>
                        <p>商家咨询请致电：</p>
                        <p>400-863-8088</p>
                    </div>
                    <ul>
                        <li>关于婚礼纪</li>
                        <li>服务条款</li>
                        <li>© 婚礼纪 浙ICP备13004478号</li>
                    </ul>
                </footer>
            </div>
        )
    }
}