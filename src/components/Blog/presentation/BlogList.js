import React, { Component } from "react";
import BlogListItem from "./BlogListItem";
import Contact from "../../Contact";
import { getBlogPosts } from "../../../lib/contentful";

class BlogList extends Component {
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

export default BlogList;
