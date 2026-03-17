export default function ScoreSummaryCard({
    rubric,
    scores,
    totalScore
}) {

    return (
        <div style={{
            background: 'linear-gradient(135deg, #eff6ff, #f5f3ff)',
            border: '1px solid #c7d2fe'
        }}
            className="card shadow-sm p-4 rounded-3">

            <h5 className="fw-bold mb-3">
                Score Summary
            </h5>

            {/* Loop through all criteria inside rubric
            Example: Innovation, Technical Implementation, Impact... */}
            {rubric.criteria.map(c => {
                const score = scores[c.id] || 0;

                return (
                    <div
                        key={c.id}
                        className="d-flex justify-content-between mb-2"
                    >
                        <span>{c.name}</span>

                        <span className="fw-semibold">
                            {score}/{c.maxScore}
                        </span>

                    </div>
                );
            })}

            <hr />

            <div className="d-flex justify-content-between">

                <strong>Total Score</strong>

                <h4 className="text-primary fw-bold">
                    {totalScore}/100
                </h4>

            </div>

        </div>
    );
}