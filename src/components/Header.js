import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { getHeroCtas } from '../lib/contentful';
import '../css/Header.css';

const CtaItem = (props) => {
    const {
        entryPortfolioReference,
        entryClient,
        entryImage,
        entryText,
        textPosition,
        buttonStyle
    } = props.cta;

    return (
        <>
            <li>
                <canvas width="750" height="300" />
                <img
                    src={entryImage.fields.file.url}
                    alt={entryClient}
                    data-uk-image
                    data-uk-cover
                />
                <div className={`uk-width-1-3 uk-overlay ${textPosition} uk-visible@s`}
                    data-uk-slideshow-parallax="y: -200, 100, 1000">
                    <p className="case-study-label uk-margin-remove uk-padding-remove">
                        Case Study: {entryPortfolioReference.fields.entryTopic}
                    </p>
                    <h3 className="case-study-header-title uk-margin-remove">
                        {entryText}
                    </h3>
                    <NavLink className={`uk-button uk-button-large ${buttonStyle} uk-margin`}
                        to={`/portfolio/${entryPortfolioReference.fields.entrySlug}`}>
                        See more
                    </NavLink>
                </div>

                <div className={`uk-width-1-2 uk-overlay ${textPosition} uk-hidden@s`}>
                    <p className="case-study-label uk-margin-remove uk-padding-remove">
                        Case Study: {entryPortfolioReference.fields.entryTopic}
                    </p>
                    <h3 className="case-study-header-title uk-margin-remove">
                        {entryText}
                    </h3>
                    <NavLink className={`uk-button uk-button-small ${buttonStyle}`}
                        to={`/portfolio/${entryPortfolioReference.fields.entrySlug}`}>
                        See more
                    </NavLink>
                </div>
            </li>
        </>
    );
};

class Header extends Component {
    constructor (props) {
        super(props);
        this.state = {
            posts: [],
            isLoading: true
        };
    }

    componentDidMount () {
        getHeroCtas()
            .then(response => {
                const posts = response.items.map(item => item.fields);
                this.setState({
                    posts,
                    isLoading: false
                });
            })
            .catch(error => console.error(error));
    }

    render () {
        let ctaArray = this.state.posts;
        let ctaNodes = ctaArray
            .sort((a, b) =>
                new Date(b.entryPortfolioReference.fields.entryDate).getTime()
                - new Date(a.entryPortfolioReference.fields.entryDate).getTime())
            .map(post => {
                return <CtaItem cta={post} key={post.entryClient} />
            });

        return (
            <header>
                {this.state.isLoading ?
                    (<div className="uk-height-1-1 uk-container uk-container-expand
                        uk-grid-collapse uk-flex-center uk-flex-middle" data-uk-grid>
                        <span className="uk-padding-remove uk-margin-remove uk-spinner" data-uk-spinner="ratio: 1" />
                    </div>)
                : (<div className="uk-position-relative"
                        data-uk-slideshow="autoplay: true; autoplay-interval: 5000; animation: fade; pause-on-hover: false;">
                        <ul className="uk-slideshow-items uk-height-small">
                            {ctaNodes}
                        </ul>
                        <div className="uk-position-bottom-center uk-visible@s uk-light">
                            <ul className="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin" />
                        </div>
                    </div>
                )}
            </header>
        );
    }
}

export default Header;
