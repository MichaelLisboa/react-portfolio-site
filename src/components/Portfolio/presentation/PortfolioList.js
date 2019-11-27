import React, { Component } from 'react';
import PortfolioListItem from './PortfolioListItem';
import Contact from '../../Contact';
import { compose } from 'recompose';
import { getPosts } from '../../../lib/contentful';

const withLoading = (Component) => (props) => {
    return (
        <>
        <Component {...props} />
        <div className="interactions uk-container uk-container-expand uk-text-center uk-margin-large">
            {props.isLoading && <span className="uk-padding-remove uk-margin-remove uk-spinner" data-uk-spinner="ratio: 1" />}
        </div>
    </>
    )
}

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

const PortfolioItemsWithLoading = compose(withLoading,)(PortfolioItems);

class PortfolioList extends Component {
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
                    <>
                    {post.entrySlug !== "citibank" &&
                    <PortfolioListItem
                        key={post.entrySlug}
                        portfolioItem={post}
                    />
                    }
                    </>
                );
            });

        return (
            <>
            <PortfolioItemsWithLoading
                items={portfolioNodes}
                isLoading={this.state.isLoading}
            />
            <Contact />
            </>
        );
    }
}

export default PortfolioList;
