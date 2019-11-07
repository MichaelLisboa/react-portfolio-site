import React from "react";
import { Link } from "react-router-dom";

export const UxMessage =
    <>
        <h4 className="uk-margin-remove uk-visible@s">
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

export const CreativeMessage =
    <>
        <h4 className="uk-margin-remove uk-visible@s">
            Creative Direction &amp; Strategy
        </h4>
        <h5 className="uk-margin-remove">
            Designer, Copywriter, Creative Director.<br />I've led teams&mdash;large and small&mdash;for some of the biggest <Link className="text-background text-background-indigo
                uk-link-reset uk-link uk-nowrap" to={'/resume'}>creative agencies</Link> in the world.
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

export const TechMessage =
    <>
        <h4 className="uk-margin-remove uk-visible@s">
            Full-Stack Development
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
                    to="/portfolio/purple-temple">
                        Purple Temple<br />
                        <small>The Tinder of Advertising for Global Brands</small>&nbsp;
                        <span data-uk-icon="icon: arrow-right; ratio: 0.7" />
                </Link>
            </li>
            <li>
                <Link
                    to="/portfolio/influense-content-market-watch">
                        Content Market Watch<br />
                        <small>A Live Trading Platform for Visual Content</small>&nbsp;
                        <span data-uk-icon="icon: arrow-right; ratio: 0.7" />
                </Link>
            </li>
        </ul>
    </>
