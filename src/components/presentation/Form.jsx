import React, { Component } from 'react';
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
        const endpoint = process.env.REACT_APP_FORMCARRY_ENDPOINT;
        const target = event.target;
        target.childNodes[0].setAttribute('disabled', '');

        const resetForm = () => {
           this.setState({
               ...this.state,
               first_name: '',
               last_name: '',
               from_email: '',
               comment: ''
           })
        }

        const body = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            from_email: this.state.from_email,
            comment: this.state.comment
        }

        let httpRequest = new XMLHttpRequest();
        httpRequest.open('POST', endpoint);
        httpRequest.setRequestHeader('Content-Type', 'application/json');
        httpRequest.setRequestHeader('Accept', 'application/json');
        httpRequest.send(JSON.stringify(body));

        httpRequest.onreadystatechange = function(){
          if(this.readyState === 4){
            let json = JSON.parse(this.response);
            if (json.status === 'success') {
                const emailResponse = {
                    title: "Received!",
                    message: "Thanks, I got your email! I'll follow up with you soon."
                };

                let msg = (
                    `<div class="uk-grid-collapse uk-margin-large-top uk-padding-remove uk-background-primary uk-light
                        uk-flex uk-flex-column uk-flex-middle uk-flex-center"
                        data-uk-height-viewport="true; offset-bottom: 20" data-uk-grid>
                        <div class="uk-padding-large uk-first-column">
                            <h1>${emailResponse.title}</h1>
                            <p class="uk-text-lead">${emailResponse.message}</p>
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

                resetForm();
                target.childNodes[0].removeAttribute('disabled');
            } else {
                UIkit.notification({
                    message: json.message,
                    status: 'danger',
                    pos: 'bottom-center',
                    timeout: 5000
                });
                resetForm();
                target.childNodes[0].removeAttribute('disabled');
            }
          }
        }
    };

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
