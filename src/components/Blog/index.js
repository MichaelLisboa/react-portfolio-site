import React from "react";
import BlogList from "./presentation/BlogList";
import { PageHeader } from "../Content";
import "./Blog.css";

const Blog =props => {
    return (
        <>
        <PageHeader
            theme="#f06292"
            title="Waste no time."
            subtitle="Design, code, art, thoughts."
        />
        <BlogList />
        </>
    )
}

export default Blog;
