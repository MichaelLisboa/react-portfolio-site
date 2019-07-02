import React from 'react';
import { Link } from 'react-router-dom';
import * as Markdown from 'react-markdown';
import moment from 'moment';
import '../../css/Blog.css';

const BlogListItem = (props) => {
    const { date, title, subtitle, path } = props.blog;
    return (
        <article className="uk-section uk-section-small uk-padding-remove-top">
            <div>
                <p className="uk-text-lead uk-margin-remove-adjacent uk-text-bold uk-margin-small-bottom">
                    <Link className="uk-link-text"
                        to={{
                            pathname: `/blog/${path}`,
                            state: { props }
                        }}>
                        {title}
                    </Link>
                </p>
                <Markdown source={subtitle} />
                <p className="uk-article-meta">{moment(date).format('MMMM D, YYYY')}</p>
                <Link className="uk-button uk-button-default uk-button-small"
                    to={{
                        pathname: `/blog/${path}`,
                        state: { props }
                    }}>
                Read this
                </Link>
            </div>
            <hr />
        </article>
    );
};

export default BlogListItem
