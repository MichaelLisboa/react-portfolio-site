import React, { Component, Fragment } from "react";

class ResumeContent extends Component {
    render () {
        return (
            <Fragment>
                <div className="uk-grid-small uk-margin-medium-top uk-margin-remove-bottom" data-uk-grid>
                    <aside className="skills-list uk-width-1-3@m uk-flex-last uk-flex-first@s">
                        <h3 className="uk-margin-small uk-padding-remove">Skills</h3>
                        <h5 className="uk-margin-remove-bottom uk-padding-remove">
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

                    <article className="uk-article uk-width-expand@m uk-flex-first uk-flex-last@s">
                        <div className="work-experience">
                            <h3 className="uk-margin-small uk-padding-remove">Notable Projects</h3>

                            <div>
                                <p className="uk-heading-line uk-article-title
                                    uk-text-uppercase uk-margin-remove-bottom">
                                    <span>Pepsi</span>
                                </p>
                                <p className="uk-article-meta">
                                    Creative Direction &amp; Strategy &bull; Advertising
                                </p>
                                <p className="uk-text-lead">
                                    Two weeks&mdash;conceive and deliver one of the first social media, digital
                                    integrated brand campaigns in the world, curating and aggregating content through
                                    the #refresheverything hashtag.<br />
                                    Leveraging on a combination of Pepsi generated and paid content, alongside user
                                    generated content, this campaign set a standard for PepsiCo's digital
                                    campaigns ever since.
                                </p>
                                <ul className="uk-list uk-list-bullet">
                                    <li>Developed a digital strategy and creative solution&mdash;Pepsi’s
                                        “rethink the old, refresh with the new” campaign objectives.</li>
                                    <li>Created a social media strategy, engaging users&mdash;interact
                                        with fresh content provided by Pepsi’s content curation team.</li>
                                    <li>Led the concepting and design of a crowdsourcing social media
                                        strategy that included free music downloads, Facebook integration,
                                        and interaction with popular sites like Twitter,
                                        YouTube, Flickr, and more.</li>
                                </ul>
                            </div>

                            <div>
                                <p className="uk-heading-line uk-article-title
                                    uk-text-uppercase uk-margin-remove-bottom">
                                    <span>Pixt</span>
                                </p>
                                <p className="uk-article-meta">
                                    Start-up &bull; Artificial Intelligence &bull; Deep-tech
                                </p>
                                <p className="uk-text-lead">
                                    Businesses are spending $Billions trying&mdash;understand their customers, but they're
                                    blind&mdash;trillions of real-time visual conversations. Pixt indexes the visual web to
                                    make sense, and generate quantified data, of the billions of images and videos
                                    shared on the web every day.
                                </p>
                                <ul className="uk-list uk-list-bullet">
                                    <li>Led fundraising and business development efforts in many, many pitches.</li>
                                    <li>Performed market and product fit analysis&mdash;identify business verticals
                                       &mdash;target at launch.</li>
                                    <li>Developed a machine learning powered platform, data models and
                                        subsequent deployment on high-availability Google Cloud infrastructure.</li>
                                    <li>Executed all UX and UI Design for desktop, mobile, PWA and bot interfaces.</li>
                                    <li>
                                        Programmed the platform and micro-services in Python, Django, Node.js, and ES6.
                                    </li>
                                    <li>Raised $120,000 USD in funding.</li>
                                </ul>
                            </div>

                            <div>
                                <p className="uk-heading-line uk-article-title
                                    uk-text-uppercase uk-margin-remove-bottom">
                                    <span>Citibank</span>
                                </p>
                                <small>Eight Inc.</small>
                                <p className="uk-article-meta">
                                    Creative &amp; Account Direction &bull; UI/UX Design
                                </p>
                                <p className="uk-text-lead">
                                    Customers were detached from their banks and their money. Our focus was&mdash;evaluate
                                    customer needs and redefine the banking experience. We used a combination of
                                    technology, architecture and design, supplemented with new retail channels that
                                    connected with customers and gave them a much better way&mdash;do their banking.
                                </p>
                                <ul className="uk-list uk-list-bullet">
                                    <li>Spearheaded rebranding and remodelling of the consumer banking environmental
                                        and digital experience of Citibank in Asia.</li>
                                    <li>Reformulated retail banking strategy by creating a new consumer banking
                                        experience with new, simpler tool sets, all founded on intuitive user experience
                                        strategy and design.</li>
                                    <li>Led Citibank’s shift into the future of engagement banking, rethinking of its
                                        retail environments, behaviors, tech- nology, and communications – every aspect
                                        of the brand and how the customer experiences it.</li>
                                </ul>
                            </div>

                            <div>
                                <p className="uk-heading-line uk-article-title
                                    uk-text-uppercase uk-margin-remove-bottom">
                                    <span>Microsoft</span>
                                </p>
                                <small>Frog Design</small>
                                <p className="uk-article-meta">
                                    UI/UX Design &bull; Prototyping &bull; Advertising
                                </p>
                                <p className="uk-text-lead">
                                    With the Windows Vista launch looming&mdash;one of the largest global
                                    product launches in history&mdash;I worked closely with Microsoft's
                                    product teams in Redmond and Silicon Valley, and Microsoft's global
                                    UX Center in Texas&mdash;define the consumer experience of Windows Live,
                                    Microsoft TV, and Microsoft Vista Widgets.
                                </p>
                                <ul className="uk-list uk-list-bullet">
                                    <li>Managed all user experience design, visual, and interaction design
                                        for Microsoft’s Windows Live product launch.</li>
                                    <li>Managed user experience design and interaction design for Microsoft TV
                                        and Microsoft Small Business views in Windows Live.com and overarching
                                        integration with Microsoft Windows Vista desktop.</li>
                                    <li>Developed prototypes in JavaScript and Microsoft's widget architecture.</li>
                                    <li>Produced User Experience and UI Design guidelines and documentation.</li>
                                </ul>
                            </div>

                            <div>
                                <p className="uk-heading-line uk-article-title
                                    uk-text-uppercase uk-margin-remove-bottom">
                                    <span>Zyllem</span>
                                </p>
                                <p className="uk-article-meta">
                                    Start-up &bull; Consumer Research &bull; UI/UX Design
                                </p>
                                <p className="uk-text-lead">
                                    Zyllem is a funded Singapore startup that is the leading
                                    provider of fast, cost-effective, crowdsourced delivery services and logistics in
                                    Southeast Asia. From workshops&mdash;user research, from UX&mdash;UI, I delivered a
                                    complete overhaul of the consumer experience for this startup's mobile app and
                                    web services.
                                </p>
                                <ul className="uk-list uk-list-bullet">
                                    <li>Led user experience and business strategy workshop for internal
                                        leadership teams.</li>
                                    <li>Performed quantitative and qualitative user research, including surveys, data
                                        analytics and path tracking, and user interviews. Collected and analysed data
                                       &mdash;identify insights and develop a fresh engagement approach&mdash;drive customer
                                        acquisition through mobile app and website.</li>
                                    <li>Led user interface design including UX audits, wireframe production
                                        and UI design.</li>
                                </ul>
                            </div>

                            <h3 className="uk-margin-small uk-padding-remove">Agency Experience</h3>

                            <div className="uk-grid-small uk-child-width-1-2@s" data-uk-grid>
                                <h6 className="title uk-text-uppercase">
                                    <span className="uk-text-bold">Kizmo</span><br />
                                    <small className="uk-text-muted">
                                        Experience Director<br />Feb 2010&mdash;June 2018
                                    </small>
                                </h6>

                                <h6 className="title uk-text-uppercase">
                                    <span className="uk-text-bold">Havas Worldwide</span><br />
                                    <small className="uk-text-muted">
                                        Regional Experience Director, Asia Pacific<br />May 2015&mdash;Mar 2016
                                    </small>
                                </h6>

                                <h6 className="title uk-text-uppercase">
                                    <span className="uk-text-bold">Publicis (contract)</span><br />
                                    <small className="uk-text-muted">
                                        Director of User Experience, Singapore<br />Feb 2015&mdash;June 2015
                                    </small>
                                </h6>

                                <h6 className="title uk-text-uppercase">
                                    <span className="uk-text-bold">Dentsu</span><br />
                                    <small className="uk-text-muted">
                                        Regional Creative Director, Southeast Asia<br />Apr 2015&mdash;Dec 2015
                                    </small>
                                </h6>

                                <h6 className="title uk-text-uppercase">
                                    <span className="uk-text-bold">Twentysix (MSQ Partners)</span><br />
                                    <small className="uk-text-muted">
                                        Regional Creative Director, Asia Pacific<br />Sept 2012&mdash;Mar 2015
                                    </small>
                                </h6>

                                <h6 className="title uk-text-uppercase">
                                    <span className="uk-text-bold">The Gate Worldwide (MSQ Partners)</span><br />
                                    <small className="uk-text-muted">
                                        Creative Director, Singapore<br />Sept 2012&mdash;Mar 2015
                                    </small>
                                </h6>

                                <h6 className="title uk-text-uppercase">
                                    <span className="uk-text-bold">Eight Inc.</span><br />
                                    <small className="uk-text-muted">
                                        Director of Communications, APAC<br />JAN 2011&mdash;Jan 2012
                                    </small>
                                </h6>

                                <h6 className="title uk-text-uppercase">
                                    <span className="uk-text-bold">Frog Design</span><br />
                                    <small className="uk-text-muted">
                                        Lead Experience Designer, San Francisco<br />Dec 2005&mdash;Dec 2006
                                    </small>
                                </h6>
                            </div>

                            <h3 className="uk-margin-small uk-padding-remove">Patents</h3>
                            <ul className="uk-list uk-list-bullet">
                                <li>US Patent 12/633,371 Event Associating Software Application for
                                    Accessing Digital Media (Sole author)</li>
                                <li>US Patent 12/556,597 Simple Mobile Registration (Sole author)</li>
                            </ul>
                        </div>
                    </article>
                </div>
            </Fragment>
        )
    }
};

export default ResumeContent;
