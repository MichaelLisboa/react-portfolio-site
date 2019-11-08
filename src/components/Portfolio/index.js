import React, { Component } from 'react';
import PortfolioListItem from './presentation/PortfolioListItem';
import { compose } from 'recompose';
import { PageHeader } from "../Content";
import Contact from '../Contact';
import './Portfolio.css';
import { getPosts } from '../../lib/contentful';

const withLoading = (Component) => (props) =>
    <>
        <Component {...props} />
        <div className="interactions uk-container uk-container-expand uk-text-center uk-margin-large">
            {props.isLoading && <span className="uk-padding-remove uk-margin-remove uk-spinner" data-uk-spinner="ratio: 1" />}
        </div>
    </>

const PortfolioItems = ({items}) =>
    <section className="uk-section">
        <div className="uk-container uk-container-small">
            <div className="portfolio-items uk-child-width-1-2@s"
                data-uk-grid
                data-uk-height-match="target: .uk-card-body">
                {items}
            </div>
        </div>
    </section>

class Portfolio extends Component {
    constructor (props) {
        super(props);
        this.state = {
            posts: [],
            isLoading: true
        };
    }

    componentDidMount () {
        getPosts()
        .then(response => {
            const posts = response.items.map(item => item.fields);
            this.setState({
                posts,
                isLoading: false
            });
        })
        .catch(error => {
            console.error(error);
        });
    }

    render () {
        if (!this.state.posts.length) return null;
        const portfolioNodes = this.state.posts
            .sort((a, b) => new Date(b.entryDate).getTime() - new Date(a.entryDate).getTime())
            .map((post, i) => {
                return (
                    <PortfolioListItem
                        key={post.entrySlug}
                        portfolioItem={post}
                    />
                );
            });

        return (
            <>
                <PageHeader
                    theme="#26a69a"
                    title="Brand. Experience. Code."
                    subtitle="Have a look at what I've done. This is just how good I am."
                />
                <PortfolioItemsWithLoading
                    items={portfolioNodes}
                    isLoading={this.state.isLoading}
                    />
                <Contact />
            </>
        );
    }
}

const PortfolioItemsWithLoading = compose(
    withLoading,
)(PortfolioItems);

export default Portfolio;
