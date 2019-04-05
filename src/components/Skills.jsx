import React, { Component } from 'react';
import SkillsContent from "./presentation/SkillsContent.jsx";
import '../css/Skills.css';


class Skills extends Component {
    render () {
        return (
            <section className="skills-section uk-section uk-section-large uk-section-default
                uk-padding-remove-vertical uk-padding-medium-bottom@s">
                <div className="uk-text-center uk-container">
                    <h3 className="text-background text-background-green uk-display-inline-block
                        uk-section-title uk-text-center uk-text-capitalize uk-margin-remove-bottom">
                        {this.props.skillsTitle}
                    </h3>
                </div>
                <SkillsContent />
            </section>
        );
    }
}

export default Skills;
