import React, { Component, Fragment } from 'react';
import BlogListItem from './presentation/BlogListItem.jsx';
import Contact from './Contact.jsx';
import { getBlogPosts } from '../lib/contentful';
import '../css/Blog.css';

const headerStyles = {
    height: '30vh',
    backgroundColor: '#f06292'
};

class Blog extends Component {
    constructor (props) {
        super(props);
        this.state = { posts: [] };
    }

    componentDidMount () {
        getBlogPosts()
            .then(response => {
                const posts = response.items.map(item => item.fields);
                this.setState({ posts });
            })
            .catch(error => console.error(error));
    }
    render () {
        if (!this.state.posts.length) return null;
        let postsArray = this.state.posts;
        let postNodes = postsArray
            .sort((a, b) =>
                new Date(b.date).getTime() - new Date(a.date).getTime()
            )
            .map(post => {
                return <BlogListItem blog={post} key={post.path} />
            });

        return  (
            <Fragment>
                <header style={headerStyles}
                    className="uk-container uk-container-expand uk-light
                    uk-flex uk-flex-center uk-flex-middle">
                    <div className="uk-width-4-5 uk-width-2-3@ uk-text-center">
                        <h3 className="header-headline">
                            Waste no time.
                        </h3>
                        <p className="header-lead uk-text-lead uk-margin-remove-vertical">
                            Design, code, art, thoughts.
                        </p>
                    </div>
                </header>
                <section className="uk-section">
                    <div className="uk-container uk-container-small">
                        <div className="uk-grid" data-ukgrid>
                            <div className="uk-width-1-1">
                                {postNodes}
                            </div>
                        </div>
                    </div>
                </section>
                <Contact />
            </Fragment>
        )
    }
}

export default Blog;
