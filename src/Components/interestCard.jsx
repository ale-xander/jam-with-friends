import React from 'react'
import { Card } from 'antd'
import 'antd/dist/antd.css';
import './interestCard-styles.css'
const { Meta } = Card;

export default function interestCard() {
    return (
        <div className="interest-card">
            <Card
            hoverable
            // style={{ width: 200 }}
            cover={
            <img
                alt='trumpet'
                src='https://images.unsplash.com/photo-1590088285300-e236300b7f99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80'
            />
            }
        >
        
            <Meta 
                title='Jam With Friends' 
                description="find friends you can jam with"
            />
                
        </Card>
        </div>
    )
}
