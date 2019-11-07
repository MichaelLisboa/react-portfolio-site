import React from 'react';
import { NavLink } from 'react-router-dom'
import * as Markdown from 'react-markdown';
import PortfolioDetailImages from "./PortfolioDetailImages";

const PortfolioDetailContent = ({portfolio}) => {

    const {
        entryClient,
        entryHeroImage,
        entryHeadline,
        entrySubHeadline,
        entryCategory,
        entryDetails,
        entryImages,
    } = portfolio;

    const categories = entryCategory.split(',')
        .map((category, i) => {
            return (
                <span key={i} className="uk-label uk-margin-small-right uk-margin-small-top">
                    {category}
                </span>
            )
        })

    return (
        <>
            <div className="uk-cover-container">
                <canvas width="1800" height="600"></canvas>
                <img
                    src={entryHeroImage.fields.file.url}
                    alt={entryHeroImage.fields.title}
                    data-uk-img
                    data-uk-cover
                />
            </div>
            <hr className="uk-margin-remove" />
            <div style={{opacity: "0.95", zIndex: "2"}} className="uk-background-muted uk-padding-small uk-margin-large-bottom">
                <div className="uk-container">
                    <ul className="uk-breadcrumb uk-text-uppercase uk-text-small">
                        <li>
                            <NavLink to={{pathname: `/portfolio/`}}>
                                All Case Studies
                            </NavLink>
                        </li>
                        <li><span>{entryClient}</span></li>
                    </ul>
                </div>
            </div>
            <div className="portfolio-detail uk-container uk-container-small uk-text-center uk-margin">
                <h2 className="content-title uk-margin-large-left@s uk-margin-large-right@s">
                    {entryHeadline}
                </h2>
                <p className="content-lead uk-text-lead uk-margin-large-left@s uk-margin-large-right@s">
                    {entrySubHeadline}
                </p>
                {categories}
            </div>
            <div className="portfolio-detail uk-container uk-container-small uk-margin-large">
                <div className="uk-grid-collapse uk-width-1-1" data-uk-grid>
                    <div className="uk-width-3-5@m uk-margin-right@s">
                        <PortfolioDetailImages entryImages={entryImages} />
                    </div>
                    <div className="post-content uk-width-expand">
                        <Markdown escapeHtml={false} source={entryDetails} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default PortfolioDetailContent;
