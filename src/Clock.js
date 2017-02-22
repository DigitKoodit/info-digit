import React, { Component } from 'react';
import { FormattedTime } from 'react-intl';
import './Clock.css';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    render() {
        return (
            <FormattedTime value={this.state.date} />
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