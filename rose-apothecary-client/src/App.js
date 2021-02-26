import './App.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar'
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import About from "./components/About";

class App extends Component {
  state = {
    user: {},
    loggedIn: false
  }

  setCurrentUser = (user) => {
    this.setState({
      user: user,
      loggedIn: true
    })
  }

  logOut = () => {
    this.setState({ user: {}, loggedIn: false })
  }

  componentDidMount = () => {
    let token = localStorage.token
    if (typeof token !== "undefined" && token.length > 1) {
      this.tokenLogin(token)
    } else {
      console.log("No token found, try logging in!")
    }
  }

  tokenLogin = (token) => {
    fetch("http://localhost:3000/auto_login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({ token: token })
    })
      .then( res => res.json())
      .then( user => this.setCurrentUser(user))
  }

  displayGreeting = () => {
    return <h1>Hi! It's working!</h1>
  }

  render() {
    return (
      <div >
        <Router>
          <Navbar logOut={this.logOut} loggedIn={this.state.loggedIn}/>
          {this.displayGreeting()}

          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

          {/* if someone is logged in, this route will take you home */}
          <Route exact path="/login">
            {this.state.loggedIn ?
              <Redirect to="/" />
              :
              <Login setCurrentUser={this.setCurrentUser} tokenLogin={this.tokenLogin} />}
          </Route>

          {/* if someone is logged in, this route will take you home */}
          <Route exact path="/signup">
            {this.state.loggedIn ?
              <Redirect to="/" />
              :
              <Signup />}
          </Route>

        </Router>
      </div>
    );
  }
}

export default App;
