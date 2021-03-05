import React, { Component } from 'react'
import ItemArea from './ItemArea'

class Home extends Component {


    render() {
        return (
            <div>
                <ItemArea addToCart={this.props.addToCart} items={this.props.items}/>
            </div>
        )
    }
}

export default Home