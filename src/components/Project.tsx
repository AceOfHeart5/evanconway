interface ProjectProps {
    title: string,
    linkGithub?: string,
    linkProject?: string,
    images?: { imageLink: string, altText: string }[],
    description?: string,
    children?: React.JSX.Element | React.JSX.Element[],
}

const Project = ({ title, linkGithub, linkProject, images, description, children }: ProjectProps) => {
    return <section style={{
        maxWidth: "1200px",
        marginBottom: "50px",
        borderBottom: "4px solid gray",
    }}>
        <div style={{paddingBottom: '15px'}}>
            <h2>{title}</h2>
            { linkGithub ? <a href={linkGithub} className="link-github" style={{paddingRight: '10px'}}>Github</a> : null }
            { linkProject ? <a href={linkProject} className="link-project">Project</a> : null }
        </div>
        {images?.map(img => <img src={img.imageLink} alt={img.altText}/>)}
        { description ? <p>{description}</p> : null }
        {children}
    </section>
};

export default Project;
