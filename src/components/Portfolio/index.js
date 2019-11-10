import React from 'react';
import PortfolioList from './presentation/PortfolioList';
import { PageHeader } from "../Content";
import './Portfolio.css';

const Portfolio = props => {
    return (
        <>
        <PageHeader
            theme="#26a69a"
            title="Brand. Experience. Code."
            subtitle="Case studies of my work."
        />
        <PortfolioList />
        </>
    )
}

export default Portfolio;
