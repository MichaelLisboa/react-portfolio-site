import React, { Component } from 'react';
import { getPostBySlug } from '../../lib/contentful';
import PortfolioDetailContent from "./presentation/PortfolioDetailContent";
import Contact from '../Contact';

class PortfolioDetail extends Component {
    constructor (props) {
        super(props);
        this.state = {
            entryHeroImage: '',
            entryHeadline: '',
            entrySubHeadline: '',
            entryDetails: '',
            entryImages: '',
            isLoading: true
        };
    }

    componentDidMount () {
        const slug = this.props.match.params.portfolioDetail;
        getPostBySlug(slug)
            .then(response => {
                const post = response.items[0].fields;
                this.setState({ ...post, isLoading: false });
            });
    }

    render () {
        if (this.state.isLoading) {
            return (
                <div />
            );
        }

        return (
            <>
                <PortfolioDetailContent portfolio={this.state} />
                <Contact />
            </>
        );
    }
}

export default PortfolioDetail;
