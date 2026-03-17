import { CheckCircle, AlertCircle } from "lucide-react";

export default function Submission_Checklist({ files = [], requiredFiles = [] }) {

    const checklist = requiredFiles.map((req) => {

        const uploaded = files.some(file =>
            file.name.toLowerCase().includes(req.key)
        );

        return {
            ...req,
            uploaded
        };
    });

    // حساب التقدم
    const required = checklist.filter((f) => f.required);
    const uploaded = required.filter((f) => f.uploaded);

    const progress = required.length
        ? Math.round((uploaded.length / required.length) * 100)
        : 0;

    return (
        <>
            {checklist.map((item) => {

                const Icon = item.uploaded ? CheckCircle : AlertCircle;

                const bgCard = item.uploaded
                    ? "bg-primary-subtle"
                    : "bg-secondary-subtle";

                const iconColor = item.uploaded
                    ? "text-success"
                    : "text-muted";

                const text = item.uploaded
                    ? `${item.name} Uploaded`
                    : item.required
                        ? `${item.name} Missing`
                        : `${item.name} (Optional)`;

                return (

                    <div
                        key={item.id}
                        className={`d-flex gap-3 align-items-center px-3 mt-3 rounded-4 ${bgCard}`}
                    >

                        <div className={iconColor}>
                            <Icon size={20} />
                        </div>

                        <p className="mt-3 small fw-semibold">
                            {text}
                        </p>

                    </div>

                );
            })}

            {/* Progress */}
            <div className="mt-5 mb-3">

                <div className="d-flex justify-content-between small fw-semibold mb-1">
                    <span>Submission Progress</span>
                    <span>{progress}%</span>
                </div>

                <div className="progress" style={{ height: "8px" }}>
                    <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>

            </div>
        </>
    );
}