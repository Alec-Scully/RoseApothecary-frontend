import React, { Component } from 'react'

class About extends Component {


    render() {
        return (
            <div className="about-container">
                <div className="about-header">
                    <img src="https://static1.srcdn.com/wordpress/wp-content/uploads/2019/05/Schitts-Creek-Rose-Apothecary.jpg?q=50&fit=crop&w=740&h=389" alt="Rose Apothecary Front" />
                </div>
                <div className="about-mission">
                    <h1>Our Mission:</h1>
                    <br />
                    <p> Rose Apothecary started with an idea. We sought to open a business that would combine two of valuable skills: faultless taste and knowing what people want and need. Our mission is to create a branded immersive experience that would take advantage of these skills and bring the latest trends in the marketplace to the residents of Schitt's Creek. We seek to bring locally sourced and hand crafted products with excellent service to all of our clients. </p>
                </div>

                <hr /> <br />

                <h1>Meet Us:</h1>
                <br />
                <hr />
                <div className="about-d-p">
                    <div className="about-david">
                        <div className="about-david-text-container">
                            <h1>David Rose</h1>
                            <br />
                            <p>David is a former New York City gallerist who curated many avant-garde exhibitions and performance art pieces. The self-described black sheep of the Rose family, David originally tried to cope with his small town life with trademark bitterness. But it was hard for David to keep up the sour attitude once Patrick—his business and rhusband—was at his side. His sarcasm belies a deep knowledge of design and aesthetic, a craftsman’s eye for detail, and an impressive business acumen; all of which was applied with the original idea and opening of Rose Apothecary.</p>
                        </div>
                        <div className="about-david-image-container">
                            <img src="https://www.cbc.ca/schittscreek/content/images/people/david-s5.jpg" alt="david-rose-headshot" />
                        </div>
                    </div>

                    <hr />

                    <div className="about-patrick">
                        <div className="about-patrick-image-container">
                            <img src="https://www.cbc.ca/schittscreek/content/images/people/patrick-s4.jpg" alt="patrick-brewer-headshot" />
                        </div>
                        <div className="about-patrick-text-container">
                            <h1>Patrick Brewer</h1>
                            <br />
                            <p> Thoughtful, practical and business-savvy, Patrick perfectly complements David’s creative energy. As David’s husband and business partner, Patrick juggles their need for structure and routine with David’s desire for adventure. Patrick’s self-assured confidence overshadows the fact that he’s still coming to terms with his new lifestyle, but Patrick isn’t one to run from his problems— he decides to face them head-on. And with David by his side, he feels like anything is possible. </p>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        )
    }
}

export default About