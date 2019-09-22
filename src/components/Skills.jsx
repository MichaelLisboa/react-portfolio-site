import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import SkillsContent from "./presentation/SkillsContent.jsx";
import '../css/Skills.css';


class Skills extends Component {
    render () {
        return (
            <section className="skills-section uk-section uk-section-large uk-section-default
                uk-padding-remove-vertical uk-padding-medium-bottom@s">
                <div className="uk-text-center uk-container uk-container-small">
                    <h4 className="uk-heading-line text-background
                         uk-text-capitalize uk-margin-small-top uk-margin-large-bottom">
                        <span>I'm a Technocreativeologist.</span>
                    </h4>
                    <p className="uk-margin-remove-bottom uk-margin-medium-bottom@s">
                        See my portfolio <NavLink className="text-background text-background-indigo
                        uk-link-reset uk-link uk-nowrap" to={'/portfolio'}>
                        for case studies
                    </NavLink>, or check out my <NavLink
                        className="text-background text-background-indigo
                        uk-link-reset uk-link uk-nowrap" to={'/rates'}>
                        freelance rates</NavLink>.</p>
                </div>
                <SkillsContent />
            </section>
        );
    }
}

export default Skills;
