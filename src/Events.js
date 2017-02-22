import React, { Component } from 'react';
import './Events.css';

var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
var CALENDAR_ID = "51n4vtv46paes63es2ddea3vgg@group.calendar.google.com";

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
        $.ajax({ url: '/calendar' })
            .done((data) => {
                console.log("AJAX response received");
                this.state.eventsSimple = data;
            })
            .fail(() => {
                console.log("AJAX response failed");
            });

    }

    componentDidMount() {
        this.updateEvents(this);
        this.timerID = setInterval(
            () => this.updateEvents(),
            10000
        );
    }

    componentWillMount() {
        clearInterval(this.timerID);
    }
}

export default Events;




