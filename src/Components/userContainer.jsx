import React, { Component } from 'react'
import { Row, Col } from 'antd';
import UserCard from "./userCard";
import 'antd/dist/antd.css';



export default class userContainer extends Component {
    render() {
        return (
            <div >
                <Row >
                    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 0 }}>
                    <UserCard />
                    </Col>
                    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 0 }}>
                    <UserCard />
                    </Col>
                    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 0 }}>
                    <UserCard />
                    </Col>
                </Row>



                
            </div>
        )
    }
}
