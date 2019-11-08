import React from "react";

const RatesContent = () =>
    <div className="rates-content uk-container uk-container-medium">
        <div className="uk-grid uk-grid-small uk-child-width-1-3@m uk-grid-match uk-flex-center"
            data-uk-grid>
            <div className="uk-first-column">
                <div className="uk-card uk-card-small uk-card-default uk-card-hover uk-flex uk-flex-column">
                    <i className="uk-width-1-1 uk-text-center"
                        data-uk-icon="icon: lock; ratio: 2" />
                    <div className="uk-card-header uk-text-center">
                        Dedicated
                    </div>
                    <div className="uk-card-body uk-flex-1">
                        <div className="uk-flex uk-flex-middle uk-flex-center uk-text-muted">
                            <span className="service-cost">
                                $<span>7,500</span>USD
                            </span>
                        </div>
                        <div className="uk-text-small uk-text-center">Minumum fee</div>
                        <div className="uk-margin-small-top">
                            <p className="uk-text-center uk-text-large uk-margin-small-bottom">
                                Large, end-to-end projects
                            </p>
                            <p>
                                I'm dedicated, full-time on your project. I'll work with you to scope, execute, and deliver results on your schedule.
                            </p>
                            <p className="uk-h4 uk-heading-line uk-text-center uk-margin-remove-top"><span>Ideal for</span></p>
                            <ul className="uk-list uk-list-bullet uk-margin-remove">
                                <li>Product design</li>
                                <li>UX/UI Strategy &amp; Design</li>
                                <li>Full-stack programming</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="uk-card uk-card-small uk-card-default uk-card-hover uk-flex uk-flex-column">
                    <i className="uk-width-1-1 uk-text-center"
                        data-uk-icon="icon: calendar; ratio: 2" />
                    <div className="uk-card-header uk-text-center">
                        Day Rate
                    </div>
                    <div className="uk-card-body">
                        <div className="uk-flex uk-flex-middle uk-flex-center uk-text-muted">
                            <span className="service-cost">
                                $<span>500</span>USD / day
                            </span>
                        </div>
                        <div className="uk-text-small uk-text-center uk-text-muted">Day Rate (2 days minimum)</div>
                        <div className="uk-margin-small-top">
                            <p className="uk-text-center uk-text-large uk-margin-small-bottom">
                                Small or phased projects
                            </p>
                            <p>
                                Available when I'm not <strong>locked</strong> on a full-time project.
                                This rate works for projects with smaller budgets.
                            </p>
                            <p className="uk-h4 uk-heading-line uk-text-center uk-margin-remove-top"><span>Ideal for</span></p>
                            <ul className="uk-list uk-list-bullet uk-margin-remove">
                                <li>Creative direction and ideation</li>
                                <li>Consumer experience research</li>
                                <li>Usability testing and research</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="uk-card uk-card-small uk-card-default uk-card-hover uk-flex uk-flex-column">
                    <i className="uk-width-1-1 uk-text-center"
                        data-uk-icon="icon: history; ratio: 2" />
                    <div className="uk-card-header uk-text-center">
                        Hourly Rate
                    </div>
                    <div className="uk-card-body">
                        <div className="uk-flex uk-flex-middle uk-flex-center uk-text-muted">
                            <span className="service-cost">
                                $<span>100</span>USD / hour
                            </span>
                        </div>
                        <div className="uk-text-small uk-text-center uk-text-muted">Hourly Rate (8 hours max)</div>
                        <div className="uk-margin-small-top">
                            <p className="uk-text-center uk-text-large uk-margin-small-bottom">
                                Advisory &amp; scoping
                            </p>
                            <p>
                                Available when I'm not <strong>locked</strong> on a full-time project.
                                Good for fast turnaround advisory and scoping projects.
                            </p>
                            <p className="uk-h4 uk-heading-line uk-text-center uk-margin-remove-top"><span>Ideal for</span></p>
                            <ul className="uk-list uk-list-bullet uk-margin-remove">
                                <li>UX/UI audit &amp; recommendations</li>
                                <li>Technical Director by-the-hour</li>
                                <li>Project assesment/budget scoping</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

export default RatesContent;
