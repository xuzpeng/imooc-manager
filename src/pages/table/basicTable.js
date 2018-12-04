import React, { Component } from 'react';
import { Card, Table} from 'antd';

export default class BasicTable extends Component {
  render () {
    const columns = [
      {
        title: 'id',
        dataIndex: 'id'
      }, {
        title: '用户名',
        dataIndex: 'userName'
      }, {
        title: '性别',
        dataIndex: 'sex'
      }, {
        title: '状态',
        dataIndex: 'state'
      }, {
        title: '爱好',
        dataIndex: 'interest'
      }, {
        title: '生日',
        dataIndex: 'birthday'
      }, {
        title: '地址',
        dataIndex: 'address'
      }, {
        title: '早起时间',
        dataIndex: 'time'
      }, 
    ]
    return (
      <div>
        <Card title="基础表格">
          <Table 
            columns={columns}
          />
        </Card>
      </div>
    )
  }
}