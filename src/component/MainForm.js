import React, { Component } from 'react';
import InputForm from './InputForm';
import Message from './Message';

export default class MainForm extends Component {
    render() {
        return (
            <div>
                <InputForm />
                <Message />
            </div>
        );
    }
}