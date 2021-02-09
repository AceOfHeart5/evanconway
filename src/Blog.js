import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    const [blogs, setBlogs] = useState(null);
    const [viewing, setViewing] = useState("list");

    // get blog data
    // this useEffect replaces ComponentDidMount in class components
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setBlogs(json));
    }, []);

    // update component when blogs is populated
    // this useEffect replaces componentDidUpdate in class components
    useEffect(() => {}, [blogs]);

    const getBlogListing = (blog, key) => {
        // We will replace this description code with something else later
        let description = blog.body.slice(0, 100) + "...";
        return (
            <li key={key} className="bloglisting">
                <Link to={`blog/${String(key)}`}>
                    <h3>{blog.title}</h3>
                    <div>{description}</div>
                </Link>
            </li>
        )
    }

    if (!blogs) {
        return (
            // just an empty div, but we make it the height of the screen to avoid drawing
            // a single border bar when changing to the blog, looks nice this way
            <div style={{height: "100vh"}}></div>
        );
    } 

    if (window.location.pathname.endsWith("blog")) {
        return (
            <div className="blogwrapper">
                <ul className="bloglist">
                    {blogs.map((e, i) => getBlogListing(e, i))}
                </ul>
            </div>
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
