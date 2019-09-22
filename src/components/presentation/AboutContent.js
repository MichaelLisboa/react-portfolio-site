import React from "react";

const AboutContent = () =>
    <div className="uk-container uk-container-small uk-margin-large-top">
        <div className="uk-width-expand@m">
            <div className="uk-padding-small">
                <p className="uk-text-lead about-intro">
                    <span className="uk-margin-bottom uk-display-block">Hi, I'm Michael.</span>
                    I'm an <span className="text-background text-background-red">experience designer</span>, <span className="text-background text-background-yellow uk-text-nowrap">creative director</span>, <span className="text-background text-background-orange">illustrator</span>, <span className="text-background text-background-green">programmer</span>, <span className="text-background text-background-indigo uk-text-nowrap">start-up founder</span>, and a <span className="text-background text-background-violet">really good guy</span> who specializes in the <i>creative</i> use
                    of <i>technology</i> to invent and design brand experiences that people <span className="uk-icon uk-text-danger" data-uk-icon="icon: heart; ratio: 1.75"></span>
                    <button
                        className="uk-text-small uk-text-muted uk-button uk-button-small uk-button-link uk-display-block
                            uk-text-baseline uk-text-capitalize uk-text-small uk-padding-remove uk-margin-remove"
                        data-uk-toggle="target: #toggle-about-content; animation: uk-animation-fade">
                        Read more...
                    </button>
                </p>

                <div id="toggle-about-content"  hidden>
                    <p className="uk-margin-small-top">
                        <span className="uk-dropcap uk-float-left" data-uk-icon="icon: quote-right; ratio: 2;" />
                        Originally from San Francisco, by way of New York, Michael launched his first digital agency back in the early 90's. Since then he’s led creative, user experience, and development teams to solve design and communication problems for the most recognized brands in the world, including Sony Entertainment, Justin Timberlake, Pepsi, Microsoft and over 100 others.</p>
                    <p className="uk-text-small uk-text-muted">Over the last 20 years he’s held Creative Director roles in some of the biggest agencies in Ad Land, he’s founded startups, and he’s developed massive AI platforms utilizing his talents in creative design, user experience, and programming.</p>
                    <p className="uk-text-small uk-text-muted">He’s one of those unique people that soaks in information, continues to learn every day, and&mdash;most importantly&mdash;he applies that knowledge to invent, execute and deliver world class results.</p>
                    <p className="uk-text-small uk-text-muted">Today, he’s living life as a freelancer in Bangkok with his dog, Astro.&quot;</p>
                </div>
                <div className="sc-only uk-width-1-1" data-uk-grid>
                    <div className="uk-align-left">
                        <a href="https://github.com/MichaelLisboa"
                            className="uk-icon-button uk-margin-small-right" data-uk-icon="github"><span>GitHub</span></a>
                        <a href="https://www.instagram.com/michael__lisboa/"
                            className="uk-icon-button" data-uk-icon="instagram"><span>Instagram</span></a>
                        <a href="https://www.linkedin.com/in/lisboa/"
                            className="uk-icon-button uk-margin-small-right" data-uk-icon="linkedin"><span>LinkedIn</span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>

export default AboutContent;
