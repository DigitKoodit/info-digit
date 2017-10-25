import React, { Component } from 'react';
import Axios from 'axios';
import './Events.css';

class Events extends Component {


    constructor(props) {
        super(props);
        this.state = {
            eventsSimple: []
        };
    }

    render() {
        var name = "", time = "", display = "";
        if (this.state.eventsSimple.length === 0) {
            name = "";
            time = "";
        } else {
            for (var i = 0; i < this.state.eventsSimple.length; i++) {
                name = this.state.eventsSimple[i].name;
                time = "\n" + this.state.eventsSimple[i].start + "\n\n";
                display += name + time;
            }
        }

        return (
            <div>
                <pre>
                    {display}
                </pre>
            </div>
        );
    }

    updateEvents() {
         Axios.get("./calendar/getEvents").then(function(response) {
            this.setState({
                eventsSimple: response.data
            })
         })
    }

    componentDidMount() {
        this.updateEvents(this);
        this.timerID = setInterval(
            () => this.updateEvents(),
            100
        );
    }

    componentWillMount() {
        clearInterval(this.timerID);
    }
}

export default Events;




