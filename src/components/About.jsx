import React, { Component, Fragment } from 'react';
import AboutContent from "./presentation/AboutContent.jsx";
import '../css/About.css';

const AboutStyles = {
    // height: '80vh'
};

class About extends Component {
    render () {
        return (
            <Fragment>
            <section style={AboutStyles} className="uk-flex uk-flex-middle uk-flex-center">
                <div className="uk-container uk-container-small">
                    <AboutContent />
                </div>
            </section>
            </Fragment>
        );
    }
}

export default About;
