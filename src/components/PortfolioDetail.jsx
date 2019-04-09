import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom'
import { getPostBySlug } from '../lib/contentful';
import * as Markdown from 'react-markdown';
import Contact from './Contact.jsx';

import '../css/Portfolio.css';

class PortfolioDetail extends Component {
    constructor (props) {
        super(props);
        this.state = {
            entryHeroImage: '',
            entryHeadline: '',
            entrySubHeadline: '',
            entryDetails: '',
            entryImages: '',
            entryKey: '',
            isLoading: true
        };
    }

    componentDidMount () {
        const slug = this.props.match.params.portfolioDetail;
        getPostBySlug(slug)
            .then(response => {
                const post = response.items[0].fields;
                this.setState({ ...post, isLoading: false });
            });
    }

    render () {
        if (this.state.isLoading) {
            return (
                <div />
            );
        }

        const {
            entryClient,
            entryHeroImage,
            entryHeadline,
            entrySubHeadline,
            entryCategory,
            entryDetails,
            entryImages,
            entryKey,
        } = this.state;

        const categories = entryCategory.split(',')
            .map((category, i) => {
                return (
                    <span key={i} className="uk-label uk-margin-small-right uk-margin-small-top">
                        {category}
                    </span>
                )
            })


        let portfolioImages = entryImages.map((image, i) => {
            return (
                <div key={`${entryKey}-${i}`} className="portfolio-detail-content uk-margin-small-bottom
                    uk-inline-clip uk-transition-toggle" data-tabindex="0">
                    <img
                        src={image.fields.file.url}
                        alt={image.fields.title}
                        data-uk-img
                    />
                    <div className="uk-transition-fade uk-position-cover uk-overlay
                        uk-overlay-primary uk-flex uk-flex-center uk-flex-middle">
                        {image.fields.description}
                    </div>
                </div>
            );
        });

        return (
            <Fragment>
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
                <div className="uk-background-muted uk-padding-small uk-margin-large-bottom">
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
                    <div className="uk-grid-small uk-width-1-1" data-uk-grid>
                        <div className="uk-width-3-5@m">
                            {portfolioImages}
                        </div>
                        <div className="post-content uk-width-expand">
                            <Markdown escapeHtml={false} source={entryDetails} />
                        </div>
                    </div>
                </div>
                <Contact />
            </Fragment>
        );
    }
}

export default PortfolioDetail;
