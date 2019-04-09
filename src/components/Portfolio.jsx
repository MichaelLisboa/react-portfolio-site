import React, { Component, Fragment } from 'react';
import PortfolioItem from './presentation/PortfolioItem.jsx';
import Contact from './Contact.jsx';
import '../css/Portfolio.css';
import { getPosts } from '../lib/contentful';

const headerStyles = {
    height: '30vh',
    backgroundColor: '#49839a'
};

class Portfolio extends Component {
    constructor (props) {
        super(props);
        this.state = { posts: [] };
    }

    componentDidMount () {
        getPosts()
            .then(response => {
                const posts = response.items.map(item => item.fields);
                this.setState({ posts });
            })
            .catch(error => {
                console.error(error);
            });
    }

    render () {
        if (!this.state.posts.length) return null;
        const portfolioNodes = this.state.posts
            .sort((a, b) => b.entryId - a.entryId)
            .map((post, i) => {
                return (
                    <PortfolioItem key={post.entryKey} portfolioItem={post} />
                );
            });

        return (
            <Fragment>
                <header style={headerStyles}
                    className="uk-container uk-container-expand uk-light
                    uk-flex uk-flex-center uk-flex-middle">
                    <div className="uk-width-4-5 uk-width-2-3@s uk-text-center">
                        <h2>
                            <span className="uk-text-nowrap uk-margin-small-right">Brand.</span>
                            <span className="uk-text-nowrap uk-margin-small-right">UX.</span>
                            <span className="uk-text-nowrap">Code.</span>
                        </h2>
                        <p className="header-lead uk-text-lead uk-margin-remove-vertical">
                            Case studies of my work.
                        </p>
                    </div>
                </header>
                <section className="uk-section">
                    <Fragment>
                        <div className="uk-container uk-container-small">
                            <div className="portfolio-items uk-grid uk-grid-small uk-child-width-1-2@m" data-uk-grid
                                data-uk-height-match="target: .uk-card-body">
                                {portfolioNodes}
                            </div>
                        </div>
                    </Fragment>
                </section>
                <Contact />
            </Fragment>
        );
    }
}

export default Portfolio;
