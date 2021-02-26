// src/Navbar.js
import React from 'react'
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0px 10px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <NavLink
          to="/"
          /* set exact so it knows to only set activeStyle when route is deeply equal to link */
          exact
          /* add styling to Navlink */
          style={link}
          /* add prop for activeStyle */
          activeStyle={{
            background: 'darkblue'
          }}
        >Home</NavLink>


        <NavLink
          to="/about"
          exact
          style={link}
          activeStyle={{
            background: 'darkblue'
          }}
        >About</NavLink>

        {/* Only show this button if there is no user logged in */}
        {this.props.loggedIn ? null :
          <NavLink
            to="/login"
            exact
            style={link}
            activeStyle={{
              background: 'darkblue'
            }}
          >Login</NavLink>
        }

        {/* Only show this button if there is no user logged in */}
        {this.props.loggedIn ? null :
          <NavLink
            to="/signup"
            exact
            style={link}
            activeStyle={{
              background: 'darkblue'
            }}
          >SignUp</NavLink>
         }

        {/* Only show this button if there is no user logged in */}
        {this.props.loggedIn ?
          <NavLink
            onClick={() => this.props.logOut()}
            to="/"
            exact
            style={link}
          >LogOut</NavLink>
          :
          null
        } 
      </div>
    )
  }
}

export default Navbar; 