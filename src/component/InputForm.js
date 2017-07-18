import React, { Component } from 'react';

export default class InputForm extends Component {
    constructor(props) {
        super(props);
        this.getMessage = this.getMessage.bind(this);
    }
    getMessage() {
        const ms = this.refs.txtMS.value;
        this.refs.txtMS.value = '';
        this.props.handleReceiveMS(ms);
    }
    render() {
        return (
            <div>
                <input type="text" ref="txtMS" placeholder="message in here" />
                <br /> <br />
                <button onClick={this.getMessage}>Send </button>
            </div>
        );
    }
}
