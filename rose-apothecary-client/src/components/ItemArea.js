import React, { Component } from 'react';
import ItemCard from './ItemCard'

class ItemArea extends Component{

    render(){
    
        return(
            <div>
                {this.props.items.map((item) => <ItemCard addToCart={this.props.addToCart} key={item.id} item={item}/>)}
            </div>
        )
    }
}

export default ItemArea