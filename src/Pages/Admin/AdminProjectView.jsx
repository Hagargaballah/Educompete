import { useParams, Link } from "react-router-dom";
import { mockProjects, mockRubric } from "../../data/mockData";
import Sidebar from "../../components/layout/navigation";
import ProjectDetailsCard from "../../components/judge/review/ProjectDetails";
import ProjectFilesCard from "../../components/judge/review/ProjectFiles";
import ScoreSummaryCard from "../../components/judge/review/ScoreSummary";
import '../../Styles/Admin/Admin.css'


export default function AdminProjectView() {

    const { projectId } = useParams();

    const project = mockProjects.find(p => p.id === projectId);

    if (!project) return <div className="p-5">Project not found</div>;

    return (

        <section className="container-fluid">
            <section className="row">

                {/* Sidebar */}
                <Sidebar role="admin" />
                {/* AdminProjectView */}
                <section className="padding col py-4 px-5 px-lg-4 ms-4 ms-md-5 ms-lg-0 bg-light">
                    {/* Header */}
                    <div className="d-flex align-items-center gap-3 mb-4">
                        {/* back btn */}
                        <Link to="/Admin/projectsManagement" className="btn">
                            ← Back
                        </Link>
                        <h3 className="fw-bold">
                            {project.title}
                        </h3>
                    </div>

                    <div className="row g-4">

                        <div className="col-lg-8">

                            <ProjectDetailsCard project={project} />

                            <div className="mt-4">
                                <ProjectFilesCard files={project.files} />
                            </div>

                        </div>

                        <div className="col-lg-4">

                            {project.score ? (

                                <ScoreSummaryCard
                                    rubric={mockRubric}
                                    scores={{}}
                                    totalScore={project.score}
                                />

                            ) : (

                                <div className="card p-4">
                                    <p className="text-muted">
                                        This project has not been reviewed yet
                                    </p>
                                </div>

                            )}

                        </div>

                    </div>
                </section>

            </section>
        </section>

    );
}