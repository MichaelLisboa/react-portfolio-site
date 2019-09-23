import React from "react";

const SkillsList = props =>
    <aside className="skills-list uk-width-1-3@m uk-flex-last">
        <h3 className="uk-margin-bottom">Agency Experience</h3>
        <div className="uk-margin-medium-top">
            <h6 className="title uk-text-uppercase uk-margin-small-bottom">
                <span className="uk-text-bold">Kizmo</span><br />
                <small className="uk-text-muted">
                    Technocreativeologist<br />Feb 2005&mdash;June 2018
                </small>
            </h6>

            <h6 className="title uk-text-uppercase uk-margin-remove-top uk-margin-small-bottom">
                <span className="uk-text-bold">Havas Worldwide</span><br />
                <small className="uk-text-muted">
                    Regional Experience Director, Asia Pacific<br />May 2015&mdash;Mar 2016
                </small>
            </h6>

            <h6 className="title uk-text-uppercase uk-margin-remove-top uk-margin-small-bottom">
                <span className="uk-text-bold">Publicis (contract)</span><br />
                <small className="uk-text-muted">
                    Director of User Experience, Singapore<br />Feb 2015&mdash;June 2015
                </small>
            </h6>

            <h6 className="title uk-text-uppercase uk-margin-remove-top uk-margin-small-bottom">
                <span className="uk-text-bold">Dentsu</span><br />
                <small className="uk-text-muted">
                    Regional Creative Director, Southeast Asia<br />Apr 2015&mdash;Dec 2015
                </small>
            </h6>

            <h6 className="title uk-text-uppercase uk-margin-remove-top uk-margin-small-bottom">
                <span className="uk-text-bold">Twentysix (MSQ Partners)</span><br />
                <small className="uk-text-muted">
                    Regional Creative Director, Asia Pacific<br />Sept 2012&mdash;Mar 2015
                </small>
            </h6>

            <h6 className="title uk-text-uppercase uk-margin-remove-top uk-margin-small-bottom">
                <span className="uk-text-bold">The Gate Worldwide (MSQ Partners)</span><br />
                <small className="uk-text-muted">
                    Creative Director, Singapore<br />Sept 2012&mdash;Mar 2015
                </small>
            </h6>

            <h6 className="title uk-text-uppercase uk-margin-remove-top uk-margin-small-bottom">
                <span className="uk-text-bold">Eight Inc.</span><br />
                <small className="uk-text-muted">
                    Director of Communications, APAC<br />JAN 2011&mdash;Jan 2012
                </small>
            </h6>

            <h6 className="title uk-text-uppercase uk-margin-remove-top uk-margin-small-bottom">
                <span className="uk-text-bold">Frog Design</span><br />
                <small className="uk-text-muted">
                    Lead Experience Designer, San Francisco<br />Dec 2005&mdash;Dec 2006
                </small>
            </h6>
        </div>

        <h3 className="uk-margin-small uk-padding-remove">Patents</h3>
        <h6 className="title uk-text-uppercase uk-margin-remove-top uk-margin-small-bottom">
            <span className="uk-text-bold">US Patent 12/633,371 (Sole author)</span><br />
            <small className="uk-text-muted">
                Event Associating Software Application for Accessing Digital Media
            </small>
        </h6>
        <h6 className="title uk-text-uppercase uk-margin-remove-top uk-margin-small-bottom">
            <span className="uk-text-bold">US Patent 12/556,597 (Sole author)</span><br />
            <small className="uk-text-muted">
                Simple Mobile Registration
            </small>
        </h6>

        <h3 className="uk-padding-remove">Skills</h3>
        <h5 className="uk-margin-remove-vertical uk-padding-remove">
            Creative Direction &amp; Strategy</h5>
        <hr className="uk-margin-remove-top uk-margin-small-bottom" />
        <div>
            <span className="uk-text-small">Creative Ideation / Advertising</span>
            <progress className="uk-progress one" value="95" max="100" />
        </div>
        <div>
            <span className="uk-text-small">Social Media Strategy</span>
            <progress className="uk-progress two" value="78" max="100" />
        </div>
        <div>
            <span className="uk-text-small">Digital Strategy &amp; Planning</span>
            <progress className="uk-progress three" value="92" max="100" />
        </div>
        <div>
            <span className="uk-text-small">Creative Copywriting</span>
            <progress className="uk-progress four" value="63" max="100" />
        </div>
        <div>
            <span className="uk-text-small">Project Scoping Resources &amp; Budgets</span>
            <progress className="uk-progress five" value="95" max="100" />
        </div>

        <h5 className="uk-margin-medium-top uk-margin-remove-bottom uk-padding-remove">
            User Experience &amp; UI Design</h5>
        <hr className="uk-margin-remove-top uk-margin-small-bottom" />
        <div>
            <span className="uk-text-small">User Personas &amp; Task Flows</span>
            <progress className="uk-progress one" value="97" max="100" />
        </div>
        <div>
            <span className="uk-text-small">Information Architecture</span>
            <progress className="uk-progress two" value="90" max="100" />
        </div>
        <div>
            <span className="uk-text-small">Wireframing &amp; Rapid Prototyping</span>
            <progress className="uk-progress three" value="98" max="100" />
        </div>
        <div>
            <span className="uk-text-small">Usability Testing</span>
            <progress className="uk-progress four" value="85" max="100" />
        </div>

        <h5 className="uk-margin-medium-top uk-margin-remove-bottom uk-padding-remove">
            Programming</h5>
        <hr className="uk-margin-remove-top uk-margin-small-bottom" />
        <div>
            <span className="uk-text-small">Python, Django, Flask</span>
            <progress className="uk-progress one" value="92" max="100" />
        </div>
        <div>
            <span className="uk-text-small">Ruby, Ruby on Rails</span>
            <progress className="uk-progress two" value="65" max="100" />
        </div>
        <div>
            <span className="uk-text-small">PHP</span>
            <progress className="uk-progress three" value="75" max="100" />
        </div>
        <div>
            <span className="uk-text-small">Pandas, Numpy, SciKit, XGBoost</span>
            <progress className="uk-progress four" value="58" max="100" />
        </div>
        <div>
            <span className="uk-text-small">JavaScript, ReactJS, jQuery, Webpack</span>
            <progress className="uk-progress five" value="75" max="100" />
        </div>
        <div>
            <span className="uk-text-small">HTML5, CSS3, Sass</span>
            <progress className="uk-progress six" value="96" max="100" />
        </div>

        <h5 className="uk-margin-medium-top uk-margin-remove-bottom uk-padding-remove">
            Software</h5>
        <hr className="uk-margin-remove-top uk-margin-small-bottom" />
        <div>
            <span className="uk-text-small">Adobe Photoshop, Illustrator, etc.</span>
            <progress className="uk-progress one" value="95" max="100" />
        </div>
        <div>
            <span className="uk-text-small">Sketch</span>
            <progress className="uk-progress two" value="92" max="100" />
        </div>
        <div>
            <span className="uk-text-small">OmniGraffle, Balsamic &amp; Axure</span>
            <progress className="uk-progress three" value="98" max="100" />
        </div>
        <div>
            <span className="uk-text-small">Final Cut Pro, Motion, After Effects</span>
            <progress className="uk-progress four" value="85" max="100" />
        </div>

        <h5 className="uk-margin-medium-top uk-margin-remove-bottom uk-padding-remove">
            Backend Tech</h5>
        <hr className="uk-margin-remove-top uk-margin-small-bottom" />
        <div>
            <span className="uk-text-small">Google Cloud, AWS, Heroku</span>
            <progress className="uk-progress one" value="70" max="100" />
        </div>
        <div>
            <span className="uk-text-small">Docker, Kubernetes</span>
            <progress className="uk-progress three" value="60" max="100" />
        </div>
        <div>
            <span className="uk-text-small">Git, SVN</span>
            <progress className="uk-progress four" value="90" max="100" />
        </div>
        <div>
            <span className="uk-text-small">Postgresql, MySQL</span>
            <progress className="uk-progress two" value="85" max="100" />
        </div>
        <div>
            <span className="uk-text-small">Apache, nginx, Honcho, gUnicorn</span>
            <progress className="uk-progress five" value="70" max="100" />
        </div>
    </aside>

export default SkillsList
