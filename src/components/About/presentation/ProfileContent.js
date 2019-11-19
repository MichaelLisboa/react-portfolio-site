import React from "react";
import { NavLink } from 'react-router-dom';
import Contact from '../../Contact';
import history from "../../../lib/historyUtils";

import profileImageA from  "../../../images/michael-a.png";
import profileImageB from  "../../../images/michael-b.png";
import profileImageC from  "../../../images/michael-c.png";
import profileImageD from  "../../../images/michael-d.png";

const profileImages = [profileImageA, profileImageB, profileImageC, profileImageD]


const ProfileContent = ({isShowing, ...props}) => {
    console.log(history)
    return (
        <section className="modal-bio uk-width-1-1 uk-background-muted">
            {history.location.pathname !== "/profile" &&
            <div onClick={() => isShowing(false)} className="uk-position-z-index">
                <button className="uk-padding-small uk-background-secondary uk-light uk-padding-small" type="button" data-uk-close></button>
            </div>
            }
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
                        Originally from New York, by way of San Francisco, Michael launched his first digital agency in the 90's. Since then he’s led creative, UX, and development teams around the world to solve experience and communication problems for the most recognized brands in the world, including Justin Timberlake, Pepsi, Sony, Microsoft and hundreds of others.
                    </p>
                    <p className="uk-text-small uk-text-muted">He’s held Creative Experience Director roles in some of the biggest agencies in Ad Land, founded startups, and developed massive AI platforms utilizing his talents in creative design, user experience, and programming.</p>
                    <p className="uk-text-small uk-text-muted">He’s one of those unique people that soaks in information, continues to learn every day, and&mdash;most importantly&mdash;applies that knowledge to invent, execute and deliver world class results.</p>
                    <p className="uk-text-small uk-text-muted">Today, he’s living life as a freelancer in Bangkok with his dog, Astro.&quot;</p>
                </div>

                <div className="uk-text-center">
                    {history.location.pathname !== "/profile" ?
                    <button
                        onClick={() => isShowing(false)}
                        className="uk-button uk-button-large uk-button-text uk-margin-large">
                        Go back
                    </button>
                    :
                    <NavLink
                        className="uk-button uk-button-large uk-button-text uk-margin-large"
                        to="/portfolio">
                        Check out my work
                    </NavLink>
                    }
                </div>
            </div>
            {history.location.pathname === "/profile" && <Contact />}
        </section>
    )
}
export default ProfileContent;
