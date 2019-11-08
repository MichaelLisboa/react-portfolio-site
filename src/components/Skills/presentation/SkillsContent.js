import React from "react";
import { UxMessage, CreativeMessage, TechMessage } from "./SkillsContentItems"
import UxImage from "../../../images/skills-ux.png";
import CreativeImage from "../../../images/skills-creative.png";
import TechImage from "../../../images/skills-tech.png";

const SkillsCards = [
    {
        name: "Brand Experiences",
        image: CreativeImage,
        content: CreativeMessage
    },
    {
        name: "User Experiences",
        image: UxImage,
        content: UxMessage
    },
    {
        name: "Product Experiences",
        image: TechImage,
        content: TechMessage
    }
]

const SkillsContent = () => {
    return (
        <>
            <div className="uk-container uk-container-expand uk-margin-auto-left uk-margin-auto-right
                uk-margin-remove-bottom uk-padding-remove uk-visible@s"
                data-uk-slideshow="autoplay: true; autoplay-interval: 5000;">
                <div className="skills-tabs uk-width-2-5 uk-margin-top uk-margin-auto-left uk-margin-auto-right uk-flex-center">
                    <ul className="uk-margin-remove-vertical uk-padding-remove uk-flex-nowrap uk-flex-center" data-uk-tab>
                        <li data-uk-slideshow-item="0"><a href="#one">Brand Experiences</a></li>
                        <li data-uk-slideshow-item="1"><a href="#two">User Experiences</a></li>
                        <li data-uk-slideshow-item="2"><a href="#three">Product Experiences</a></li>
                    </ul>
                </div>
                <div className="skills-content uk-slideshow-items">
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
                                <div className="uk-card-body uk-width-4-5@m" data-uk-scrollspy="cls: uk-animation-fade; repeat: true">
                                    {item.content}
                                </div>
                            </div>
                        </div>
                        )
                    )}
                </div>
            </div>

            <div className="skills-content mobile-skills-content uk-container uk-container-expand uk-padding-remove uk-hidden@s">
                {SkillsCards.map((item, i) => (
                        <div
                            key={i}
                            className="uk-grid-collapse uk-child-width-1-1 uk-margin-top"
                            data-uk-scrollspy="cls: uk-animation-slide-bottom-medium; target: div > *; repeat: true;"
                            data-uk-grid>
                            <div>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    data-uk-img
                                />
                            </div>
                            <div className="mobile-skills-content-box">
                                <p className="uk-h4">{item.name}</p>
                                {item.content}
                            </div>
                        </div>
                    )
                )}
            </div>
        </>
    )
}

export default SkillsContent;
