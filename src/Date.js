import React, { Component } from 'react';
import { FormattedDate} from 'react-intl';
import './Date.css';

class Today extends Component {


    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    render() {

        return (
                <FormattedDate
                    value={this.state.date}
                    day="numeric"
                    month="long"
                    year="numeric" />
        );
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            60000
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

export default Today;