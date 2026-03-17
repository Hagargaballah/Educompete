import ScoreSlider from "./ScoreSlider";

export default function EvaluationCriteriaCard({ rubric, scores, onScoreChange }) {

    return (
        <div className="card shadow-sm p-4 rounded-3">
            {/* Card title */}
            <h5 className="fw-bold mb-4">
                Evaluation Criteria
            </h5>

            {/* Loop through all criteria inside rubric
            Example: Innovation, Technical Implementation, Impact... */}

            {rubric.criteria.map(c => {
                const score = scores[c.id] || 0;  /* Get the current score for this criterion. If no score yet → default = 0 */

                return (
                    <div key={c.id} className="mb-4">

                        {/* Top section: name + current score */}
                        <div className="d-flex justify-content-between">
                            <div>
                                <p className="fw-semibold mb-1">
                                    {c.name}
                                </p>
                                <small className="text-muted">
                                    {c.description}
                                </small>
                            </div>
                            {/* Current score display */}
                            <div className="text-end">
                                <h5 className="text-primary mb-0">
                                    {score}
                                </h5>
                                {/* Maximum score allowed */}
                                <small>/ {c.maxScore}</small>
                            </div>
                        </div>
                        {/* Score slider */}
                        <ScoreSlider
                            value={score}
                            max={c.maxScore}
                            onChange={(value) =>
                                onScoreChange(c.id, value)
                            }
                        />

                    </div>
                );
            })}

        </div>
    );
}