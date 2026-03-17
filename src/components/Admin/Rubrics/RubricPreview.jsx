export default function RubricPreview({ rubric }) {

    const totalPoints = rubric.criteria.reduce(
        (sum, c) => sum + c.maxScore,
        0
    );

    return (

        <div className="card border-0 shadow-sm rounded-4 p-4">

            <h5 className="fw-bold mb-4">Preview</h5>

            <h4 className="fw-bold mb-4">
                {rubric.name}
            </h4>

            {rubric.criteria.map((c, i) => (

                <div key={c.id} className="mb-3 pb-3 border-bottom">

                    <div className="d-flex justify-content-between">

                        <div>

                            <div className="fw-semibold">
                                {i + 1}. {c.name}
                            </div>

                            <div className="text-muted small">
                                {c.description}
                            </div>

                        </div>

                        <div className="text-end">

                            <div className="fw-bold text-primary">
                                {c.maxScore}
                            </div>

                            <div className="small text-muted">
                                points
                            </div>

                        </div>

                    </div>

                </div>

            ))}

            <div className="d-flex justify-content-between pt-3">

                <span className="fw-bold">
                    Total Points
                </span>

                <span className="fw-bold text-primary">
                    {totalPoints}
                </span>

            </div>

        </div>
    );
}
