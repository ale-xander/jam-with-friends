import React, {Component} from 'react'
import { Tag } from 'antd'
import 'antd/dist/antd.css';


class userInterests extends Component {
    render() {
        return (
            <div>
                {this.props.interests.map((interests, index)=>(
                    <Tag key={index} > {interests} </Tag>
                ))}
            
            
            </div>
        );
    }
}

export default userInterests;