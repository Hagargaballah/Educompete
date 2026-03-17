export default function ReviewTips() {

    const tips = [
        "Review all files before scoring",
        "Be objective and fair",
        "Provide constructive feedback",
        "Consider the category requirements",
        "Save drafts regularly"
    ];

    return (
        <div className="card shadow-sm p-4 rounded-4">

            <h5 className="mb-3">
                Review Tips
            </h5>

            <ul className="mb-0 small fw-semibold text-muted">

                {tips.map((tip, i) => (
                    <li key={i}>{tip}</li>
                ))}

            </ul>

        </div>
    );
}