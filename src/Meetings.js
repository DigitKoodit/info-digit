import React, { Component } from 'react'
import axios from 'axios'
import moment from 'moment'

class Meetings extends Component {
	constructor (props) {
		super(props)
		this.state = {
			meetings: []
		}
	}
	componentDidMount () {
		axios.get('/meetings').then(response => {
			// filter everything that happened more than 4 hours ago
			var meetings = response.data.filter(meeting => {
				return moment.unix(meeting.date).isAfter(moment().subtract(4, "hours"))
			})
			this.setState({meetings})
		})
	}

	render () {
		return (
			<div style={{
				textAlign: 'left',
				fontSize: '1.5em',
				padding: "1em",
				flex: 1
			}}>
				{this.state.meetings.map(function (meeting) {
					return <div key={meeting.name + meeting.date}>{moment(parseInt(meeting.date)*1000).format('D.M H:mm') + ' ' + meeting.name}</div>
				})}
			</div>
		)
	}
}

export default Meetings
