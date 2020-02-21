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
                <p key={i}
                    style={{fontSize: "0.75rem", color: "#a0a0a0", marginTop: "0", marginBottom: "4px", marginRight: "8px"}}
                    className="uk-display-inline-block uk-text-small uk-text-nowrap">
                    {category}
                </p>
            )
        })

    return(
        <div className="portfolio-list">
            { props &&
                <div className="uk-card uk-card-small" data-tags={entryCategory.split(',')}>
                    <div className="uk-card-media-top">
                        <Link
                            style={{textDecoration: 'none'}}
                            className="uk-display-inline-block uk-link-reset"
                            to={{
                                pathname: `/portfolio/${entrySlug}`,
                                state: { props }
                            }}
                        >
                        <img
                            src={entryTileImage.fields.file.url}
                            alt="client"
                            data-uk-img
                        />
                        </Link>
                    </div>
                    <div className="uk-card-body">
                        <p className="uk-h6 uk-text-muted uk-margin-small-bottom uk-text-uppercase">
                            <Link
                                style={{textDecoration: 'none'}}
                                className="uk-display-inline-block uk-link-reset"
                                to={{
                                    pathname: `/portfolio/${entrySlug}`,
                                    state: { props }
                                }}
                            >
                            <strong>&mdash;</strong> {entryClient}
                            </Link>
                        </p>
                        <p className="uk-h3 uk-margin-remove-vertical">
                            <Link
                                style={{textDecoration: 'none'}}
                                className="uk-display-inline-block uk-link-reset"
                                to={{
                                    pathname: `/portfolio/${entrySlug}`,
                                    state: { props }
                                }}
                            >
                            {entryDescription}
                            </Link>
                        </p>
                        {categories}
                    </div>
                </div>
            }
        </div>
    )
}
export default PortfolioItem;
