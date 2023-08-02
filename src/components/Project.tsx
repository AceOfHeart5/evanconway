interface ProjectProps {
    title: string,
    linkGithub?: string,
    linkProject?: string,
    images?: { imageLink: string, altText: string }[],
    description: string,
}

/*
.project {
	max-width: 1200px;
	margin-bottom: 50px;
	border-bottom: 4px solid gray;
}
*/

const Project = ({ title, linkGithub, linkProject, images, description }: ProjectProps) => {
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
        <p>{description}</p>
    </section>
};

export default Project;
