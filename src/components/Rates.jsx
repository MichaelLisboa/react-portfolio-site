import React, { Component } from 'react';
import RatesContent from "./presentation/RatesContent.jsx";
import { NavLink } from 'react-router-dom';
import Contact from './Contact.jsx';
import '../css/Rates.css';

const headerStyles = {
    height: '30vh',
    backgroundColor: '#26a69a'
};

class Rates extends Component {
    render () {
        return (
            <React.Fragment>
                <header style={headerStyles}
                    className="uk-container uk-container-expand uk-light uk-flex uk-flex-center uk-flex-middle">
                    <div className="uk-width-2-3 uk-text-center">
                        <h3 className="header-headline uk-margin-small-left">
                            World class work.
                        </h3>
                        <p className="header-lead uk-text-lead uk-margin-remove-vertical">
                            Thailand rates.
                        </p>
                    </div>
                </header>
                <section id="priceModule" className="uk-section uk-section-large
                    uk-section-muted uk-padding-remove-top">
                    <div className="uk-container uk-container-small uk-text-center
                        uk-margin-medium-top uk-margin-large-bottom">
                        <h3 className="header-headline uk-margin-small-left uk-margin-small-right">
                            20 years of experience in creative, user experience and
                            technology at work.
                        </h3>
                        <p className="portfolio-lead uk-text-lead uk-margin-small-left uk-margin-small-right">
                             See my freelance rates below, or have
                             a <NavLink className="text-background text-background-orange
                                uk-link-reset uk-link" to={'/resume'}>
                                look at my resume
                            </NavLink>.
                        </p>
                    </div>
                    <RatesContent />
                </section>
                <Contact />
            </React.Fragment>
        );
    }
}

export default Rates;
