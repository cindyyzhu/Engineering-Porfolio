function Projects() {
    const projects = [
        {
            title: "Personal Website",
            description: "My portfolio built with React.",
        },
        {
            title: "Circuit Simulator",
            description: "Tool for analyzing electrical circuits.",
        },
        {
            title: "Study Helper",
            description: "App that helps students solve homework faster.",
        },
    ];

    return (
        <section id="projects" className="section">
            <h2>Projects</h2>

            <div className="project-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;