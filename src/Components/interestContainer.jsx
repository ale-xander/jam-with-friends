import React from 'react'
import { Row, Col } from 'antd';
import InterestCard from "./interestCard";
import 'antd/dist/antd.css';

export default function interestContainer() {
    return (
        <div>
            <Row >
                    <Col xs={{ span: 6,  }} lg={{ span: 4, offset: 0 }}>
                    <InterestCard />
                    </Col>
                    <Col xs={{ span: 6,  }} lg={{ span: 4, offset: 0 }}>
                    <InterestCard />
                    </Col>
                    <Col xs={{ span: 6,  }} lg={{ span: 4, offset: 0 }}>
                    <InterestCard />
                    </Col>
                    <Col xs={{ span: 6,  }} lg={{ span: 4, offset: 0 }}>
                    <InterestCard />
                    </Col>
                    <Col xs={{ span: 6,  }} lg={{ span: 4, offset: 0 }}>
                    <InterestCard />
                    </Col>
                    <Col xs={{ span: 6, }} lg={{ span: 4, offset: 0 }}>
                    <InterestCard />
                    </Col>
                   
                </Row>
        </div>
    )
}
