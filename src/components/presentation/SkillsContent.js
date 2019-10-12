import React from 'react';
import { Link } from 'react-router-dom'

import UxImage_1 from '../../images/skills-ux-a.png';
import UxImage_2 from '../../images/skills-ux-b.png';
import CreativeImage_1 from '../../images/skills-creative-a.png';
import CreativeImage_2 from '../../images/skills-creative-b.png';
import CreativeImage_3 from '../../images/skills-creative-c.png';
import TechImage_1 from '../../images/skills-tech-a.png';
import TechImage_2 from '../../images/skills-tech-b.png';
import UxImageS from '../../images/user-experience-s.png';
import CreativeImageS from '../../images/skills-creative.png';
import CreativeTechImageS from '../../images/creative-technology-s.png';


const UxMessage = () =>{
    return (
        <>
            <h4 className="uk-margin-remove">
                Experience Design
            </h4>
            <h5 className="uk-margin-remove">
                I create inspiring Consumer Experiences.<br />
                Experiences that solve problems.<br />
                Experiences that will be remembered.<br />
                Experiences that people <span className="uk-text-danger" data-uk-icon="icon: heart"></span>
            </h5>
            <p style={{fontSize: "0.7em"}} className="uk-h6 uk-text-uppercase uk-text-center uk-heading-line uk-margin-top uk-margin-remove-bottom"><span>Case Studies</span></p>
            <ul className="case-study-list uk-list">
                <li>
                    <Link
                        to="/portfolio/thailand-fintech-app">
                            DeeMoney<br />
                            <small>Thailand Banking &amp; Financial Services</small>&nbsp;
                            <span data-uk-icon="icon: arrow-right; ratio: 0.7" />
                    </Link>
                </li>
                <li>
                    <Link
                        to="/portfolio/geomain">
                            GeoMain<br />
                            <small>Location Services Startup</small>&nbsp;
                            <span data-uk-icon="icon: arrow-right; ratio: 0.7" />
                    </Link>
                </li>
                <li>
                    <Link
                        to="/portfolio/zyllem">
                            Zyllem<br />
                            <small>SEA, Logistics &amp; Supply Chain Management</small>&nbsp;
                            <span data-uk-icon="icon: arrow-right; ratio: 0.7" />
                    </Link>
                </li>
            </ul>
        </>
    )
}

const CreativeMessage = () => {
    return (
        <>
            <h4 className="uk-margin-remove">
                Creative Direction &amp; Strategy
            </h4>
            <h5 className="uk-margin-remove">
                Designer, copywriter, Creative Director.<br />I've led teams&mdash;large and small&mdash;for some of the biggest
                advertising agencies in the world.
            </h5>
            <p style={{fontSize: "0.7em"}} className="uk-h6 uk-text-uppercase uk-text-center uk-heading-line uk-margin-remove-top"><span>Case Studies</span></p>
            <ul className="case-study-list uk-list">
                <li>
                    <Link
                        to="/portfolio/oreo">
                            Oreo<br />
                            <small>Creative Direction for Global FMCG Brand</small>&nbsp;
                            <span data-uk-icon="icon: arrow-right; ratio: 0.7" />
                    </Link>
                </li>
                <li>
                    <Link
                        to="/portfolio/raffles-hotels">
                            Raffles Hotels (Accor)<br />
                            <small>Strategy, Creative Direction &amp; Social for Luxury Hospitality</small>&nbsp;
                            <span data-uk-icon="icon: arrow-right; ratio: 0.7" />
                    </Link>
                </li>
                <li>
                    <Link
                        to="/portfolio/insead">
                            Insead<br />
                            <small>Creative Direction &amp; Client Services for Higher Education</small>&nbsp;
                            <span data-uk-icon="icon: arrow-right; ratio: 0.7" />
                    </Link>
                </li>
            </ul>
        </>
)
}
const CreativeTechMessage = () => {
    return (
        <>
            <h4 className="uk-margin-remove">
                Full Stack Development
            </h4>
            <h5 className="uk-margin-remove">
                I make things work, whether it's building mobile apps in React,
                or diving into Python and Pandas for data analytics.<br />
                <small className="uk-text-muted">P.S. Check <a href="https://github.com/MichaelLisboa" className="text-background text-background-indigo uk-link-reset uk-link uk-nowrap">my GitHub</a> to get the code for this site.</small>
            </h5>

            <p style={{fontSize: "0.7em"}} className="uk-h6 uk-text-uppercase uk-text-center uk-heading-line uk-margin-remove-top"><span>Case Studies</span></p>
            <ul className="case-study-list uk-list">
                <li>
                    <Link
                        to="/portfolio/influense">
                            Influen$e<br />
                            <small>AI Powered Influencer Data Platform</small>&nbsp;
                            <span data-uk-icon="icon: arrow-right; ratio: 0.7" />
                    </Link>
                </li>
                <li>
                    <Link
                        to="/portfolio/influense-content-market-watch">
                            Content MarketWatch<br />
                            <small>The world's first content marketing trading platform</small>&nbsp;
                            <span data-uk-icon="icon: arrow-right; ratio: 0.7" />
                    </Link>
                </li>
                <li>
                    <Link
                        to="/portfolio/insead">
                            Insead<br />
                            <small>UX and full-stack development for Higher Education</small>&nbsp;
                            <span data-uk-icon="icon: arrow-right; ratio: 0.7" />
                    </Link>
                </li>
            </ul>
        </>
    )
}
const SkillsCards = [
    {
        name: "Experience-Design",
        image: [UxImage_1, UxImage_2],
        content: UxMessage()
    },
    {
        name: "Creative-Strategy",
        image: [CreativeImage_1, CreativeImage_2, CreativeImage_3],
        content: CreativeMessage()
    },
    {
        name: "Technology",
        image: [TechImage_1, TechImage_2],
        content: CreativeTechMessage()
    }
]

const SkillsContent = () => {
    return (
        <>
            <div className="uk-container uk-margin-auto-left uk-margin-auto-right
                uk-margin-remove-bottom uk-padding-remove uk-visible@s"
                data-uk-slideshow="autoplay: true; autoplay-interval: 10000;">
                <div className="skills-tabs uk-width-1-3 uk-margin-auto-left uk-margin-auto-right uk-flex-center">
                    <ul className="skills-menu uk-margin-remove-vertical uk-padding-remove" data-uk-tab>
                        <li data-uk-slideshow-item="0"><a href="#one">Experience</a></li>
                        <li data-uk-slideshow-item="1"><a href="#two">Creative</a></li>
                        <li data-uk-slideshow-item="2"><a href="#three">Technology</a></li>
                    </ul>
                </div>

                <div className="skills-content uk-slideshow-items uk-box-shadow-xlarge">
                    {SkillsCards.map((item, i) => (
                        <div key={`${i}-${item.name}`}
                            className={`${item.name} uk-card uk-card-default uk-card-large uk-child-width-1-2 uk-margin-remove uk-padding-remove`}
                            data-uk-grid>
                            <div className="uk-padding-remove uk-flex-last@s uk-card-media-right" data-uk-scrollspy="cls: uk-animation-slide-right;">
                                <div data-uk-slideshow="autoplay: true; autoplay-interval: 3000; animation: fade">
                                    <div className="uk-margin-remove uk-padding-remove uk-slideshow-items">
                                        {item.image.map((img, i) => (
                                            <div key={`${i}-${img}`}>
                                                <img
                                                    src={img}
                                                    alt={item.name}
                                                    data-uk-cover
                                                    data-uk-img={`target: !.skills-content`}
                                                />
                                            </div>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="uk-flex uk-flex-column uk-flex-middle uk-flex-center">
                                <div className="uk-card-body" data-uk-scrollspy="cls: uk-animation-slide-left;">
                                    {item.content}
                                </div>
                            </div>
                        </div>
                        )
                    )}
                </div>
            </div>

            <div className="skills-content uk-container uk-container-expand uk-hidden@s">
                {SkillsCards.map((item, i) => (
                <div
                    key={i}
                    className="uk-grid-collapse uk-child-width-1-1 uk-margin-top"
                    data-uk-scrollspy="cls: uk-animation-slide-bottom-medium; target: div > *; repeat: true;"
                    data-uk-grid>
                        <div className="uk-card uk-card-small uk-card-default uk-margin-bottom">
                            <div className="uk-card-media-top">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    data-uk-img
                                />
                            </div>
                            <div className="uk-card-body">
                                {item.content}
                            </div>
                        </div>
                    </div>
                    )
                )}
            </div>
        </>
    )
}

export default SkillsContent;
