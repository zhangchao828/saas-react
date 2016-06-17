import React,{PropTypes,Component} from 'react'
import { Menu, Icon, Switch } from 'antd'
import styles from './styles.css'
const SubMenu = Menu.SubMenu
export default class extends Component{
    constructor(){
        super()
        this.state={
            current:'1'
        }
    }
    handleClick(e) {
        console.log(e.key)
        this.setState({
            current: e.key
        });
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
                        <Menu.Item key="1">
                            <Icon type="android" />选项1
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="apple" />选项2
                        </Menu.Item>
                        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>导航一</span></span>}>
                            <Menu.Item key="3">子选项1</Menu.Item>
                            <Menu.Item key="4">子选项2</Menu.Item>
                            <Menu.Item key="5">子选项3</Menu.Item>
                            <Menu.Item key="6">子选项4</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="7">
                            <Icon type="windows" />选项3
                        </Menu.Item>
                        <Menu.Item key="8">
                            <Icon type="github" />选项4
                        </Menu.Item>
                    </Menu>
                </div>
                <div className={styles.body}>
                    {this.props.children||'aaa'}
                </div>
            </div>
        )
    }
}