import React from 'react';
import { NavLink } from 'react-router-dom';
import SkillsContent from "./presentation/SkillsContent";
import '../css/Skills.css';

const Skills = () =>
    <section className="skills-section uk-section uk-section-large uk-section-default
        uk-padding-remove-vertical uk-padding-medium-bottom@s">
        <div
            className="uk-container uk-container-small"
            data-uk-scrollspy="cls: uk-animation-slide-bottom-medium; target: div > *; repeat: true;">
            <h4 className="uk-heading-line text-background uk-margin-small-top uk-margin-large-bottom uk-text-center">
                <span>The Things I Can Do For You</span>
            </h4>
            <div className="skills-section-intro">
                <p>
                    Depending on who you ask, they might say I'm a <span className="uk-text-nowrap">Creative Director</span>, Full-stack Programmer, <span className="uk-text-nowrap">UX Specialist</span>, or even TechnoCreativeologist.
                </p>
                <p className="uk-margin-remove-bottom uk-margin-medium-bottom@s">Have a <NavLink className="text-background text-background-indigo
                    uk-link-reset uk-link uk-nowrap" to={'/portfolio'}>
                    look at my work
                </NavLink>, you'll find that I'm all of the above.
                </p>
            </div>
        </div>
        <SkillsContent />
    </section>

export default Skills;
