import React, { Component } from 'react'
import UserCard from "./userCard";

export default class userContainer extends Component {
    render() {
        return (
            <div>
                <UserCard />
                <UserCard />
            </div>
        )
    }
}
