import React, { Component } from 'react';
import { BrowserRouter as Redirect } from 'react-router-dom';
// import ItemDetail from './ItemDetail'

class ItemCard extends Component {

    render() {

        return(
            <div className="card" >
                <div onClick={() => <Redirect to={`/products/${this.props.item.id}`}/>}>
                    <img src={this.props.item.image} alt={this.props.item.name + "image"} className="item-image"/>
                    <h2>{this.props.item.name}</h2>
                    <h4>{"$" + this.props.item.cost}</h4>
                </div>
                <button onClick={() => this.props.addToCart(this.props.item)}>Add to Cart</button>
            </div>
        )
    }
}

export default ItemCard;