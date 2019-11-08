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
            title={`World class work.\nThailand rates.`}
            subtitle="Twenty years in user experience, brand strategy, and technology at work for you."
        />
        <section className="uk-section uk-padding-remove-top">
            <div className="uk-container uk-container-small
                uk-margin-medium-top uk-margin-bottom">
                <div className="uk-width-3-5@m">
                    <p>
                        See my freelance rates below, or <NavLink className="text-background text-background-indigo
                            uk-link-reset uk-link uk-nowrap" to={'/contact'}>
                            contact me
                        </NavLink> for full-time opportunities. Have a look at <NavLink className="text-background
                            text-background-indigo uk-link-reset uk-link uk-nowrap" to={'/resume'}>
                            my resume
                        </NavLink> for more info about my capabilities.
                    </p>
                </div>
            </div>
        </section>
        <section id="priceModule" className="uk-section uk-section-muted">
        <RatesContent />
        </section>
        <Contact />
    </>

export default Rates;
