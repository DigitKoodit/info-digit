import React, { Component } from 'react';
import moment from 'moment';

class Countdown extends Component {
    constructor(props) {
        super(props);
        this.state = { now: new Date() };
    }

    componentDidMount() {
        this.timer = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillMount() {
        clearInterval(this.timer);
    }

    tick() {
        this.setState({
            now: new Date()
        });
    }

    render() {
        return (
            <span>
              {'Wappuun on ' + moment(this.props.date.valueOf()-this.state.now.valueOf()).format('M [kuukautta] D [päivää] h [tuntia] m [minuuttia] s [sekuntia]')}
		  </span>
        );
    }
}

export default Countdown;
