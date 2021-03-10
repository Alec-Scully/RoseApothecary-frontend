import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
// import ItemDetail from './ItemDetail'

class ItemCard extends Component {

    state = {
        redirect: false
    }

    handleAddToCart = () => {
        this.props.loggedIn ?
                this.props.addToCart(this.props.item)
            :
                (
                    alert("Please log in or sign up to add to your cart!")
                    // <Redirect to="/login"/>
                )
    }

    handleClick = () => {
        this.props.setCurrentItem(this.props.item)
        this.setState({ redirect: true })
    }

    render() {

        return (
            this.state.redirect ?
                <Redirect to={`item/${this.props.item.id}`} />
                :
                <div className="card" >
                    <div onClick={() => this.handleClick()}>
                        <img src={this.props.item.image} alt={this.props.item.name + "image"} className="item-image" />
                        <br /><br />
                        <h2 className="item-name">{this.props.item.name}</h2>
                        <br />
                        <h3>{"$" + this.props.item.cost}</h3>
                        <br />
                    </div>
                    <button className="item-button" onClick={() => this.handleAddToCart()}>Add to Cart</button>
                </div>
        )
    }
}

export default ItemCard;