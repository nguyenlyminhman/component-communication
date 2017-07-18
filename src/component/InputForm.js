import React, { Component } from 'react';

export default class InputForm extends Component {
    constructor(props) {
        super(props);
        this.getMessage = this.getMessage.bind(this);
    }
    getMessage() {
        const ms = this.refs.txtMS.value;
        this.refs.txtMS.value = '';
        //phương thức handleReceiveMS(ms) đẩy tin vừa nhận đc sang MainForm
        //thực chất nó là 1 props trong react
        this.props.handleReceiveMS(ms);
    }
    render() {
        return (
            <div>
                <input type="text" ref="txtMS" placeholder="Message in here" />
                <br /> <br />
                <button onClick={this.getMessage}>Send </button>
            </div>
        );
    }
}
