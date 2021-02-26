// src/Login.js
import React, { Component } from 'react';

class Login extends Component {

  state = {
    username: "",
    password: ""
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    })
  }

  login = (event) => {
    event.preventDefault()
    event.target.reset()

    const { username, password } = this.state
    const user = { username, password }

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user })
    })
      .then(r => r.json())
      .then(r => {
        localStorage.token = r.jwt;

        // this.props.setCurrentUser(r.user)
        this.props.tokenLogin(localStorage.token)
      })
  }

  render() {
    return (
      <form onSubmit={this.login}>
        <h1>Login</h1>
        <div>
          <input onChange={this.handleChange} type="text" name="username" placeholder="Username" />
        </div>
        <div>
          <input onChange={this.handleChange} type="password" name="password" placeholder="Password" />
        </div>
        <input type="submit" value="Login" />
      </form>
    );
  }
}

export default Login; 