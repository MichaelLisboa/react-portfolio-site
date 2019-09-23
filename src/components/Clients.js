import React from 'react';
import ClientsContent from "./presentation/ClientsContent";
import '../css/Clients.css';

const Clients = props =>
    <section className="clients-section uk-section uk-padding-small uk-background-muted">
        <div className="uk-text-center uk-container uk-container-small">
            <h4 className="uk-heading-line text-background
                 uk-text-capitalize uk-margin-medium-top uk-margin-remove-bottom">
                <span>{props.clientsTitle}</span>
            </h4>
        </div>
        <div className="uk-container uk-container-small">
            <ClientsContent />
        </div>
    </section>

export default Clients;
