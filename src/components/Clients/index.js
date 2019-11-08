import React from 'react';
import ClientsContent from "./presentation/ClientsContent";
import './Clients.css';

const Clients = props =>
    <>
    <section className="clients-section uk-section uk-padding-small uk-background-muted">
        <div
            className="uk-container uk-container-small uk-margin-large-top"
            data-uk-scrollspy="cls: uk-animation-slide-bottom-medium; target: div > *; repeat: true;">
            <div className="uk-width-3-5@s">
                <p className="uk-h6 uk-text-muted uk-margin-small-bottom uk-text-uppercase">
                    <strong>&mdash;</strong> Pride in the company I keep
                </p>
                <p className="uk-h2 uk-margin-remove-top">
                    <span className="uk-margin-bottom uk-display-block">
                        Just some of my clients<br />(*no agency required)
                    </span>
                </p>
            </div>
        </div>
        <div className="uk-container uk-container-small">
            <ClientsContent />
        </div>
    </section>
    </>

export default Clients;
