import React, { Component } from 'react';
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
            entryHeroImage,
            entryHeadline,
            entrySubHeadline,
            entryDetails,
            entryImages,
            entryKey,
        } = this.state;


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
            <React.Fragment>
                <div className="uk-cover-container">
                    <canvas width="1800" height="600"></canvas>
                    <img
                        src={entryHeroImage.fields.file.url}
                        alt={entryHeroImage.fields.title}
                        data-uk-img
                        data-uk-cover
                    />
                </div>
                <div className="uk-container uk-container-small uk-text-center uk-margin">
                    <h3 className="header-headline uk-margin-small-left uk-margin-small-right">
                        {entryHeadline}
                    </h3>
                    <p className="portfolio-lead uk-text-lead uk-margin-small-left uk-margin-small-right">
                        {entrySubHeadline}
                    </p>
                </div>
                <div className="uk-container uk-container-small uk-margin-large">
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
            </React.Fragment>
        );
    }
}

export default PortfolioDetail;
