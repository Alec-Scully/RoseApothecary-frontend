// src/Login.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

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
      <div className="login-container">
        <div className="login-card">
          <form onSubmit={this.login}>
            <h2>Please join the line by logging in!</h2>
            <div>
              <input className="login-form-field" onChange={this.handleChange} type="text" name="username" placeholder="Username" />
            </div>
            <div>
              <input className="login-form-field" onChange={this.handleChange} type="password" name="password" placeholder="Password" />
            </div>
            <input className="login-form-submit" type="submit" value="Login" />
          </form>
          <br/>
          <p>Don't have an account?</p>
          <p>Feel free to <Link to="/signup">sign up here!</Link></p>
        </div>
      </div>
    );
  }
}

export default Login; 