import React, { Component } from 'react';
import moment from 'moment'
import './Clock.css';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    render() {
        return (
            <span>{moment().format('H:mm')}</span>
        );
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillMount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }


}

export default Clock;
