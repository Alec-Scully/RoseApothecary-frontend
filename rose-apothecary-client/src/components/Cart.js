import React, { Component } from 'react';
import CartItem from './CartItem'

class Cart extends Component {

    render() {

        return(
            <div>
                {this.props.currentCart.map(item => <CartItem removeFromCart={this.props.removeFromCart} key={item.id} item={item}/>)}
            </div>
        )
    }

}

export default Cart 