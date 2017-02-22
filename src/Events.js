import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import './Events.css';

BigCalendar.momentLocalizer(moment);

require('react-big-calendar/lib/css/react-big-calendar.css')

class Events extends Component {

    render() {
        return (
            <div>
                <BigCalendar 
                    style={{height:'420px'}}
                    events={[]}
                />
            </div>
        );
    }
}

export default Events;




