import React, { Component, Fragment } from "react";
import Contact from "./Contact";
import Form from "./presentation/Form";
import "../css/Contact.css";

const footerStyles = {
    // backgroundColor: "#37474f"
};

const headerStyles = {
    height: "30vh",
    backgroundColor: "#37474f"
}

class ContactForm extends Component {

    constructor (props) {
        super(props);

        this.state = {
            first_name: "",
            last_name: "",
            from_email: "",
            message: "",
            title: ""
        };
    }

    componentDidMount (props) {
        this.getCurrentPage()
    }

    getCurrentPage = (props) => {
        this.setState({
            page: ""
        });
        if (!this.props.location) return;
        this.setState({
            page: this.props.location.pathname
        })
    }

    render () {
        return (
            <Fragment>
                { this.state.page ? (
                    <header style={headerStyles}
                        className="uk-container uk-container-expand uk-light
                        uk-flex uk-flex-center uk-flex-middle uk-margin-large-bottom">
                        <div className="uk-width-2-3 uk-text-center">
                            <h2>
                                Get in touch.
                            </h2>
                        </div>
                    </header>
                ) : null}
                <section style={footerStyles}
                    uk-scrollspy={`cls: uk-animation-fade; delay: 500;`}
                    className={
                        `${this.state.page ?
                            "uk-section uk-section-expand uk-margin-remove-top uk-padding-remove"
                            : "uk-section uk-section-expand uk-margin-remove-top uk-padding-remove uk-background-secondary uk-light"
                        }`
                    }>
                    { !this.state.page ? (
                        <div className="contact-form uk-text-center uk-container uk-container-small">
                            <h4 className="uk-heading-line text-background
                                 uk-text-capitalize uk-margin-large-top uk-margin-medium-bottom">
                                <span>Let"s Talk</span>
                            </h4>
                        </div>
                    ) : null }
                    <div className="uk-container uk-container-small">
                        <div className="uk-grid-medium uk-child-width-1-2@m" data-uk-grid>
                            <div>
                                <p className="uk-text-lead">
                                    <span className="uk-float-left uk-margin-small-right" data-uk-icon="icon: world; ratio: 1.75" />
                                    <span>Not bound by timezones</span>
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
                                            <a href="https://www.instagram.com/michael__lisboa/"
                                                className="uk-icon-button" data-uk-icon="instagram"><span>Instagram</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="uk-text-lead">
                                    <span className="uk-float-left uk-margin-small-right" data-uk-icon="icon: mail; ratio: 1.75" />
                                    <span>Send an email</span>
                                </p>
                                <Form />
                            </div>
                        </div>
                    </div>
                </section>
                {this.state.page ? <Contact /> : null}
            </Fragment>
        );
    }
}

export default ContactForm;
