import React from "react";
import ProfileContent from "./ProfileContent";
import { useModal } from "../../Hooks/useModal";
import Modal from "../../Modal";

import headline from "../../../images/silver-bullet-headline.png";

const AboutContent = () => {
    const [modalOpen, setModalOpen, toggleModal] = useModal();
    return (
        <section className="about-section uk-section uk-section-expand uk-section-default uk-margin-top">
            <div className="uk-width-4-5@s uk-width-3-4@m">
                <img
                    src={headline}
                    alt="Your Creative Silver Bullet. Right Here."
                    />
                <p className="uk-text-lead uk-margin-large-top">
                    <span className="uk-margin-bottom uk-display-block">Hi, I'm Michael.</span>
                    Depending on who you ask, <span className="uk-text-nowrap">you might hear</span> that I'm a
                    brand strategist, creative director, <span className="uk-text-nowrap">UX specialist</span>,
                    programmer, or even TechnoCreativeologist.
                </p>
                <p className="uk-text-lead uk-margin-remove-bottom uk-margin-medium-bottom@s">
                    You'll find that I'm all of the above.
                    <button
                        onClick={toggleModal}
                        className="uk-text-small uk-text-muted uk-button uk-button-small uk-button-link uk-display-block
                            uk-text-baseline uk-text-capitalize uk-text-small uk-padding-remove uk-margin-remove">
                        READ MORE...
                    </button>
                </p>
            </div>
            <Modal
                isActive={modalOpen}
                className="fullscreen-card">
                <ProfileContent isShowing={setModalOpen} />
            </Modal>
        </section>
    )
}
export default AboutContent;
