import React from 'react';
import { Link } from 'react-router-dom';
import * as Markdown from 'react-markdown';

const BlogListItem = props => {
    const { mainImage, title, subtitle, path } = props.blog;
    return (
        <div className="uk-card uk-card-large uk-margin-large-bottom">
            {mainImage &&
            <div className="uk-card-media-top">
                <Link className="uk-link-text"
                    to={{
                        pathname: `/blog/${path}`,
                        state: { props }
                    }}>
                <img
                    src={mainImage.fields.file.url}
                    alt={mainImage.fields.description}
                    className="uk-border-rounded"
                    data-uk-img
                    />
                </Link>
            </div>
            }
            <div className="uk-card-body uk-padding-small-top">
                <p className="uk-h2 uk-margin-small-bottom">
                    <Link className="uk-link-text"
                        to={{
                            pathname: `/blog/${path}`,
                            state: { props }
                        }}>
                        {title}
                    </Link>
                </p>
                <Markdown source={subtitle} />
                <Link className="uk-button uk-button-large uk-button-text"
                    to={{
                        pathname: `/blog/${path}`,
                        state: { props }
                    }}>
                Read this
                </Link>
            </div>
        </div>
    );
};

export default BlogListItem
