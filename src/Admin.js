import React, { Component } from 'react'
import './Admin.css'
import MeetingsManager from './MeetingsManager'

class Admin extends Component {
  constructor(props) {
    super(props)
    this.login = this.login.bind(this)

    this.state={correctUsername: 'digitteekkari', correctPassword: 'skarttijakaikki', password: '', username: ''}
  }
  login(e) {
    e.preventDefault()
    let { correctPassword, correctUsername, password, username } = this.state
    console.log(`${username} and ${password}`)
    if (password === correctPassword && username === correctUsername) {
      this.setState({logged: true})
    }
  }
  render () {
    let content
    //if (this.state.logged) {
    if (true) {
      content = <MeetingsManager/>
    } else {
      content = (
        <div className="logincontainer">
          <h3>Info screen admin login</h3>
          <form onSubmit={this.login}>
            <input placeholder="username" onChange={e => this.setState({username: e.target.value})}/>
            <input type="password" placeholder="password" onChange={e => this.setState({password: e.target.value})}/>
            <button>Login</button>
            {this.state.logged}
          </form>
        </div>
      )
    }
    return (
      <div className="logincontainer">
        {content}
      </div>
    )
  }
}

export default Admin
