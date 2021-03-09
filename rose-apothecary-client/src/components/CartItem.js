import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


class CartItem extends Component {

    state = {
        redirect: false
    }
    
    quantity = () => {
        let updateCartItem = this.props.cartItems.find(cartItem => cartItem.cart_id === this.props.user.cart.id && cartItem.item_id === this.props.item.id)
        return <h4>Quantity: {updateCartItem.quantity}</h4>
    }

    handleClick = () => {
        this.props.setCurrentItem(this.props.item)
        this.setState({ redirect: true })
    }

    render() {

        return(
            this.state.redirect ?
                <Redirect to={`item/${this.props.item.id}`} />
                :
            <div className="card" >
                <div onClick={() => this.handleClick()}>
                    <img src={this.props.item.image} alt={this.props.item.name + "image"} className="item-image"/>
                    <h2 className="item-name">{this.props.item.name}</h2>
                    <h4>{"$" + this.props.item.cost}</h4>
                    {this.quantity()}
                </div>
                <button className="item-button" onClick={() => this.props.removeFromCart(this.props.item)}>Remove from Cart</button>
            </div>
        )
    }
}

export default CartItem;