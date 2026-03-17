import Sidebar from "../../components/layout/navigation"
import { mockRubric } from "../../data/mockData";

export default function RubricPreview() {

    // calculate total score
    const totalPoints = mockRubric.criteria.reduce((sum, c) => {
        return sum + c.maxScore;
    }, 0);


    const guidelines = [
        "Total weights should equal 100%",
        "Use clear, measurable criteria",
        "Provide detailed descriptions",
        "Align criteria with competition goals",
        "Test with sample projects"
    ];

    return (
        <section className="container-fluid">
            <section className="row">
                {/* Sidebar */}
                <Sidebar role="judge" />
                {/* RubricPreview */}
                <section className="RubricPreview bg-light px-2 px-md-4 py-4 ms-5 ms-lg-0 col">
                    <h4 className="mb-4">Rubrics Management</h4>
                    <div className="card shadow-sm rounded-4">
                        <div className="card-body p-4">
                            {/* Title */}
                            <h4 className="fw-bold mb-4">
                                {mockRubric.name}
                            </h4>
                            {/* Criteria List */}
                            {mockRubric.criteria.map((criterion, index) => (
                                <div
                                    key={criterion.id}
                                    className="border-bottom pb-3 mb-3"
                                >
                                    <div className="d-flex justify-content-between">
                                        {/* Left */}
                                        <div>
                                            <div className="d-flex align-items-center gap-2 mb-1">
                                                <span className="fw-semibold">
                                                    {index + 1}. {criterion.name}
                                                </span>
                                                <span className="badge bg-light text-dark border">
                                                    {criterion.weight * 100}%
                                                </span>
                                            </div>
                                            <p className="text-muted mb-0 small">
                                                {criterion.description}
                                            </p>
                                        </div>
                                        {/* Right */}
                                        <div className="text-end">
                                            <h5 className="text-primary fw-bold mb-0">
                                                {criterion.maxScore}
                                            </h5>
                                            <small className="text-muted">
                                                points
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {/* Total Points */}
                            <div className="d-flex justify-content-between pt-3 border-top border-3">
                                <span className="fw-semibold">
                                    Total Points
                                </span>
                                <span className="fw-bold text-primary fs-4">
                                    {totalPoints}
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* rubric guidelines */}
                    <div style={{
                        background: 'linear-gradient(135deg, #eff6ff, #f5f3ff)',
                        border: '1px solid #c7d2fe'
                    }}
                        className="card rubric-guidelines mt-4 shadow-sm rounded-4">
                        <div className="card-body">
                            {/* Title */}
                            <h5 className="fw-semibold mb-3">
                                Rubric Guidelines
                            </h5>
                            {/* List */}
                            <ul className="list-unstyled mb-0">
                                {guidelines.map((item, index) => (
                                    <li key={index} className="mb-2 small text-muted guideline-item">
                                • {item}
                            </li>
                                ))}
                        </ul>
                    </div>
                </div>
            </section>
        </section>
        </section >
    )
}