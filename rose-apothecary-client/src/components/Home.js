import React, { Component } from 'react'
import ItemArea from './ItemArea'

class Home extends Component {


    render() {
        return (
            <div>
                <ItemArea setCurrentItem={this.props.setCurrentItem} loggedIn={this.props.loggedIn} addToCart={this.props.addToCart} items={this.props.items}/>
            </div>
        )
    }
}

export default Home