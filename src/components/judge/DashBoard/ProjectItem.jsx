import { Award } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProjectItem({ project, role, viewPath }) {

    return (
        // project item
        <div className="d-flex flex-column flex-md-row gap-4 gap-md-0 justify-content-between align-items-center border-bottom p-4">

            {/* project information */}
            <div className="flex-grow-1">
                <div className="d-flex align-items-center gap-3 mb-2">
                    {/* project title */}
                    <h5 className="fw-semibold mb-0">
                        {project.title}
                    </h5>
                    {/* project status */}
                    {project.status === "reviewed" ? (
                        <span className="badge bg-success-subtle text-success">
                            Reviewed
                        </span>
                    ) : (
                        <span className="badge bg-warning-subtle text-warning">
                            Pending
                        </span>
                    )}
                </div>
                {/* project description */}
                <p className="text-muted small mb-3">
                    {project.description}
                </p>
                <div className="d-flex flex-wrap gap-3 small">
                    {/* team name */}
                    <div className="d-flex gap-1">
                        <span className="text-muted">Team :</span>
                        <strong>{project.teamName}</strong>
                    </div>
                    {/* project category */}
                    <div className="d-flex gap-1">
                        <span className="text-muted">Category :</span>
                        <p className="fw-semibold border px-2 rounded-pill">
                            {project.category}
                        </p>
                    </div>
                    {/* num of files */}
                    <div className="d-flex gap-1">
                        <span className="text-muted">Files :</span>
                        <p>{project.files.length} uploaded</p>
                    </div>
                    {/* submittedAt */}
                    {project.submittedAt && (
                        <div className="d-flex gap-1">
                            <span className="text-muted">Submitted :</span>
                            <p> {project.submittedAt} </p>
                        </div>
                    )}
                </div>
                {/* score */}
                {project.score && (
                    <div className="mt-3 d-flex align-items-center gap-2">
                        <Award size={16} className="text-warning" />
                        <strong>
                            Score: {project.score}/100
                        </strong>
                    </div>
                )}
            </div>

            {/* buttons */}
            <div>
                {/* ADMIN */}
                {role === "admin" && (
                    <Link
                        to={`${viewPath}/${project.id}`}
                        className="btn btn-outline-secondary fw-semibold"
                    >
                        View
                    </Link>
                )}

                {/* JUDGE */}
                {role === "judge" && (
                    project.status === "reviewed" ? (
                        <Link
                            to={`${viewPath}/${project.id}`}
                            className="btn btn-outline-secondary fw-semibold"
                        >
                            View Review
                        </Link>
                    ) : (
                        <Link
                            to={`${viewPath}/${project.id}`}
                            className="btn btn-primary fw-semibold"
                        >
                            Review Project
                        </Link>
                    )
                )}
            </div>

        </div>

    );
}