import React, { Component } from 'react'
import axios from 'axios'
import moment from 'moment'

class MeetingsManager extends Component {
    constructor(props) {
        super(props)
        this.getMeetings = this.getMeetings.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.removeMeeting = this.removeMeeting.bind(this)
        this.state = {meetings: []}
    }
    componentWillMount() {
        this.getMeetings()
    }
    getMeetings () {
        axios.get('/meetings')
        .then(res => {
            this.setState({meetings: res.data})
        })
    }
    onSubmit (e) {
        e.preventDefault()
        axios.post('/meetings', {date: this.state.date, name: this.state.name})
        .then(() => {
            this.getMeetings()
        })
    }
    removeMeeting (meeting) {
        console.log('remove meeting', meeting)
        axios.delete('/meetings/' + meeting._id)
        .then(() => {
            this.getMeetings()
        })
    }
    render () {
        console.log(this.state)
        return (
            <div style={{backgroundColor: 'white', color: 'black', borderRadius: '10px'}}>
                <form onSubmit={this.onSubmit}>
                    <input placeholder="Meeting text" onChange={e => this.setState({name: e.target.value})}/>
                    <input type="date" onChange={e => this.setState({date: moment(e.target.value).unix()})}/>
                    <input class="submitbutton" type="submit" value="Add Meeting"/>
                </form>
                <div>
                    {this.state.meetings.map((meeting) => {
                        return (
                            <div>
                                {`${moment(meeting.date*1000).format('D.M H:mm')} ${meeting.name}`}
                                <span onClick={() => this.removeMeeting(meeting)}>X</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default MeetingsManager