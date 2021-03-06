import React, { Component } from 'react';
import CartItem from './CartItem'
import { Redirect } from 'react-router-dom'

class Cart extends Component {

    render() {

        return(
            <div>
                {this.props.loggedIn ?
                    this.props.currentCart.map(item => <CartItem user={this.props.user} cartItems={this.props.cartItems} removeFromCart={this.props.removeFromCart} key={item.id} item={item}/>)
                :
                    (
                        alert("Please log in or sign up to see your cart"),
                        <Redirect to="/"/>
                    )
                }   
            </div>
        )
    }

}

export default Cart 