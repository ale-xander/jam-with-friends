import React, { Component } from 'react'
import { Card } from 'antd'
import UserInterests from "./userInterests";
import 'antd/dist/antd.css';
import './userCard-styles.css'

const { Meta } = Card;

export default class userCard extends Component {
  render () {
    return (
      <div className="user-card">
        <Card
            hoverable
            // style={{ width: 300 }}
            cover={
            <img
                alt='trumpet'
                src='https://images.unsplash.com/photo-1573871669414-010dbf73ca84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
            />
            }
        >
        
            <Meta 
                title='John' 
                description="Let's jam at my place this weekend!"
            />
               <UserInterests />
        </Card>

      </div>
    )
  }
}
