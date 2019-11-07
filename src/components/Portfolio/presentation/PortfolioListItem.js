import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioItem = props => {
    const {
        entryCategory,
        entryClient,
        entryDescription,
        entryTileImage,
        entrySlug,
    } = props.portfolioItem;


    const categories = entryCategory.split(',')
        .map((category, i) => {
            return (
                <span key={i} className="uk-label uk-margin-small-right uk-margin-small-top">
                    {category}
                </span>
            )
        })

    return(
        <div>
            { props ? (
                <div className="uk-card uk-card-secondary uk-light uk-card-small uk-box-shadow-medium
                    uk-box-shadow-hover-large" data-tags="">
                    <div className="uk-card-media-top">
                        <img
                            src={entryTileImage.fields.file.url}
                            alt="client"
                            data-uk-img
                        />
                    </div>
                    <div className="uk-card-body">
                        <Link
                            style={{textDecoration: 'none'}}
                            className="uk-display-inline-block"
                            to={{
                                pathname: `/portfolio/${entrySlug}`,
                                state: { props }
                            }}
                        >
                        <h3 className="uk-card-title">{entryClient} <span style={{color: "#b0bec5", opacity: "0.4"}} uk-icon="icon: arrow-right;"></span></h3>
                        </Link>
                        <p>{entryDescription}</p>
                        <div className="uk-width-1-1 uk-margin-small-bottom">
                            <h6 className="uk-heading-line uk-text-small uk-margin-remove-bottom">
                                <span>What I did</span>
                            </h6>
                            {categories}
                        </div>
                    </div>
                    <div className="uk-card-footer uk-text-center">
                        <Link className="uk-button uk-button-portfolio uk-margin-small-bottom"
                            to={{
                                pathname: `/portfolio/${entrySlug}`,
                                state: { props }
                            }}
                        >
                        Read more <span style={{color: "#b0bec5"}} uk-icon="icon: arrow-right; ratio: 0.75"></span>
                        </Link>
                    </div>
                </div>
            ) : null}
        </div>
    )
}
export default PortfolioItem;
