import React, { Component } from 'react';

export default class InputForm extends Component {
    render() {
        return (
            <div>
                <input type="text" ref="txtMS" placeholder="message in here" />
                <br /> <br />
                <button>Send </button>
            </div>
        );
    }
}
