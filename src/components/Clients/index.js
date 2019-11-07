import React from 'react';
import ClientsContent from "./presentation/ClientsContent";
import './Clients.css';

const Clients = props =>
    <section className="clients-section uk-section uk-padding-small uk-background-muted">
        <div className="uk-text-center uk-container uk-container-small">
            <h4 className="uk-heading-line text-background
                 uk-text-capitalize uk-margin-medium-top uk-margin-remove-bottom">
                <span>Pride in the Company I Keep</span>
            </h4>
            <p className="uk-h6 uk-text-small uk-text-muted uk-padding-remove uk-margin-remove-top">
                Some of my personal clients <small className="uk-text-muted"> (*no agency required)</small>
            </p>
        </div>
        <div className="uk-container uk-container-small">
            <ClientsContent />
        </div>
    </section>

export default Clients;
