import React from 'react';
import RatesContent from "./presentation/RatesContent";
import { NavLink } from 'react-router-dom';
import { PageHeader } from "../Content";
import Contact from '../Contact';
import './Rates.css';

const Rates = () =>
    <>
        <PageHeader
            theme="#26a69a"
            title="World class work."
            subtitle="Thailand rates."
        />
        <section id="priceModule" className="uk-section uk-section-muted uk-padding-remove-top">
            <div className="uk-container uk-container-small uk-text-center
                uk-margin-medium-top uk-margin-large-bottom">
                <h2 className="content-title uk-margin-large-left@s uk-margin-large-right@s">
                    20 years in Brand Experience, Creative, and Technology at work.
                </h2>
                <p className="content-lead uk-text-lead uk-margin-large-left@s uk-margin-large-right@s">
                    See my freelance rates below, or <NavLink className="text-background text-background-indigo
                        uk-link-reset uk-link uk-nowrap" to={'/contact'}>
                        contact me
                    </NavLink> for full-time opportunities. Have a look at <NavLink className="text-background
                        text-background-indigo uk-link-reset uk-link uk-nowrap" to={'/resume'}>
                        my resume
                    </NavLink> for more info about my capabilities.
                </p>
            </div>
            <RatesContent />
        </section>
        <Contact />
    </>

export default Rates;
