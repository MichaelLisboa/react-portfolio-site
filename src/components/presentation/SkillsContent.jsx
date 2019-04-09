import React, { Component, Fragment } from 'react';

import UxImage from '../../images/user-experience-c.png';
import CreativeImage from '../../images/creative-strategy-c.png';
import CreativeTechImage from '../../images/creative-technology-c.png';

import UxImageS from '../../images/user-experience-s.png';
import CreativeImageS from '../../images/creative-strategy-s.png';
import CreativeTechImageS from '../../images/creative-technology-s.png';

let UxMessage = () => (
    <Fragment>
        <h4 className="uk-margin-remove">
            User Experience &amp; UI Design
        </h4>
        <h5 className="uk-margin-remove">
            I design inspiring Experiences.<br />
            Experiences that solve problems.<br />
            Experiences that will be remembered.<br />
            Experiences that people <span data-uk-icon="icon: heart"></span>
        </h5>
        <ul className="uk-list uk-list-bullet">
            <li>User, market &amp; ethnography research</li>
            <li>User personas, task analysis &amp; journeys</li>
            <li>Information architecture</li>
            <li>Wireframes &amp; rapid prototyping</li>
            <li>UI Design</li>
            <li>Usability testing</li>
        </ul>
    </Fragment>
);

let CreativeMessage = () => (
    <Fragment>
        <h4 className="uk-margin-remove">
            Creative Direction &amp; Strategy
        </h4>
        <h5 className="uk-margin-remove">
            I'm also a creative guy. I've led teams as Creative Director at some of the biggest
            (and smallest) advertising agencies in the world.
        </h5>
        <ul className="uk-list uk-list-bullet">
            <li>Creative direction &amp; execution</li>
            <li>Ideation &amp; storytelling</li>
            <li>Copywriting</li>
            <li>Go-to-market strategy &amp; planning</li>
        </ul>
    </Fragment>
);

let CreativeTechMessage = () => (
    <Fragment>
        <h4 className="uk-margin-remove">
            Programming
        </h4>
        <h5 className="uk-margin-remove">
            I like to make things work, whether it's building mobile UIs in React (like this site),
                or diving into Python and Pandas for deep data analysis.
        </h5>
        <ul className="uk-list uk-list-bullet">
            <li>HTML5 / CSS3</li>
            <li>Python / Django / Flask</li>
            <li>Ruby on Rails</li>
            <li>React, Vue &amp; ES6</li>
            <li>Google Cloud / AWS</li>
        </ul>
    </Fragment>
);

class SkillsContent extends Component {
    render () {
        return (
            <Fragment>
                <div className="uk-container uk-margin-auto-left uk-margin-auto-right
                    uk-margin-remove-bottom uk-padding-remove uk-visible@s"
                    data-uk-slideshow="autoplay: true; autoplay-interval: 5000;">
                    <div className="skills-tabs uk-width-1-3 uk-margin-auto-left uk-margin-auto-right uk-flex-center">
                        <ul className="skills-menu uk-margin-remove-vertical uk-padding-remove" data-uk-tab>
                            <li data-uk-slideshow-item="0"><a href="#one">UX &amp; UI Design</a></li>
                            <li data-uk-slideshow-item="1"><a href="#two">Creative</a></li>
                            <li data-uk-slideshow-item="2"><a href="#three">Programming</a></li>
                        </ul>
                    </div>

                    <div className="uk-slideshow-items uk-box-shadow-xlarge ">
                        <div className="uk-card uk-card-default uk-card-large uk-child-width-1-2 uk-margin-remove uk-padding-remove" data-uk-grid>
                            <div className="uk-flex-last@s uk-card-media-right uk-cover-container" data-uk-scrollspy="cls: uk-animation-slide-right;">
                                <img
                                    src={UxImage}
                                    alt="User Experience"
                                    data-uk-img
                                    data-uk-cover
                                />
                                <canvas width="480" height="540" />
                            </div>
                            <div className="uk-flex uk-flex-column uk-flex-middle uk-flex-center">
                                <div className="uk-card-body" data-uk-scrollspy="cls: uk-animation-slide-left;">
                                    <UxMessage />
                                </div>
                            </div>
                        </div>

                        <div className="uk-card uk-card-default uk-card-large uk-child-width-1-2 uk-margin-remove" data-uk-grid>
                            <div className="uk-flex-last@s uk-card-media-right uk-cover-container">
                                <img
                                    src={CreativeImage}
                                    alt="Creative Strategy"
                                    data-uk-img
                                    data-uk-cover
                                />
                                <canvas width="480" height="540" />
                            </div>
                            <div className="uk-flex uk-flex-column uk-flex-middle uk-flex-center">
                                <div className="uk-card-body" data-uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
                                    <CreativeMessage />
                                </div>
                            </div>
                        </div>

                        <div className="uk-card uk-card-default uk-card-large uk-child-width-1-2 uk-margin-remove" data-uk-grid>
                            <div className="uk-flex-last@s uk-card-media-right uk-cover-container uk-animation-slide-right">
                                <img
                                    src={CreativeTechImage}
                                    alt="Creative Technology"
                                    data-uk-img
                                    data-uk-cover
                                />
                                <canvas width="480" height="540" />
                            </div>
                            <div className="uk-flex uk-flex-column uk-flex-middle uk-flex-center">
                                <div className="uk-card-body uk-animation-slide-left">
                                    <CreativeTechMessage />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="uk-container uk-container-expand uk-hidden@s">
                    <div className="uk-grid-collapse uk-child-width-1-1 uk-margin-medium-top uk-margin-large-bottom" data-uk-grid>
                        <div>
                            <div className="uk-card uk-card-small">
                                <div className="uk-card-media-top">
                                    <img
                                        src={UxImageS}
                                        alt="client"
                                        data-uk-img
                                    />
                                </div>
                                <div className="uk-card-body">
                                    <UxMessage />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="uk-card uk-card-small">
                                <div className="uk-card-media-top">
                                    <img
                                        src={CreativeImageS}
                                        alt="Creative Direction"
                                        data-uk-img
                                    />
                                </div>
                                <div className="uk-card-body">
                                    <CreativeMessage />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="uk-card uk-card-small">
                                <div className="uk-card-media-top">
                                    <img
                                        src={CreativeTechImageS}
                                        alt="Creative Direction"
                                        data-uk-img
                                    />
                                </div>
                                <div className="uk-card-body">
                                    <CreativeTechMessage />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default SkillsContent;
