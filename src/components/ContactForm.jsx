import React, { Component } from 'react';
import Contact from './Contact.jsx';
import '../css/Contact.css';
import UIkit from 'uikit';
const footerStyles = {
    // backgroundColor: '#37474f'
};

const headerStyles = {
    height: '30vh',
    backgroundColor: '#37474f'
}

class ContactForm extends Component {

    constructor (props) {
        super(props);

        this.state = {
            first_name: '',
            last_name: '',
            from_email: '',
            message: '',
            title: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.getCurrentPage = this.getCurrentPage.bind(this);
    }

    componentDidMount (props) {
        this.getCurrentPage()
    }

    getCurrentPage (props) {
        this.setState({
            page: ''
        });
        // console.log("MONKEY", this.props.location.pathname)
        if (!this.props.location) return;
        this.setState({
            page: this.props.location.pathname
        })
    }


    resetForm = () => {
        document.getElementById('contactForm').reset();
    }

    handleInputChange (event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit (event) {
        event.preventDefault();
        let endpoint = 'https://www.influense.me/api/contact/';
        let target = event.target;
        target.childNodes[0].setAttribute('disabled', '');

        fetch(endpoint, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
            .then(response => response.json())
            .then(json => {
                this.setState({
                    message: json.message
                });
                if (json.status === 'success') {
                    this.setState({
                        title: "Received!"
                    });

                    let msg = (
                        `<div class="uk-grid-collapse uk-margin-large-top uk-padding-remove uk-background-primary uk-light
                            uk-flex uk-flex-column uk-flex-middle uk-flex-center"
                            data-uk-height-viewport="true; offset-bottom: 20" data-uk-grid>
                        	<div class="uk-padding-large uk-first-column">
                        		<h1>${this.state.title}</h1>
                        		<p class="uk-text-lead">${this.state.message}</p>
                        	</div>
                        	<div class="uk-text-center uk-margin-large-bottom uk-first-column">
                                <button class="uk-button uk-button-default uk-button-large uk-modal-close"
                                type="button">Okay</button>
                            </div>
                        </div>`
                    );

                    UIkit.modal.dialog(msg, {
                        keyboard: false,
                        bgclose: false,
                        center: true
                    });

                    this.resetForm();
                    target.childNodes[0].removeAttribute('disabled');
                } else {
                    throw this.state;
                }
            })
            .catch(error => {
                this.setState({
                    message: error.message,
                    title: "There was an error!"
                });
                UIkit.notification({
                    message: error.message,
                    status: 'danger',
                    pos: 'bottom-center',
                    timeout: 5000
                });
                this.resetForm();
                target.childNodes[0].removeAttribute('disabled');
            });
    }

    render () {
        return (
            <React.Fragment>
                { this.state.page ? (
                    <header style={headerStyles}
                        className="uk-container uk-container-expand uk-light
                        uk-flex uk-flex-center uk-flex-middle uk-margin-large-bottom">
                        <div className="uk-width-2-3 uk-text-center">
                            <h3 className="header-headline">
                                Get in touch.
                            </h3>
                        </div>
                    </header>
                ) : null}
                <section style={footerStyles}
                    className={
                        `${this.state.page ?
                            'uk-section uk-section-expand uk-margin-remove-top uk-padding-remove'
                            : 'uk-section uk-section-expand uk-margin-remove-top uk-padding-remove uk-background-secondary uk-light'
                        }`
                    }>
                    { !this.state.page ? (
                        <div className="uk-text-center uk-container">
                            <h3 className="header-headline uk-display-inline-block
                                uk-section-title uk-text-center uk-text-capitalize uk-margin-remove-bottom">
                                Let's Talk
                            </h3>
                        </div>
                    ) : null }
                    <div className="uk-container uk-container-small">
                        <div className="uk-grid-medium uk-child-width-1-2@m" data-uk-grid>
                            <div>
                                <p className="uk-text-lead">
                                    <span className="uk-float-left uk-margin-small-right" data-uk-icon="icon: world; ratio: 1.75" />
                                    <span>Not bound by timezones.</span>
                                </p>
                                <p>If you like my work, why not get in touch to chat about your next project?</p>
                                <p>I can be found on any of these great sites:</p>

                                <div className="uk-width-1-1 uk-margin-medium-top" data-uk-grid>
                                    <div className="sc-only uk-width-1-1" data-uk-grid>
                                        <div className="uk-align-left">
                                            <a href="https://www.linkedin.com/in/lisboa/"
                                                className="uk-icon-button uk-margin-right" data-uk-icon="linkedin"><span>LinkedIn</span></a>
                                            <a href="https://github.com/MichaelLisboa"
                                                className="uk-icon-button uk-margin-right" data-uk-icon="github"><span>GitHub</span></a>
                                            <a href="https://www.instagram.com/vexfluxor/"
                                                className="uk-icon-button" data-uk-icon="instagram"><span>Instagram</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="uk-text-lead">
                                    <span className="uk-float-left uk-margin-small-right" data-uk-icon="icon: mail; ratio: 1.75" />
                                    <span>Send an email.</span>
                                </p>
                                <form
                                    id="contactForm"
                                    className="uk-form"
                                    onSubmit={this.handleSubmit}>
                                    <fieldset className="uk-fieldset">
                                        <div>
                                            <label className="uk-text-muted">
                                                First name
                                                <input
                                                    name="first_name"
                                                    type="text"
                                                    className="uk-input uk-form-large"
                                                    maxLength="75"
                                                    required
                                                    onChange={this.handleInputChange}
                                                />
                                            </label>
                                        </div>
                                        <div className="uk-margin-small-top">
                                            <label className="uk-text-muted">
                                                Last name
                                                <input
                                                    name="last_name"
                                                    type="text"
                                                    className="uk-input uk-form-large"
                                                    maxLength="75"
                                                    required
                                                    onChange={this.handleInputChange}
                                                />
                                            </label>
                                        </div>
                                        <div className="uk-margin-small-top">
                                            <label className="uk-text-muted">
                                                Email address
                                                <input
                                                    name="from_email"
                                                    type="text"
                                                    className="uk-input uk-form-large"
                                                    maxLength="100"
                                                    required
                                                    onChange={this.handleInputChange}
                                                />
                                            </label>
                                        </div>
                                        <div className="uk-margin-small-top">
                                            <label className="uk-text-muted">
                                                Your message
                                                <textarea
                                                    name="message"
                                                    rows="3"
                                                    className="uk-textarea uk-form-large"
                                                    maxLength="1000"
                                                    required
                                                    onChange={this.handleInputChange}
                                                />
                                            </label>
                                        </div>
                                        <div className="uk-margin-large-bottom uk-margin-medium-top uk-text-right">
                                            <button type="submit" className="uk-button uk-button-default uk-width-1-2 uk-width-1-3@s">Send</button>
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                {this.state.page ? <Contact /> : null}
            </React.Fragment>
        );
    }
}

export default ContactForm;
