import React, { Component } from 'react'
import { Card, Avatar } from 'antd'
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  UserAddOutlined
} from '@ant-design/icons'

import UserInterests from './userInterests'
import 'antd/dist/antd.css'
import './userCard-styles.css'

const { Meta } = Card




class userCard extends Component {
  render() {
    return (
      <div className='user-card'>
      <Card
        hoverable
        // style={{ width: 300 }}
        cover={
          <img
            alt='trumpet'
            src='https://images.unsplash.com/photo-1573871669414-010dbf73ca84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
          />
        }
        actions={[
          <UserAddOutlined />,
          <SettingOutlined key='setting' />,
          <EditOutlined key='edit' />,
          <EllipsisOutlined key='ellipsis' />
        ]}
      >
        <Meta
          avatar={
            <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
          }
          title={this.props.name}
          description={this.props.description}
        />
        <UserInterests />
      </Card>
    </div>
    );
  }
}

export default userCard;