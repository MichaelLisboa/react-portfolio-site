import React from 'react';
import * as Markdown from 'react-markdown';
import CodeBlock from "../../lib/CodeBlock";
import moment from 'moment';
import '../../css/Blog.css';

let galleryImages;

const BlogPostContent = (props) => {
    const { date, title, subtitle, mainImage, imageGallery, content } = props.blog;

    if (imageGallery.length > 0) {
        galleryImages = imageGallery.map((image, i) => {
            return (
                <div key={i}>
                    <figure>
                        <a href={image.fields.file.url}>
                            <img
                                data-src={image.fields.file.url}
                                width="300"
                                alt=""
                                data-uk-img
                            />
                        </a>
                    </figure>
                </div>
            );
        });
    }

    return (
        <section className="uk-section uk-article">
            <div className="uk-container uk-container-small">
                <p className="uk-text-bold uk-h2 uk-margin-remove-adjacent uk-margin-remove-top">{title}</p>
                <p className="uk-article-meta">Posted on {moment(date).format('MMMM D, YYYY')}</p>
                <p className="uk-text-lead uk-margin-bottom">{subtitle}</p>
            </div>
            { mainImage ? (
                <div className="uk-container uk-section uk-padding-small">
                    <div className="uk-position-relative">
                        <img
                            className="blogMainImage"
                            data-src={mainImage.fields.file.url}
                            data-uk-img
                            alt={title} />
                    </div>
                </div>
            ) : null}
            <div className="post-content uk-container uk-container-small">
                <Markdown
                    source={content}
                    renderers={{ code: CodeBlock }}
                    escapeHtml={false}
                />
            </div>
            { imageGallery.length > 0 ? (
                <div className="uk-container uk-container-small uk-margin-medium">
                    <div className="uk-grid uk-grid-medium uk-child-width-1-2 uk-child-width-1-3@s"
                        data-uk-grid data-uk-lightbox>
                        {galleryImages}
                    </div>
                </div>
            ) : null}
        </section>
    );
};

export default BlogPostContent;
