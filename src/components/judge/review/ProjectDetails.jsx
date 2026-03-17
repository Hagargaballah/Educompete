export default function ProjectDetailsCard({ project }) {

    return (
        <div className="card shadow-sm p-4 rounded-3">

            <h5 className="fw-bold mb-4">Project Details</h5>

            <div className="mb-2">
                <p className="text-muted small mb-1">Team</p>
                <p className="fw-semibold">{project.teamName}</p>
            </div>

            <div className="mb-3">
                <p className="text-muted small mb-1">Category</p>
                <span className="badge bg-primary">
                    {project.category}
                </span>
            </div>

            <div className="mb-2">
                <p className="text-muted small mb-1">Description</p>
                <p>{project.description}</p>
            </div>

            <div>
                <p className="text-muted small mb-1">Submitted</p>
                <p>{project.submittedAt}</p>
            </div>

        </div>
    );
}