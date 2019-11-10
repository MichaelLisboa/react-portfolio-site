import React, {useState} from "react";
import Modal from "../../Modal";

import profileImageA from  "../../../images/michael-a.png";
import profileImageB from  "../../../images/michael-b.png";
import profileImageC from  "../../../images/michael-c.png";
import profileImageD from  "../../../images/michael-d.png";

const profileImages = [profileImageA, profileImageB, profileImageC, profileImageD]


const AboutContent = () => {
    const [isShowing, setIsShowing] = useState(false);
    return (
        <section className="about-section uk-section uk-section-expand uk-section-default uk-margin-large-top">
            <div className="uk-width-4-5@s uk-width-3-4@m">
                <p className="uk-h2">
                    <span className="uk-margin-bottom uk-display-block">Hi, I'm Michael.</span>
                    Depending on who you ask, <span className="uk-text-nowrap">you might hear</span> that I'm a
                    brand strategist, creative director, <span className="uk-text-nowrap">UX specialist</span>,
                    programmer, or even TechnoCreativeologist.
                </p>
                <p className="uk-text-lead uk-margin-remove-bottom uk-margin-medium-bottom@s">
                    You'll find that I'm all of the above.
                    <button
                        onClick={() => setIsShowing(true)}
                        className="uk-text-small uk-text-muted uk-button uk-button-small uk-button-link uk-display-block
                            uk-text-baseline uk-text-capitalize uk-text-small uk-padding-remove uk-margin-remove">
                        READ MORE...
                    </button>
                </p>
            </div>
            <Modal
                isShown={isShowing}>
                <section className="modal-bio uk-width-1-1 uk-background-muted">
                    <div onClick={() => setIsShowing(false)} className="uk-position-top-right uk-position-z-index">
                        <button className="uk-padding-small uk-background-secondary uk-light uk-padding-small" type="button" data-uk-close></button>
                    </div>
                    <div className="uk-section uk-section-expand uk-margin-large-top">
                        <div
                            className="about-profile-content uk-container uk-container-small">
                            <div>
                                <p className="uk-h6 uk-text-muted uk-margin-small-bottom uk-text-uppercase">
                                    <strong>&mdash;</strong> My bio story
                                </p>
                                <p className="uk-h2 uk-margin-remove-top">
                                    <span className="uk-margin-bottom uk-display-block">
                                        In the 3rd person
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="about-profile-header uk-cover-container uk-margin-large-bottom">
                        <div data-uk-slideshow="autoplay: true; animation: fade; autoplay-interval: 2000; pause-on-hover: false">
                        <div className="uk-slideshow-items">
                        {profileImages.map((image, i) => {
                            return (
                                <img
                                    className="bio-image"
                                    key={`michael-${i}`}
                                    src={image}
                                    alt="Hi, I'm Michael"
                                    data-uk-cover
                                />
                            )
                        })}
                        </div>
                        </div>
                    </div>
                    <div className="about-profile-content uk-container uk-container-small">
                        <div>
                            <p className="uk-margin-small-top">
                                <span className="uk-dropcap uk-float-left" data-uk-icon="icon: quote-right; ratio: 2;" />
                                Originally from San Francisco, by way of New York, Michael launched his first digital agency in the 90's. Since then he’s led creative, UX, and development teams around the world to solve experience and communication problems for the most recognized brands in the world, including Justin Timberlake, Pepsi, Sony, Microsoft and hundreds of others.
                            </p>
                            <p className="uk-text-small uk-text-muted">He’s held Creative Experience Director roles in some of the biggest agencies in Ad Land, founded startups, and developed massive AI platforms utilizing his talents in creative design, user experience, and programming.</p>
                            <p className="uk-text-small uk-text-muted">He’s one of those unique people that soaks in information, continues to learn every day, and&mdash;most importantly&mdash;applies that knowledge to invent, execute and deliver world class results.</p>
                            <p className="uk-text-small uk-text-muted">Today, he’s living life as a freelancer in Bangkok with his dog, Astro.&quot;</p>
                        </div>
                        <div className="uk-text-center uk-margin-large">
                            <button
                                onClick={() => setIsShowing(false)}
                                className="uk-button uk-button-large uk-button-text uk-margin-large-bottom">
                                Go back
                            </button>
                        </div>
                    </div>
                </section>
            </Modal>
        </section>
    )
}
export default AboutContent;
