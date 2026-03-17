import ProjectItem from "./ProjectItem";

export default function AssignedProjects({ projects, role, viewPath }) {

    return (
        <div className="card shadow-sm mb-4">
            {/* title */}
            <div className="card-header py-4 bg-white">
                <h5 className="fw-bold">Projects</h5>
            </div>
            {/* project item */}
            <div className="card-body p-0">
                {projects.map(project => (
                    <ProjectItem key={project.id} project={project} role={role} viewPath={viewPath} />
                ))}
            </div>

        </div>
    );
}