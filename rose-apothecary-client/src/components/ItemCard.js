import React, { Component } from 'react';
import { BrowserRouter as Redirect } from 'react-router-dom';
import ItemDetail from './ItemDetail'

class ItemCard extends Component {

    handleClick = () => {
        {console.log("click")}
        <Redirect to={`/products/${this.props.item.id}`}/>

    }

    render() {

        return(
            <div className="card" >
                <div onClick={() => this.handleClick()}>
                    <img src={this.props.item.image} alt={this.props.item.name + "image"} className="item-image"/>
                    <h2>{this.props.item.name}</h2>
                    <h4>{this.props.item.cost}</h4>
                </div>
                <button onClick={() => this.props.addToCart(this.props.item)}>Add to Cart</button>
            </div>
        )
    }
}

export default ItemCard;