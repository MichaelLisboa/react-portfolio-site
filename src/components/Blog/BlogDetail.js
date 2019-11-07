import React, { Component } from 'react';
import { getBlogPostBySlug } from '../../lib/contentful';
import BlogDetailContent from './presentation/BlogDetailContent';
import Contact from '../Contact';

class BlogDetail extends Component {
    constructor (props) {
        super(props);

        this.state = {
            title: '',
            subtitle: '',
            mainImage: '',
            date: '',
            content: '',
            imageGallery: '',
            path: '',
            status: '',
            isLoading: true
        };
    }

    componentDidMount () {
        const slug = this.props.match.params.blog;
        getBlogPostBySlug(slug)
            .then(response => {
                const post = response.items[0].fields;
                this.setState({ ...post, isLoading: false });
            })
    }

    render () {
        if (this.state.isLoading) {
            return (
                <div / >
            );
        }

        return (
            <>
                <BlogDetailContent blog={this.state} />
                <Contact />
            </>
        );
    }
}

export default BlogDetail;
