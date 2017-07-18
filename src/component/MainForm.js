import React, { Component } from 'react';
import InputForm from './InputForm';
import Message from './Message';

export default class MainForm extends Component {

    constructor(props) {
        super(props);
        this.state = { ms: 'hello' };
        this.onReceiveMS = this.onReceiveMS.bind(this);
    }

    onReceiveMS(ms) {
        this.setState({ ms });
    }
    render() {
        const { ms } = this.state;
        return (
            <div>
                <Message ms={ms} />
                
                <InputForm handleReceiveMS={this.onReceiveMS} />
            </div>
        );
    }
}
