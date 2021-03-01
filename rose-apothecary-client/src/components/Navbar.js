import React from 'react'
import { NavLink } from 'react-router-dom';
import '../index.css';

// const inactive = {
//   width: '100px',
//   padding: '12px',
//   margin: '0px 10px 6px',
//   background: 'blue',
//   textDecoration: 'none',
//   color: 'white',
// }

// const active = {
//   width: '100px',
//   padding: '12px',
//   margin: '0px 10px 6px',
//   background: 'green',
//   textDecoration: 'none',
//   color: 'red',
// }

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <div>
          {/* <img src="https://static.wikia.nocookie.net/schitts-creek/images/7/75/Roseapothlogo.jpg/revision/latest?cb=20181108044017" alt="Rose Apothecary Logo" width="500"/> */}
        </div>
          <ul className="nav-links">
            <li>
              <NavLink
                to="/"
                /* set exact so it knows to only set activeStyle when route is deeply equal to link */
                exact
                /* add styling to Navlink */
                // style={inactive}
                /* add prop for activeStyle */
                // activeStyle={active}
                className="nav-links-a"
              >Home</NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                exact
                // style={inactive}
                // activeStyle={active}
                className="nav-links-a"
              >About</NavLink>
            </li>

            <li>
              {/* Only show this button if there is no user logged in */}
              {this.props.loggedIn ? null :
                <NavLink
                  to="/login"
                  exact
                  // style={inactive}
                  // activeStyle={active}
                  className="nav-links-a"
                >Login</NavLink>
              }
            </li>

            <li>
              {/* Only show this button if there is no user logged in */}
              {this.props.loggedIn ? null :
                <NavLink
                  to="/signup"
                  exact
                  // style={inactive}
                  // activeStyle={active}
                  className="nav-links-a"
                >SignUp</NavLink>
              }
            </li>

            <li>
              {/* Only show this button if there is no user logged in */}
              {this.props.loggedIn ?
                <NavLink
                  onClick={() => this.props.logOut()}
                  to="/"
                  exact
                  // style={inactive}
                  className="nav-links-a"
                >LogOut</NavLink>
                :
                null
              } 
            </li>
          </ul>
        </nav>
    )
  }
}

export default Navbar; 