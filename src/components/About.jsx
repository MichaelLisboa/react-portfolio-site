import React, { Component } from 'react';
import AboutContent from "./presentation/AboutContent.jsx";
import '../css/About.css';

const AboutStyles = {
    // height: '50vh',
    // backgroundSize: 'cover',
    // backgroundColor: 'red'
};

class About extends Component {
    render () {
        return (
            <React.Fragment>
                <section style={AboutStyles} className="uk-container uk-container-small">
                    <AboutContent />
                </section>
            </React.Fragment>
        );
    }
}

export default About;
