import React from "react";
import SkillsList from "./SkillsList";
import NotableProjects from "./NotableProjects";

const ResumeContent = props =>
    <div className="uk-grid-small uk-margin-medium-top uk-margin-remove-bottom" data-uk-grid>
        <SkillsList />
        <NotableProjects />
    </div>

export default ResumeContent;
