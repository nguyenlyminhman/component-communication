import React, { Component } from 'react';
import InputForm from './InputForm';
import Message from './Message';

export default class MainForm extends Component {
    //khởi tạo
    constructor(props) {
        super(props);
        this.state = { ms: 'hello react js' };
        this.onReceiveMS = this.onReceiveMS.bind(this);
    }
    //gán gại giá trị cho state
    onReceiveMS(ms) {
        this.setState({ ms });
    }
    render() {
        const { ms } = this.state;
        return (
            <div>
                <Message ms={ms} />
                {/* props handleReceiveMS gọi phương thức onReceiveMS(ms)
                    và gáng lại giá trị mới cho state "ms" */}
                <InputForm handleReceiveMS={this.onReceiveMS} />
            </div>
        );
    }
}
