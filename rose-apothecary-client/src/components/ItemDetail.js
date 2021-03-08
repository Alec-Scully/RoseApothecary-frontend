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
            <div>
                <div className="show">
                    <div >
                        <img className="detailImg" src={this.props.item.image} alt={this.props.item.name + "image"} />
                        <h1>{this.props.item.name}</h1>
                        <h2>{"$" + this.props.item.cost}</h2>
                        <h4>Category:</h4>
                        <ul>
                            {this.props.item.category.map(category => <li><p>&emsp;{category}</p></li>)}
                        </ul>
                        <br/>
                        <h4>Description:</h4>
                        <p>{this.props.item.description}</p>

                    </div>
                    <br/>
                    <button onClick={() => this.handleAddToCart()}>Add to Cart</button>
                </div>
            </div>
        )
    }
}

export default ItemDetail