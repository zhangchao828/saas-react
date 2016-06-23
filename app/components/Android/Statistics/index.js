import React,{Component} from 'react'
import { Table, Button ,Pagination } from 'antd';
import columns from './columns'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actionCreators from '../../../actions/androidAction'
@connect(
    state=>({android:state.android}),
    dispatch=>({actions:bindActionCreators(actionCreators,dispatch)})
)
export default class extends Component{
    componentDidMount(){
        this.search()
    }
    search(){
        const actions=this.props.actions
        actions.loading(true)
        actions.search()
    }
    pagination={
        showQuickJumper:true,
        showTotal:total => `共 ${total} 条`,
        showSizeChanger:true
    }
    render(){
        const {data,loading}=this.props.android
        this.pagination.total=data.length
        return(
            <div>
                <div style={{ margin: 10 }}>
                    <Button type="primary" onClick={::this.search}>搜索</Button>
                </div>
                <Table
                    columns={columns}
                    dataSource={data}
                    loading={loading}
                    pagination={this.pagination}
                    />
            </div>
        )
    }
}