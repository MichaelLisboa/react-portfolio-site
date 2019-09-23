import React from "react";

const RatesContent = () =>
    <div className="uk-container uk-container-medium">
        <div className="uk-grid uk-grid-small uk-child-width-1-3@m uk-grid-match uk-flex-center"
            data-uk-grid>
            <div className="uk-first-column">
                <div className="card-brand uk-card uk-card-small uk-card-default uk-card-hover uk-flex uk-flex-column">
                    <div className="uk-card-header uk-text-center">
                        Experience Design
                    </div>
                    <div className="uk-card-body uk-flex-1">
                        <div className="uk-flex uk-flex-middle uk-flex-center uk-text-muted">
                            <span className="service-cost">
                                $<span>300</span>USD / day
                            </span>
                        </div>
                        <div className="uk-text-small uk-text-center uk-text-muted">Day Rate (5 days minimum)</div>
                        <div className="uk-margin-small-top">
                            <p className="uk-text-center uk-text-large uk-margin-small-bottom">
                                Understand your audience
                            </p>
                            <ul className="uk-list uk-list-bullet uk-margin-remove">
                                <li>Consumer Experience strategy</li>
                                <li>Personas &amp; journeys</li>
                                <li>Goal &amp; conversion mapping</li>
                                <li>UX &amp; UI Design</li>
                                <li>And a pint of beer</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="card-brand uk-card uk-card-small uk-card-default uk-card-hover uk-flex uk-flex-column">
                    <div className="uk-card-header uk-text-center">
                        Creative Direction
                    </div>
                    <div className="uk-card-body uk-flex-1">
                        <div className="uk-flex uk-flex-middle uk-flex-center uk-text-muted">
                            <span className="service-cost">
                                $<span>1000</span>USD / day
                            </span>
                        </div>
                        <div className="uk-text-small uk-text-center uk-text-muted">Day Rate (2 days minimum)</div>
                        <div className="uk-margin-small-top">
                            <p className="uk-text-center uk-text-large uk-margin-small-bottom">
                                Get to the big idea
                            </p>
                            <ul className="uk-list uk-list-bullet uk-margin-remove">
                                <li>ID the problem, get to solutions</li>
                                <li>Rapid ideation sessions</li>
                                <li>Communication channel strategy</li>
                                <li>Creative message &amp; copywriting</li>
                                <li>And a pint of beer</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="card-brand uk-card uk-card-small uk-card-default uk-card-hover uk-flex uk-flex-column">
                    <div className="uk-card-header uk-text-center">
                        Technology &amp; Code
                    </div>
                    <div className="uk-card-body uk-flex-1">
                        <div className="uk-flex uk-flex-middle uk-flex-center uk-text-muted">
                            <span className="service-cost">
                                $<span>30</span>USD / hour
                            </span>
                        </div>
                        <div className="uk-text-small uk-text-center uk-text-muted">Billed Hourly</div>
                        <div className="uk-margin-small-top">
                            <p className="uk-text-center uk-text-large
                                uk-margin-small-bottom">Execute &amp; deliver</p>
                            <ul className="uk-list uk-list-bullet uk-margin-remove">
                                <li>Tech planning and strategy</li>
                                <li>HTML5 / CSS3 / JavaScript / React</li>
                                <li>Python / Django / Flask</li>
                                <li>Deploy to cloud service</li>
                                <li>And a pint of beer</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

export default RatesContent;
