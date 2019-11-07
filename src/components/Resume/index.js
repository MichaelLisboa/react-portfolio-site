import React from 'react';
import ResumeContent from "./presentation/ResumeContent";
import Contact from '../Contact';
import { PageHeader } from "../Content";
import './Resume.css';

const Resume = props =>
    <>
        <PageHeader
            theme="#ef5350"
            title="These are my creds, because it's expected."
            subtitle="But, I'm not."
        />
        <section className="uk-container uk-container-small">
            <ResumeContent />
        </section>
        <Contact />
    </>

export default Resume;
