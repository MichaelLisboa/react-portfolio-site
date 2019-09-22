import React from "react";

const RatesContent = () =>
    <div className="uk-container uk-container-medium">
        <div className="uk-grid uk-grid-large uk-child-width-1-3@m uk-grid-match uk-flex-center"
            data-uk-grid>
            <div className="uk-first-column">
                <div className="card-brand uk-card uk-card-small uk-card-default uk-card-hover uk-flex uk-flex-column">
                    <div className="uk-card-header uk-text-center">
                        UX &amp; UI Design
                    </div>
                    <div className="uk-card-body uk-flex-1">
                        <div className="uk-flex uk-flex-middle uk-flex-center">
                            <span className="service-cost">
                                $<span>300</span> / day
                            </span>
                        </div>
                        <div className="uk-text-small uk-text-center uk-text-muted">Day Rate</div>
                        <div className="uk-margin-small-top">
                            <p className="uk-text-center uk-text-large uk-margin-small-bottom">
                                What you get
                            </p>
                            <ul className="uk-list uk-list-bullet uk-margin-remove">
                                <li>User personas &amp; journey</li>
                                <li>Wireframes and task flows</li>
                                <li>UI Design as Sketch files</li>
                                <li>UX/UI documentation</li>
                                <li>And a pint of beer</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="card-brand uk-card uk-card-small uk-card-default uk-card-hover uk-flex uk-flex-column">
                    <div className="uk-card-header uk-text-center">
                        Coding &amp; Tech
                    </div>
                    <div className="uk-card-body uk-flex-1">
                        <div className="uk-flex uk-flex-middle uk-flex-center">
                            <span className="service-cost">
                                $<span>30</span> / hour
                            </span>
                        </div>
                        <div className="uk-text-small uk-text-center uk-text-muted">Billed Hourly</div>
                        <div className="uk-margin-small-top">
                            <p className="uk-text-center uk-text-large
                                uk-margin-small-bottom">Take your pick</p>
                            <ul className="uk-list uk-list-bullet uk-margin-remove">
                                <li>HTML5 / CSS3</li>
                                <li>Python / Django / Flask</li>
                                <li>Ruby on Rails</li>
                                <li>React, Vue or VanillaJS (ES6)</li>
                                <li>Deploy Google Cloud or AWS</li>
                                <li>And a pint of beer</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

export default RatesContent;
