import React, { Component } from 'react'

class Admin extends Component {
  constructor(props) {
    super(props)
    this.login = this.login.bind(this)

    this.state={}
  }
  login(e) {
    e.preventDefault()
    if (this.state.password && this.state.username) {
      this.setState({logged: <div>{'Hello'}</div>})
    }
  }
  render () {
    return (
      <div>
        <h3>Info screen admin login</h3>
        <form onSubmit={this.login}>
          <input placeholder="username" onChange={username => this.setState({username})}/>
          <input placeholder="password" onChange={password => this.setState({password})}/>
          <button>Login</button>
          {this.state.logged}
        </form>
      </div>
    )
  }
}

export default Admin
