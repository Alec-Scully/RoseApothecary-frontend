import React, { Component } from 'react';
import '../App.css';

class ItemDetail extends Component {

    state = {
        itemId: this.props.location.pathname.split("/").pop(),
        item: {}
    }

    handleAddToCart = () => {
        console.log(this.props.loggedIn)
        this.props.loggedIn ?
            this.props.addToCart(this.props.item)
            :
            alert("Please log in or sign up to add to your cart!")
    }

    render() {
        return (
            <div className="show">
                <div className="detail-img-container">
                    <img className="detail-img" src={this.props.item.image} alt={this.props.item.name + "image"} />
                    {/* <img src={this.props.item.image} alt={this.props.item.name + "image"} /> */}
                </div>
                <div classname="detail-text-container">
                    <h1 className="detail-name">{this.props.item.name}</h1>
                    <h2 className="detail-cost">{"$" + this.props.item.cost}</h2>
                    <br />
                    <p className="detail-description">{this.props.item.description}</p>
                    <br />
                    <button className="detail-button" onClick={() => this.handleAddToCart()}>Add to Cart</button>
                    <br/>
                    <br/>
                    <h3 className="detail-category">Categories:</h3>
                    <p className="detail-category">{this.props.item.category.join(', ')}</p>
                </div>
            </div>
        )
    }
}

export default ItemDetail