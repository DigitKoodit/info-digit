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

    updateEvents(_parent) {

        require('google-client-api')(function (gapi) {

            gapi.client.load('calendar', 'v3', function () {

                gapi.client.init({
                    apiKey: 'AIzaSyAgVkXygz_KbPPGJ_0FECFFzKBsD7ph-Co',
                    discoveryDocs: DISCOVERY_DOCS
                });

                gapi.client.calendar.events.list({
                    'calendarId': CALENDAR_ID,
                    'timeMin': (new Date()).toISOString(),
                    'maxResults': 10,
                    'singleEvents': true,
                    'orderBy': 'startTime'
                }).then(function (response) {

                    showEvents(response.result.items);
                });
            });
        });

        function showEvents(eventList) {

            var local = [];

            for (var i = 0; i < eventList.length; i++) {
                var time = eventList[i].start.date || eventList[i].start.dateTime;
                var name = eventList[i].summary;
                local.push({
                    name: name,
                    start: time
                });
            }

            _parent.setState({ eventsSimple: local });
        }

    }

    componentDidMount() {
        this.updateEvents(this);
        this.timerID = setInterval(
            () => this.updateEvents(this),
            10000
        );
    }

    componentWillMount() {
        clearInterval(this.timerID);
    }
}

export default Events;




