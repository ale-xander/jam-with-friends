import React, { Component } from 'react'
import { Row, Col } from 'antd';
import UserCard from "./userCard";
import 'antd/dist/antd.css';

class userContainer extends Component {
    render() {
        return (
            <div>
                <Row>
                {this.props.userData.map((user, index)=> (
                    <Col xs={{ span: 12,  }} lg={{ span: 6, offset: 0 }} key={index}>
                        <UserCard key={index} name={user.name} description={user.description} interests={user.interests}/>
                    </Col>
                ))}
                </Row>
            </div>
        );
    }
}

export default userContainer;