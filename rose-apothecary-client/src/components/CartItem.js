import React, { Component } from 'react';


class CartItem extends Component {

    render() {

        return(
            <div className="card" >
                <div >
                    <img src={this.props.item.image} alt={this.props.item.name + "image"} className="item-image"/>
                    <h2>{this.props.item.name}</h2>
                    <h4>{this.props.item.cost}</h4>
                </div>
                <button onClick={() => this.props.removeFromCart(this.props.item)}>Remove from Cart</button>
            </div>
        )
    }
}

export default CartItem;