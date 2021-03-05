import React, { Component } from 'react';


class CartItem extends Component {
    
    test = () => {
        let updateCartItem = this.props.cartItems.find(cartItem => cartItem.cart_id === this.props.user.cart.id && cartItem.item_id === this.props.item.id)
        return <h4>Quantity: {updateCartItem.quantity}</h4>
    }

    render() {

        return(
            <div className="card" >
                <div >
                    <img src={this.props.item.image} alt={this.props.item.name + "image"} className="item-image"/>
                    <h2>{this.props.item.name}</h2>
                    <h4>{"$" + this.props.item.cost}</h4>
                    {this.test()}
                </div>
                <button onClick={() => this.props.removeFromCart(this.props.item)}>Remove from Cart</button>
            </div>
        )
    }
}

export default CartItem;