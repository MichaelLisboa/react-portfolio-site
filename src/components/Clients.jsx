import React, { Component } from 'react';
import ClientsContent from "./presentation/ClientsContent.jsx";
import '../css/Clients.css';

const ClientsStyles = {
    backgroundColor: '#f6ffff'
};

class Clients extends Component {
    render () {
        return (
            <section style={ClientsStyles} className="uk-section uk-padding-small">
                <div className="uk-container uk-container-small uk-text-center">
                    <h3 className="text-background text-background-blue uk-section-title uk-display-inline-block
                        uk-text-center uk-text-capitalize uk-padding-small uk-padding-remove-bottom
                        uk-margin-remove-bottom">
                        {this.props.clientsTitle}
                    </h3>
                </div>
                <div className="uk-container uk-container-small">
                    <ClientsContent />
                </div>
            </section>
        );
    }
}

export default Clients;
