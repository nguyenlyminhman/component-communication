import React, { Component } from 'react';

export default class Message extends Component {
    render() {
        return (
            <div>
                <h2 > {this.props.ms} </h2>
            </div>
        );
    }
}
