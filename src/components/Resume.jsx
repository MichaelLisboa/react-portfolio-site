import React, { Component } from 'react';
import ResumeContent from "./presentation/ResumeContent.jsx";
import Contact from './Contact.jsx';
import '../css/Resume.css';

const headerStyles = {
    // 'backgroundImage': `url(${Background})`,
    height: '30vh',
    backgroundColor: '#ef5350'
    // 'backgroundSize': 'cover'
}

class Resume extends Component {
    render () {
        return (
            <React.Fragment>
                <header style={headerStyles}
                    className="uk-container uk-container-expand uk-light
                    uk-flex uk-flex-center uk-flex-middle">
                    <div className="uk-width-4-5 uk-width-2-3@ uk-text-center">
                        <h3 className="header-headline">
                            These are my creds, because it's expected.
                        </h3>
                        <p className="header-lead uk-text-lead uk-margin-remove-vertical">
                            But, I'm not.
                        </p>
                    </div>
                </header>
                <section className="uk-container uk-container-small">
                    <ResumeContent />
                </section>
                <Contact />
            </React.Fragment>
        );
    }
}

export default Resume;
