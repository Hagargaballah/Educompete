export default function ScoringGuide() {

    const guide = [
        {
            title: "Excellent (90-100%)",
            desc: "Exceeds expectations in all areas"
        },
        {
            title: "Good (75-89%)",
            desc: "Meets expectations with minor improvements needed"
        },
        {
            title: "Satisfactory (60-74%)",
            desc: "Meets basic requirements"
        },
        {
            title: "Needs Improvement (<60%)",
            desc: "Significant improvements required"
        }
    ];

    return (
        <div className="card shadow-sm p-4 rounded-4">

            <h5 className="fw-bold mb-3">
                Scoring Guide
            </h5>

            {guide.map((g, i) => (
                <div key={i} className="mb-3">
                    <p className="fw-semibold mb-1">
                        {g.title}
                    </p>
                    <small className="text-muted">
                        {g.desc}
                    </small>
                </div>
            ))}

        </div>
    );
}