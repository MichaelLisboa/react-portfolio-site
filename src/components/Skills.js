import React from 'react';
import { NavLink } from 'react-router-dom';
import SkillsContent from "./presentation/SkillsContent";
import '../css/Skills.css';

const Skills = () =>
    <section className="skills-section uk-section uk-section-large uk-section-default
        uk-padding-remove-vertical uk-padding-medium-bottom@s">
        <div
            className="uk-text-center uk-container uk-container-small"
            data-uk-scrollspy="cls: uk-animation-slide-bottom-medium; target: div > *; repeat: true;">
            <h4 className="uk-heading-line text-background uk-margin-small-top uk-margin-large-bottom">
                <span>The Technocreativeologist</span>
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

export default Skills;
