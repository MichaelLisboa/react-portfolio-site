import React from 'react';
import SkillsContent from "./presentation/SkillsContent";
import './Skills.css';
import loveIcon from '../../images/Love.png';

const Skills = () =>
    <>
    <section className="skills-section uk-section uk-section-expand uk-section-default uk-margin-large-top">
        <div
            className="uk-container uk-container-small"
            data-uk-scrollspy="cls: uk-animation-slide-bottom-medium; target: div > *; repeat: true;">
            <div className="uk-width-3-5@s">
                <p className="uk-h6 uk-text-muted uk-margin-small-bottom uk-text-uppercase">
                    <strong>&mdash;</strong> The Things I Can Do For You
                </p>
                <p className="uk-h2 uk-margin-remove-top">
                    <span className="uk-margin-bottom uk-display-block">
                        I ideate, create, and design experiences and products <span className="uk-text-nowrap">that people
                        <img className="uk-margin-small-left" src={loveIcon} height="40" width="40" alt="Love" /></span>
                    </span>
                </p>
            </div>
        </div>
    </section>
    <div className="skills-section uk-margin-remove">
        <SkillsContent />
    </div>
    </>

export default Skills;
