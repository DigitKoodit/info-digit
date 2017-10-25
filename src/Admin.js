import React, { Component } from 'react'

class Admin extends Component {
  render () {
    return (
      <div>
        <h3>Info screen admin login</h3>
        <form>
          <input placeholder="username" />
          <input placeholder="password" />
          <button>Login</button>
        </form>
      </div>
    )
  }
}

export default Admin
