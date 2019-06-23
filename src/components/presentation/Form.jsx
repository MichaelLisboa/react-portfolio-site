import React, { Component } from 'react';
// import { FormErrors } from './FormErrors.jsx';
import UIkit from 'uikit';
import '../../css/Contact.css';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            from_email: '',
            comment: '',
            formErrors: {
                first_name: '',
                last_name: '',
                from_email: '',
                comment: '',
                title: ''
            },
            firstNameValid: false,
            lastNameValid: false,
            emailValid: false,
            commentValid: false,
            formValid: false
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        },
        () => {
            this.validateField(name, value)
        });
    }

    handleUserInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
                [name]: value
            },
            () => {
                this.validateField(name, value)
            });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // let endpoint = 'https://www.influense.me/api/contact/';
        let endpoint = 'https://briskforms.com/go/8a383f199cbc27fa5faabd1a3d4fb0b1';
        let target = event.target;
        target.childNodes[0].setAttribute('disabled', '');

        fetch(endpoint, {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify(this.state)
        })
            .then(response => response.json())
            .then(json => {
                console.log("RESPONSE", json)
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
                console.log("ERROR", error, error.message)
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
    };

    resetForm = () => {
       this.setState({
           ...this.state,
           first_name: '',
           last_name: '',
           from_email: '',
           comment: ''
       })
    }

    validateField = (fieldName, value) => {
        let fieldValidationErrors = this.state.formErrors;
        let firstNameValid = this.state.firstNameValid;
        let lastNameValid = this.state.lastNameValid;
        let emailValid = this.state.emailValid;
        let commentValid = this.state.commentValid;

        switch (fieldName) {
            case 'first_name':
                firstNameValid = value.length >= 1;
                fieldValidationErrors.first_name = firstNameValid ? '' : ' is too short';
                break;
            case 'last_name':
                lastNameValid = value.length >= 1;
                fieldValidationErrors.last_name = lastNameValid ? '' : ' is too short';
                break;
            case 'from_email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.from_email = emailValid ? '' : ' is invalid';
                break;
            case 'comment':
                commentValid = value.length >= 15;
                fieldValidationErrors.comment = commentValid ? '' : ' is too short';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            firstNameValid: firstNameValid,
            lastNameValid: lastNameValid,
            emailValid: emailValid,
            commentValid: commentValid
        }, this.validateForm);
    }

    validateForm = () => {
        this.setState({
            formValid: this.state.firstNameValid &&
                        this.state.lastNameValid &&
                        this.state.emailValid &&
                        this.state.commentValid

        });
    }

    errorClass = (error) => {
        return (error.length === 0 ? '' : 'uk-form-danger');
    }

    render () {
        return (
            <form
                id="contactForm"
                className="uk-form"
                onSubmit={this.handleSubmit}>
                <fieldset className="uk-fieldset">
                    <div className="uk-margin-small-top">
                        <label htmlFor="first_name" className="uk-text-muted">
                            First name
                            <input
                                name="first_name"
                                type="text"
                                value={this.state.first_name}
                                className={`uk-input uk-form-large ${this.errorClass(this.state.formErrors.first_name)}`}
                                maxLength="75"
                                required
                                onChange={this.handleInputChange}
                                onBlur={this.handleUserInput}
                                onFocus={this.handleInputFocus}
                            />
                        </label>
                    </div>
                    <div className="uk-margin-small-top">
                        <label htmlFor="last_name" className="uk-text-muted">
                            Last name
                            <input
                                name="last_name"
                                type="text"
                                value={this.state.last_name}
                                className={`uk-input uk-form-large ${this.errorClass(this.state.formErrors.last_name)}`}
                                maxLength="75"
                                required
                                onChange={this.handleInputChange}
                                onBlur={this.handleUserInput}
                                onFocus={this.handleInputFocus}
                            />
                        </label>
                    </div>
                    <div className="uk-margin-small-top">
                        <label htmlFor="from_email" className="uk-text-muted">
                            Email address
                            <input
                                name="from_email"
                                type="text"
                                value={this.state.from_email}
                                className={`uk-input uk-form-large ${this.errorClass(this.state.formErrors.from_email)}`}
                                maxLength="100"
                                required
                                onChange={this.handleInputChange}
                                onBlur={this.handleUserInput}
                                onFocus={this.handleInputFocus}
                            />
                        </label>
                    </div>
                    <div className="uk-margin-small-top">
                        <label htmlFor="comment" className="uk-text-muted">
                            Your message
                            <textarea
                                name="comment"
                                rows="3"
                                className={`uk-textarea uk-form-large ${this.errorClass(this.state.formErrors.comment)}`}
                                value={this.state.comment}
                                maxLength="1000"
                                required
                                onChange={this.handleInputChange}
                                onBlur={this.handleUserInput}
                                onFocus={this.handleInputFocus}
                            />
                        </label>
                    </div>
                    <div className="uk-margin-large-bottom uk-margin-medium-top uk-text-right">
                        <button type="submit" className="uk-button uk-button-secondary uk-width-1-2 uk-width-1-3@s" disabled={!this.state.formValid}>Send</button>
                    </div>
                </fieldset>
            </form>
        )
    }
}

export default Form;
