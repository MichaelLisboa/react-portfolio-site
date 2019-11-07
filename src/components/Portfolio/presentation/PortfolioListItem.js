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
                <small key={i} className="uk-text-meta uk-margin-small-right uk-margin-small-top">
                    {category}
                </small>
            )
        })

    return(
        <div className="portfolio-list">
            { props &&
                <Link
                    style={{textDecoration: 'none'}}
                    className="uk-display-inline-block"
                    to={{
                        pathname: `/portfolio/${entrySlug}`,
                        state: { props }
                    }}
                >
                <div className="uk-card uk-card-small" data-tags={entryCategory.split(',')}>
                    <div className="uk-card-media-top">
                        <img
                            src={entryTileImage.fields.file.url}
                            alt="client"
                            data-uk-img
                        />
                    </div>
                    <div className="uk-card-body">
                        <p className="uk-h5 uk-text-bold">
                            {entryClient}&nbsp;
                            <span style={{color: "#b0bec5", opacity: "0.4"}} uk-icon="icon: arrow-right;"></span>
                        </p>
                        <h3 className="uk-margin-remove-vertical">{entryDescription}</h3>
                        {categories}
                    </div>
                </div>
                </Link>
            }
        </div>
    )
}
export default PortfolioItem;
