import React, { Component } from 'react'
import { Card, Tag } from 'antd'
import 'antd/dist/antd.css';
const { Meta } = Card;

export default class userCard extends Component {
  render () {
    return (
      <div>
        <Card
            hoverable
            style={{ width: 240 }}
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
                <Tag>Jam</Tag>
                <Tag>Lessons</Tag>
                <Tag>Join a Band</Tag>
                <Tag>Perform Live</Tag>
                <Tag>Record Song</Tag>
        </Card>
        ,
      </div>
    )
  }
}
