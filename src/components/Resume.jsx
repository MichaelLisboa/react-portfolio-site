import React from 'react';
import ResumeContent from "./presentation/ResumeContent.jsx";
import Contact from './Contact.jsx';
import '../css/Resume.css';

const Resume = props =>
    <>
        <header style={{height: '30vh', backgroundColor: '#ef5350'}}
            className="uk-container uk-container-expand uk-light
            uk-flex uk-flex-center uk-flex-middle">
            <div className="uk-width-4-5 uk-width-2-3@ uk-text-center">
                <h2>
                    These are my creds, because it's expected.
                </h2>
                <p className="header-lead uk-text-lead uk-margin-remove-vertical">
                    But, I'm not.
                </p>
            </div>
        </header>
        <section className="uk-container uk-container-small">
            <ResumeContent />
        </section>
        <Contact />
    </>

export default Resume;
