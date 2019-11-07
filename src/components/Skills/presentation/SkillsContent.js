import React from "react";
import { UxMessage, CreativeMessage, TechMessage } from "./SkillsContentItems"
import UxImage from "../../../images/skills-ux.png";
import CreativeImage from "../../../images/skills-creative.png";
import TechImage from "../../../images/skills-tech.png";

const SkillsCards = [
    {
        name: "Experience Design",
        image: UxImage,
        content: UxMessage
    },
    {
        name: "Creative Direction & Strategy",
        image: CreativeImage,
        content: CreativeMessage
    },
    {
        name: "Full-stack Developer",
        image: TechImage,
        content: TechMessage
    }
]

const SkillsContent = () => {
    return (
        <>
            <div className="uk-container uk-margin-auto-left uk-margin-auto-right
                uk-margin-remove-bottom uk-padding-remove uk-visible@s"
                data-uk-slideshow="autoplay: true; autoplay-interval: 5000;">
                <div className="skills-tabs uk-width-1-3 uk-margin-auto-left uk-margin-auto-right uk-flex-center">
                    <ul className="skills-menu uk-margin-remove-vertical uk-padding-remove" data-uk-tab>
                        <li data-uk-slideshow-item="0"><a href="#one">Experience</a></li>
                        <li data-uk-slideshow-item="1"><a href="#two">Creative</a></li>
                        <li data-uk-slideshow-item="2"><a href="#three">Technology</a></li>
                    </ul>
                </div>

                <div className="skills-content uk-slideshow-items uk-box-shadow-xlarge">
                    {SkillsCards.map((item, i) => (
                        <div key={i} className="uk-card uk-card-default uk-card-large uk-child-width-1-2 uk-margin-remove uk-padding-remove" data-uk-grid>
                            <div className="uk-flex-last@s uk-card-media-right uk-cover-container" data-uk-scrollspy="cls: uk-animation-slide-right;">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    data-uk-img
                                    data-uk-cover
                                />
                                <canvas width="480" height="540" />
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
                                <h4 className="">{item.name}</h4>
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
