import React, { Component, Fragment } from 'react';
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
            <Fragment>
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
                <section id="priceModule" className="uk-section uk-section-muted uk-padding-remove-top">
                    <div className="uk-container uk-container-small uk-text-center
                        uk-margin-medium-top uk-margin-large-bottom">
                        <h3 className="header-headline uk-margin-large-left@s uk-margin-large-right@s">
                            20 years of experience in Creative, UX and Technology at work.
                        </h3>
                        <p className="portfolio-lead uk-text-lead">
                            See my freelance rates below, or <NavLink className="text-background text-background-orange
                                uk-link-reset uk-link uk-nowrap" to={'/contact'}>
                                contact me
                            </NavLink> for full-time opportunities.
                        </p>
                        <p className="uk-margin-small-left uk-margin-small-right">
                            Have a <NavLink className="text-background text-background-green
                            uk-link-reset uk-link uk-nowrap" to={'/resume'}>
                            look at my resume
                            </NavLink> for more info about my capabilities.
                        </p>
                    </div>
                    <RatesContent />
                </section>
                <Contact />
            </Fragment>
        );
    }
}

export default Rates;
