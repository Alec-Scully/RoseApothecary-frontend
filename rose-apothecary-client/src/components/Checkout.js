import React, { Component } from 'react';

class Checkout extends Component {

    render() {

        return(
            <div className="checkout-container">
                <div className="checkout-card">
                    <h1>Ew, {this.props.user.first_name}!</h1>
                    <h3>You have reached the end of this demo!</h3>
                    <p>Thank you so much for taking the time to click through my Flatiron Phase 5 project!</p>
                    <p>On a more legal note, I do not own and am not officially selling any of these items shown on this site. All names, prices, descriptions, and images are not owned by me.</p>
                    <p>For this project I used a Ruby on Rails backend API and a React frontend that utilizes JWT Auth.</p> 
                </div>
            </div>
        )
    }
}

export default Checkout;