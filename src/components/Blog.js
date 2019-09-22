import React, { Component } from 'react';
import BlogListItem from './presentation/BlogListItem';
import Contact from './Contact';
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
        const postsArray = this.state.posts;
        const postNodes = postsArray
            .sort((a, b) =>
                new Date(b.date).getTime() - new Date(a.date).getTime()
            )
            .map(post => {
                return <BlogListItem blog={post} key={post.path} />
            });

        return  (
            <>
                <header style={headerStyles}
                    className="uk-container uk-container-expand uk-light
                    uk-flex uk-flex-center uk-flex-middle">
                    <div className="uk-width-4-5 uk-width-2-3@ uk-text-center">
                        <h2>
                            Waste no time.
                        </h2>
                        <p className="header-lead uk-text-lead uk-margin-remove-vertical">
                            Design, code, art, thoughts.
                        </p>
                    </div>
                </header>
                <section className="uk-section">
                    <div className="uk-container uk-container-small">
                        <div className="uk-grid" data-uk-grid>
                            <div className="uk-width-1-1">
                                {postNodes}
                            </div>
                        </div>
                    </div>
                </section>
                <Contact />
            </>
        )
    }
}

export default Blog;
