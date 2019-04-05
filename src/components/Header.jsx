import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { getHeroCtas } from '../lib/contentful';
import '../css/Header.css';

const headerStyles = {
    // height: '30vh',
    backgroundColor: '#ebebeb'
};

const CtaItem = (props) => {
    const {
        entryClient,
        entryTopic,
        entryImage,
        entryText,
        textPosition,
        entryPath,
        buttonStyle
    } = props.cta;

    console.log(props)

    return (
        <Fragment>
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
                    <p className="case-study-label uk-margin-remove uk-padding-remove">Case Study: {entryTopic}</p>
                    <h3 className="case-study-header-title uk-margin-remove">
                        {entryText}
                    </h3>
                    <NavLink className={`uk-button uk-button-large ${buttonStyle} uk-margin`}
                        to={entryPath}>
                        See more
                    </NavLink>
                </div>

                <div className={`uk-width-1-2 uk-overlay ${textPosition} uk-hidden@s`}>
                    <p className="case-study-label uk-margin-remove uk-padding-remove">Case Study: {entryTopic}</p>
                    <h3 className="case-study-header-title uk-margin-remove">
                        {entryText}
                    </h3>
                    <NavLink className={`uk-button uk-button-small ${buttonStyle}`}
                        to={entryPath}>
                        See more
                    </NavLink>
                </div>
            </li>
        </Fragment>
    );
};

class Header extends Component {
    constructor (props) {
        super(props);
        this.state = { posts: [] };
    }

    componentDidMount () {
        getHeroCtas()
            .then(response => {
                const posts = response.items.map(item => item.fields);
                this.setState({ posts });
            })
            .catch(error => console.error(error));
    }

    render () {
        let ctaArray = this.state.posts;

        let ctaNodes = ctaArray
            .sort((a, b) =>
                a.entryId - b.entryId
            )
            .map(post => {
                return <CtaItem cta={post} key={post.entryClient} />
            });

        return (
            <header style={headerStyles}>
                <div className="uk-position-relative"
                    data-uk-slideshow="autoplay: true; autoplay-interval: 5000; animation: fade; pause-on-hover: false;">
                    <ul className="uk-slideshow-items uk-height-small">
                        {ctaNodes}
                    </ul>

                    <div className="uk-position-bottom-center uk-visible@s uk-light">
                        <ul className="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin" />
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
