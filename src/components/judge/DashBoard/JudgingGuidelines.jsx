import { CheckCircle } from "lucide-react";

export default function JudgingGuidelines() {

    const guidelines = [
        "Review all submitted files before scoring",
        "Use the rubric criteria to ensure fair and consistent evaluation",
        "Provide constructive feedback in the comments section",
        "Complete all reviews by the judging deadline"
    ];

    return (
        <div style={{
            background: 'linear-gradient(135deg, #eff6ff, #f5f3ff)',
            border: '1px solid #c7d2fe'
        }}
            className="card shadow-sm p-4 border">

            <h5 className="fw-semibold mb-3">
                Judging Guidelines
            </h5>

            <ul className="list-unstyled">

                {guidelines.map((item, index) => (
                    <li
                        key={index}
                        className="d-flex align-items-start gap-2 mb-2"
                    >

                        <CheckCircle size={16} className="text-primary mt-1" />

                        <span>{item}</span>

                    </li>
                ))}

            </ul>

        </div>
    );
}