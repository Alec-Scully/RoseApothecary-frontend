import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
// import ItemDetail from './ItemDetail'

class ItemCard extends Component {

    state = {
        redirect: false
    }

    handleAddToCart = () => {
        console.log(this.props.loggedIn)
        this.props.loggedIn ?
            this.props.addToCart(this.props.item)
            :
            alert("Please log in or sign up to add to your cart!")
    }

    handleClick = () => {
        this.setState({ redirect: true })

        { console.log("Clicked") }
    }

    display = () => {
        return (
        <div className="card" >
            <div onClick={() => this.handleClick()}>
                <img src={this.props.item.image} alt={this.props.item.name + "image"} className="item-image" />
                <h2>{this.props.item.name}</h2>
                <h4>{"$" + this.props.item.cost}</h4>
            </div>
            <button onClick={() => this.handleAddToCart()}>Add to Cart</button>
        </div>
        )
    }

    render() {

        return (
            // <Redirect to={`item/${this.props.item.id}`}>
            // <Redirect to="/about">
            this.state.redirect ? 
                <Redirect to={`item/${this.props.item.id}`}/>
            :
                this.display()
        )
    }
}

export default ItemCard;