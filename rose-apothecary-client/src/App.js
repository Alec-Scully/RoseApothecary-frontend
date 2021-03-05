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

class App extends Component {
  state = {
    user: {},
    loggedIn: false,
    items: [],
    currentCart: [],
    cartItems: []
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
    .then(itemData => this.setState({items: itemData}))

    fetch("http://localhost:3000/cart_items")
    .then(res => res.json())
    .then(cartItemData => this.setState({cartItems: cartItemData}))
    
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
    return (
      <div>
        <h1>Hi! It's working!</h1>
        {this.state.loggedIn ? 
          <h1>Hi {this.state.user.username}!</h1>
          :
          null
        }
      </div>
    )
  }

  addToCart = (item) => {
    let t = this.state.currentCart.map(test => test.name === item.name)
    console.log(t)
    // debugger

    // if (t[0]) {
    // if (this.state.currentCart.includes(item)) {
    if (t.includes(true)) {
      // debugger
      let updateCartItem = this.state.cartItems.find(cartItem => cartItem.cart_id === this.state.user.cart.id && cartItem.item_id === item.id)
      let updateQuantity = updateCartItem.quantity += 1
      console.log("in cart " + updateQuantity)
      let sendItem = {
        "quantity" : updateQuantity
      }

      let reqPackage = {}
        reqPackage.headers = { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.token}` }
        reqPackage.method = "PATCH"
        reqPackage.body = JSON.stringify(sendItem)

      fetch("http://localhost:3000/cart_items/" + updateCartItem.id, reqPackage)
      .then(res => res.json())

    } else {
      console.log("not in cart")
      this.setState({currentCart: [...this.state.currentCart, item]})
      
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
        .then(newCartItem => this.setState({cartItems: [...this.state.cartItems, newCartItem]}))
    }    
  }

  removeFromCart = (oldItem) => {
    console.log(oldItem.name + " removed! " + oldItem.id)
    let newCart = this.state.currentCart.filter(item => item !== oldItem)
    this.setState({currentCart: newCart})
    let delCartItem = this.state.cartItems.find(cartItem => cartItem.cart_id === this.state.user.cart.id && cartItem.item_id === oldItem.id)
    let newCartItems = this.state.cartItems.filter(cartItem => cartItem !== delCartItem)
    this.setState({cartItems: newCartItems})

    fetch("http://localhost:3000/cart_items/" + delCartItem.id, {
      method: "DELETE"
    })

  }

  render() {
    return (
      <div >
        <Router>
          <Navbar logOut={this.logOut} loggedIn={this.state.loggedIn}/>
          {this.displayGreeting()}

          <Route exact path="/">
            <Home addToCart={this.addToCart} items={this.state.items} />
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
            <Cart user={this.state.user} cartItems={this.state.cartItems} removeFromCart={this.removeFromCart} currentCart={this.state.currentCart}/>
          </Route>

          <Route exact path="/products/:id">
              <ItemDetail />
          </Route>
          
        </Router>
      </div>
    );
  }
}

export default App;
