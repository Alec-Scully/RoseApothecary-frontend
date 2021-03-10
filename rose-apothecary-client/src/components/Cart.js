import React, { Component } from 'react';
import CartItem from './CartItem'
import { Redirect, Link } from 'react-router-dom'

class Cart extends Component {


    calculateTotal = () => {
        let newTotal = 0
        this.props.currentCart.map( item => {
            let cartItem = this.props.cartItems.find(cartItem => cartItem.cart_id === this.props.user.cart.id && cartItem.item_id === item.id)
            let quantity = cartItem.quantity
            let subTotal = parseFloat(item.cost) * quantity
            newTotal += subTotal
        })
        
        newTotal = (Math.round(newTotal * 100) / 100).toFixed(2)
        return newTotal
    }

    render() {

        return(
            <div className="cart-container">
                <h1 className="cart-title">Your Shopping Cart</h1>
                {this.props.loggedIn ?
                    this.props.currentCart.map(item => <CartItem updateQuantity={this.props.updateQuantity} setCurrentItem={this.props.setCurrentItem} user={this.props.user} cartItems={this.props.cartItems} removeFromCart={this.props.removeFromCart} key={item.id} item={item}/>)
                :
                    (
                        alert("Please log in or sign up to see your cart"),
                        <Redirect to="/login"/>
                    )
                }   
                <h2 className="cart-total">Total: ${this.calculateTotal()}</h2>
                <Link to="/checkout" className="checkout">Checkout</Link>
            </div>
        )
    }

}

export default Cart 