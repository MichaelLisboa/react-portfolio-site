import React from 'react';

const PortfolioDetailImages = ({entryImages}) =>
    entryImages.map((image, i) => {
        return (
            <div key={`${image.sys.id}-${i}`} className="portfolio-detail-content uk-margin-small-bottom
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
    })

export default PortfolioDetailImages;
