import React,{PropTypes,Component} from 'react'
import { Menu, Icon, Switch } from 'antd'
import {browserHistory} from 'react-router'
import styles from './styles.css'
const SubMenu = Menu.SubMenu
export default class extends Component{
    constructor(props){
        super(props)
        const {pathname}=location
        this.state={
            current:pathname.substring(pathname.lastIndexOf('/')+1)
        }
    }
    handleClick(e) {
        this.setState({
            current: e.key
        })
        browserHistory.push({
            pathname:`/app/work/crm/${e.key}`
        })
    }
    render(){
        return(
            <div className={styles.container}>
                <div className={styles.menu}>
                    <Menu theme='light'
                          onClick={::this.handleClick}
                          style={{ width: '100%',height:'100%' }}
                          defaultOpenKeys={['sub1']}
                          selectedKeys={[this.state.current]}
                          mode="inline"
                    >
                        <Menu.Item key="android">
                            <Icon type="android" />安卓
                        </Menu.Item>
                        <Menu.Item key="apple">
                            <Icon type="apple" />苹果
                        </Menu.Item>
                        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>导航一</span></span>}>
                            <Menu.Item key="3">子选项1</Menu.Item>
                            <Menu.Item key="4">子选项2</Menu.Item>
                            <Menu.Item key="5">子选项3</Menu.Item>
                            <Menu.Item key="6">子选项4</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="windows">
                            <Icon type="windows" />windows
                        </Menu.Item>
                        <Menu.Item key="github">
                            <Icon type="github" />github
                        </Menu.Item>
                    </Menu>
                </div>
                <div className={styles.body}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}