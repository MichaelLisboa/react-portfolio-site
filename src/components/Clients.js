import React, { Component } from 'react';
import ClientsContent from "./presentation/ClientsContent";
import '../css/Clients.css';

const ClientsStyles = {
    backgroundColor: '#f6f6f6'
};

class Clients extends Component {
    render () {
        return (
            <section style={ClientsStyles} className="clients-section uk-section uk-padding-small">
                <div className="uk-text-center uk-container uk-container-small">
                    <h4 className="uk-heading-line text-background
                         uk-text-capitalize uk-margin-medium-top uk-margin-remove-bottom">
                        <span>{this.props.clientsTitle}</span>
                    </h4>
                </div>
                <div className="uk-container uk-container-small">
                    <ClientsContent />
                </div>
            </section>
        );
    }
}

export default Clients;
