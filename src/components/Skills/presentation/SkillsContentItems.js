import React from "react";
import { Link } from "react-router-dom";

const CaseStudyLink = ({children, ...props}) => {
    return (
        <Link
            className="case-study-link uk-text-nowrap"
            to={props.link}>
                {children}<span data-uk-icon="icon: arrow-right; ratio: 0.7" />
        </Link>
    )
}
export const UxMessage =
    <>
        <p className="uk-h4 uk-margin-remove uk-visible@s">
            User Experiences
        </p>
        <h5 className="uk-margin-remove">
            Create Inspiring Experiences.<br />
            Experiences that solve problems.<br />
            Experiences that will be remembered.<br />
            Experiences that people <span className="uk-text-danger" data-uk-icon="icon: heart"></span>
        </h5>
        <div className="skills-case-study-buttons">
            <p className="uk-h6 uk-margin-remove uk-padding-remove">Cases</p>
            <CaseStudyLink
                link="/portfolio/thailand-fintech-app">
                    DeeMoney
            </CaseStudyLink>
            <CaseStudyLink
                link="/portfolio/geomain">
                    GeoMain
            </CaseStudyLink>
            <CaseStudyLink
                link="/portfolio/zyllem">
                    Zyllem
            </CaseStudyLink>
        </div>
    </>

export const CreativeMessage =
    <>
        <p className="uk-h4 uk-margin-remove uk-visible@s">
            Brand Experiences
        </p>
        <h5 className="uk-margin-remove">
            Designer, Copywriter, Creative Director. I've led teams&mdash;large and small&mdash;for some of the biggest <Link className="text-background text-background-indigo
                uk-link-reset uk-link uk-nowrap" to={'/resume'}>creative agencies</Link> in the world.
        </h5>

        <div className="skills-case-study-buttons">
            <p className="uk-h6 uk-margin-remove uk-padding-remove">Cases</p>
            <CaseStudyLink
                link="/portfolio/oreo">
                    Oreo
            </CaseStudyLink>
            <CaseStudyLink
                link="/portfolio/raffles-hotels">
                    Raffles Hotels
            </CaseStudyLink>
            <CaseStudyLink
                link="/portfolio/insead">
                    Insead
            </CaseStudyLink>
        </div>
    </>

export const TechMessage =
    <>
        <p className="uk-h4 uk-margin-remove uk-visible@s">
            Product Experiences
        </p>
        <h5 className="uk-margin-remove">
            I make things work, whether it's building mobile apps in React,
            or diving into Python and Pandas for data analytics.<br />
            <small className="uk-text-muted">P.S. Check <a href="https://github.com/MichaelLisboa" className="text-background text-background-indigo uk-link-reset uk-link uk-nowrap">my GitHub</a> to get the code for this site.</small>
        </h5>

        <div className="skills-case-study-buttons">
            <p className="uk-h6 uk-margin-remove uk-padding-remove">Cases</p>
            <CaseStudyLink
                link="/portfolio/influense">
                    Influen$e
            </CaseStudyLink>
            <CaseStudyLink
                link="/portfolio/purple-temple">
                    Purple Temple
            </CaseStudyLink>
            <CaseStudyLink
                link="/portfolio/influense-content-market-watch">
                    Content MarketWatch
            </CaseStudyLink>
        </div>
    </>
