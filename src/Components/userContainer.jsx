import React, { Component } from 'react'
import { Row, Col } from 'antd';
import UserCard from "./userCard";
import 'antd/dist/antd.css';
// import '../index.css';

export default class userContainer extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <UserCard />
                    </Col>
                    <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <UserCard />
                    </Col>
                    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <UserCard />
                    </Col>
                </Row>



                
            </div>
        )
    }
}
