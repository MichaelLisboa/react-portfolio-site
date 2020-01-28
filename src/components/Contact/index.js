import React, { Component } from "react";
import Footer from "../Footer";
import Form from "./presentation/Form";

class Contact extends Component {

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
            <>
                <section className={`contact-section uk-section uk-section-expand ${!this.state.page && "uk-background-secondary uk-light"}`}>
                    <div
                        className="uk-container uk-container-small"
                    data-uk-scrollspy="cls: uk-animation-slide-bottom-medium; target: div > *; repeat: true;">
                        <div className="uk-width-3-5@s">
                            <p className="uk-h6 uk-text-muted uk-margin-small-bottom uk-text-uppercase">
                                <strong>&mdash;</strong> Not bound by timezones
                            </p>
                            <p className="uk-h2 uk-margin-remove-top">
                                <span className="uk-margin-bottom uk-display-block">
                                    Get in touch to talk about your next project.
                                </span>
                            </p>
                        </div>
                    </div>
                </section>
                <section
                    className={
                        `${this.state.page ?
                            "uk-section uk-section-expand uk-margin-remove-top uk-padding-remove"
                            : "uk-section uk-section-expand uk-margin-remove-top uk-padding-remove uk-background-secondary uk-light"
                        }`
                    }>
                    <div
                        className="uk-container uk-container-small"
                        uk-scrollspy={`cls: uk-animation-fade; delay: 500;`}
                    >
                        <div className="uk-grid-medium uk-child-width-1-2@m" data-uk-grid>
                            <div>
                                <p className="uk-h4">Create experiences that people love.</p>
                                <p>I work with future-thinking brands, agencies and startups looking to create the next killer product or campaign.</p>
                                <p>If that sounds like you, get in touch.</p>
                                <div className="uk-width-1-1 uk-margin-medium-top" data-uk-grid>
                                    <div className="sc-only uk-width-1-1" data-uk-grid>
                                        <div className="uk-align-left">
                                            <a href="https://github.com/MichaelLisboa"
                                            className="uk-icon-button uk-margin-right" data-uk-icon="github"><span>GitHub</span></a>
                                            <a href="http://michael_lisboa.dribbble.com/"
                                            className="uk-icon-button uk-margin-right" data-uk-icon="dribbble"><span>Dribbble</span></a>
                                            <a href="https://www.instagram.com/michael__lisboa/"
                                            className="uk-icon-button uk-margin-right" data-uk-icon="instagram"><span>Instagram</span></a>
                                            <a href="https://www.linkedin.com/in/lisboa/"
                                            className="uk-icon-button" data-uk-icon="linkedin"><span>LinkedIn</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="uk-h4">
                                    <span className="uk-float-left uk-margin-small-right" data-uk-icon="icon: mail; ratio: 1.75" />
                                    <span>Send an email</span>
                                </p>
                                <Form />
                            </div>
                        </div>
                    </div>
                </section>
                <Footer className={`${!this.state.page ? "uk-background-secondary uk-light" : "uk-link-reset"}`} />
            </>
        );
    }
}

export default Contact;
