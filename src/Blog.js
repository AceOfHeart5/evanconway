import React, { useState, useEffect } from 'react';

const Blog = () => {
    const [blogs, setBlogs] = useState(null);
    const [viewing, setViewing] = useState("list");

    // get blog data
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setBlogs(json));
    }, []);

    // change component when blogs is populated
    // this useEffect replaces componentDidUpdate in class components
    useEffect(() => {
        console.log(blogs);
    }, [blogs]);

    const getBlogListing = (blog, key) => {
        // We will replace this description code with something else later
        let description = blog.body.slice(0, 100) + "...";
        return (
            <li key={key} className="bloglisting" onClick={() => setViewing(blog)}>
                <h3>{blog.title}</h3>
                <div>{description}</div>
            </li>
        )
    }

    if (!blogs) {
        return (
            <h1>Fetching blog data...</h1>
        );
    } 

    if (viewing === "list") {
        return (
            <ul className="bloglist">
                {blogs.map((e, i) => getBlogListing(e, i))}
            </ul>
        );
    }

    /* If we reach this point, viewing is a blog object. */
    if (viewing) {
        return (
            <div className="blogpost">
                <h4 className="blogback" onClick={() => setViewing("list")}>Back To List</h4>
                <h1>{viewing.title}</h1>
                <main>{viewing.body}</main>
            </div>
        );
    }
}
 
export default Blog;