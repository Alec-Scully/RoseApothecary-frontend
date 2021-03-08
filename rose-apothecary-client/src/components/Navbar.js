import React from 'react'
import { NavLink } from 'react-router-dom';
import '../index.css';

class Navbar extends React.Component {
  render() {
    return (
      <div className="sticky-nav">
        <nav >
          <ul className="nav-links">
            <li>
              <NavLink
                to="/"
                exact
                className="nav-links-a"
                activeClassName="active"
              >Home</NavLink>
            </li>

            <div className="split" />

            <li>
              <NavLink
                to="/about"
                exact
                className="nav-links-a"
                activeClassName="active"
              >About</NavLink>
            </li>

            <div className="split" />

            <li>
              <NavLink
                to="/cart"
                exact
                className="nav-links-a"
                activeClassName="active"
              >Cart</NavLink>
            </li>

            {this.props.loggedIn ? null :
              <div className="split" />
            }

            {this.props.loggedIn ?
              <div className="split" />
              :
              <li>
                {/* Only show this button if there is no user logged in */}
                <NavLink
                  to="/login"
                  exact
                  className="nav-links-a"
                  activeClassName="active"
                >Login</NavLink>
              </li>
            }
            
            {this.props.loggedIn ? null :
              <div className="split" />
            }

            {this.props.loggedIn ? null :
              <li>
                {/* Only show this button if there is no user logged in */}
                <NavLink
                  to="/signup"
                  exact
                  className="nav-links-a"
                  activeClassName="active"
                >SignUp</NavLink>
              </li>
            }

            {this.props.loggedIn ?
              <li>
                {/* Only show this button if there is no user logged in */}
                <NavLink
                  onClick={() => this.props.logOut()}
                  to="/"
                  exact
                  className="nav-links-a"
                  activeClassName="logout-active"
                >LogOut</NavLink>
              </li>
              :
              null
            }
          </ul>
        </nav>
      </div>
    )
  }
}

export default Navbar;

            // <li>
            //   <NavLink
            //     to="/"
            //     exact
            //     className="nav-links-a"
            //   >Home</NavLink>
            // </li>

            // <li>
            //   <NavLink
            //     to="/about"
            //     exact
            //     className="nav-links-a"
            //   >About</NavLink>
            // </li>

            // <li>
            //   <NavLink
            //     to="/cart"
            //     exact
            //     className="nav-links-a"
            //   >Cart</NavLink>
            // </li>

            // <li>
            //   {/* Only show this button if there is no user logged in */}
            //    {this.props.loggedIn ? null :
            //      <NavLink
            //        to="/login"
            //        exact


            //        className="nav-links-a"
            //      >Login</NavLink>
            //    }
            //  </li>

            //  <li>
            //    {/* Only show this button if there is no user logged in */}
            //    {this.props.loggedIn ? null :
            //      <NavLink
            //        to="/signup"
            //        exact


            //        className="nav-links-a"
            //      >SignUp</NavLink>
            //    }
            //  </li>

            //  <li>
            //    {/* Only show this button if there is no user logged in */}
            //    {this.props.loggedIn ?
            //      <NavLink
            //        onClick={() => this.props.logOut()}
            //        to="/"
            //        exact

            //        className="nav-links-a"
            //      >LogOut</NavLink>
            //      :
            //      null
            //    }
            // </li>



            // <li>
            //   <a href="/">Home</a>
            // </li>

            // <li>
            //   <a href="/about">About</a>
            // </li>

            // <li>
            //   <a href="/cart">Cart</a>
            // </li>

            // {this.props.loggedIn ? null :
            //   <li>
            //     <a href="/login">Login</a>
            //   </li>
            // }

            // {this.props.loggedIn ? null :
            //   <li>
            //     <a href="/signup">Sign Up</a>
            //   </li>
            // }

            // {this.props.loggedIn ?
            //   <li >
            //     <a href="/" >Sign Out</a>
            //   </li>
            //   :
            //   null
            // }