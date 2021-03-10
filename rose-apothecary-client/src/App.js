import './App.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar'
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import About from "./components/About";
import Cart from "./components/Cart";
import ItemDetail from "./components/ItemDetail";
import Checkout from "./components/Checkout";

class App extends Component {
  state = {
    user: {},
    loggedIn: false,
    items: [],
    currentCart: [],
    cartItems: [],
    itemDetail: "",
    currentItem: {}
  }

  setCurrentUser = (user) => {
    console.log(user)
    this.setState({
      user: user,
      loggedIn: true,
      currentCart: [...user.cart.items]
    })
  }

  logOut = () => {
    this.setState({
      user: {},
      loggedIn: false,
      currentCart: []
    })
    localStorage.token = ""
  }

  componentDidMount = () => {
    let token = localStorage.token
    if (typeof token !== "undefined" && token.length > 1) {
      this.tokenLogin(token)
    } else {
      console.log("No token found, try logging in!")
    }

    fetch("http://localhost:3000/items")
      .then(res => res.json())
      .then(itemData => this.setState({ items: itemData }))

    fetch("http://localhost:3000/cart_items")
      .then(res => res.json())
      .then(cartItemData => this.setState({ cartItems: cartItemData }))

  }

  tokenLogin = (token) => {
    fetch("http://localhost:3000/auto_login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ token: token })
    })
      .then(res => res.json())
      .then(user => this.setCurrentUser(user))
  }

  displayGreeting = () => {
    return (
      <div className="greeting">
        {this.state.loggedIn ?
          <h3>Welcome back, {this.state.user.username}!</h3>
          :
          null
        }
      </div>
    )
  }

  addToCart = (item) => {
    let t = this.state.currentCart.map(test => test.name === item.name)

    if (t.includes(true)) {
      let updateCartItem = this.state.cartItems.find(cartItem => cartItem.cart_id === this.state.user.cart.id && cartItem.item_id === item.id)
      let updateQuantity = updateCartItem.quantity += 1
      let sendItem = {
        "quantity": updateQuantity
      }

      let reqPackage = {}
      reqPackage.headers = { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.token}` }
      reqPackage.method = "PATCH"
      reqPackage.body = JSON.stringify(sendItem)

      fetch("http://localhost:3000/cart_items/" + updateCartItem.id, reqPackage)
        .then(res => res.json())

    } else {
      this.setState({ currentCart: [...this.state.currentCart, item] })

      let newItem = {
        cart_id: this.state.user.cart.id,
        item_id: item.id,
        quantity: 1
      }

      let reqPackage = {}
      reqPackage.headers = { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.token}` }
      reqPackage.method = "POST"
      reqPackage.body = JSON.stringify(newItem)

      fetch("http://localhost:3000/cart_items", reqPackage)
        .then(res => res.json())
        .then(newCartItem => this.setState({ cartItems: [...this.state.cartItems, newCartItem] }))
    }
    <Redirect to={"/cart"} />
  }

  removeFromCart = (oldItem) => {
    let newCart = this.state.currentCart.filter(item => item !== oldItem)
    this.setState({ currentCart: newCart })
    let delCartItem = this.state.cartItems.find(cartItem => cartItem.cart_id === this.state.user.cart.id && cartItem.item_id === oldItem.id)
    let newCartItems = this.state.cartItems.filter(cartItem => cartItem !== delCartItem)
    this.setState({ cartItems: newCartItems })

    fetch("http://localhost:3000/cart_items/" + delCartItem.id, {
      method: "DELETE"
    })

  }

  setCurrentItem = (item) => {
    this.setState({ currentItem: item })
  }

  render() {
    return (
      <div >
        <img className="logo" src="https://i.imgur.com/eaqGD3H.jpg" alt="Rose Apothecary Logo" width="500" />
        <div className="rose-border"/>
        <Router>
          <Navbar logOut={this.logOut} loggedIn={this.state.loggedIn} />
          {/* {this.displayGreeting()} */}

          <Route exact path="/">
            <Home setCurrentItem={this.setCurrentItem} loggedIn={this.state.loggedIn} addToCart={this.addToCart} items={this.state.items} />
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

          <Route exact path="/cart">
            <Cart updateQuantity={this.updateQuantity} setCurrentItem={this.setCurrentItem} loggedIn={this.state.loggedIn} user={this.state.user} cartItems={this.state.cartItems} removeFromCart={this.removeFromCart} currentCart={this.state.currentCart} />
          </Route>

          <Route path="/item/" render={routerProps => <ItemDetail {...routerProps} item={this.state.currentItem} addToCart={this.addToCart} loggedIn={this.state.loggedIn} />} />

          <Route path="/checkout">
            <Checkout user={this.state.user}/>
          </Route>

        </Router>
        <div className="footer">
              {/* <p>this is my footer</p> */}
              {/* <img src="https://www.artistshot.com/assets-3/images/admin/designs/286115/286115-250x250.png" alt="second logo" /> */}
        </div>
      </div>
    );
  }
}

export default App;
