import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Blog = () => {
    const [blogs, setBlogs] = useState(null);
    const [viewing, setViewing] = useState("blog");

    // get blog data
    // this useEffect replaces ComponentDidMount in class components
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setBlogs(json));
    }, []);

    // update component when blogs is populated
    // this useEffect replaces componentDidUpdate in class components
    useEffect(() => {}, [blogs, viewing]);

    const history = useHistory();

    useEffect(() => {
        return history.listen(location => {
            /* Behold! Janky code to determine if the url ends with blog/number. I'm positive
            there's a cleaner way to do this with regex, but I can't be bothered right now. */
            const urlParts = location.pathname.split("/");
            const lastPart = urlParts[urlParts.length - 1];
            setViewing(lastPart);
        })
    }, [history]);

    const getBlogListing = (blog, key) => {
        // We will replace this description code with something else later
        let description = blog.body.slice(0, 100) + "...";
        return (
            <Link className="bloglink" key={key} to={`/blog/${String(key)}`}>
                <li className="bloglisting">
                    <h3>{blog.title}</h3>
                    <div>{description}</div>
                </li>
            </Link >
        )
    }

    if (!blogs) {
        return (
            // just an empty div, but we make it the height of the screen to avoid drawing
            // a single border bar when changing to the blog, looks nice this way
            <div style={{height: "100vh"}}></div>
        );
    } 

    const urlParts = window.location.pathname.split("/");
    const lastPart = urlParts[urlParts.length - 1];

    if (lastPart === "blog") {
        return (
            <div className="blogwrapper">
                <ul className="bloglist">
                    {blogs.map((e, i) => getBlogListing(e, i))}
                </ul>
            </div>
        );
    }

    /* Return blog post if we're looking at /blog/integer */
    if (Number.isInteger(parseInt(lastPart))) {
        const blog = blogs[parseInt(lastPart)];
        return (
            <div className="blogpost">
                <Link className="blogback" to="/blog">Back To List</Link>
                <h1>{blog.title}</h1>
                <main>{blog.body}</main>
            </div>
        );
    }

    // default return
    return (
        <h1>Oh no! Something is broken :(</h1>
    )
}

export default Blog;
