import { Award } from "lucide-react";

export default function CertificatePreview({
    templateSettings,
    team
}) {

    return (

        <div className="card p-sm-4">

            <div
                id="certificate"
                className="certificate-preview text-center d-flex flex-column justify-content-center align-items-center"
            >

                <Award size={70} className="text-warning mb-3" />

                <h1 className="certificate-title">
                    {templateSettings.title}
                </h1>

                <h4 className="text-primary mb-4">
                    {templateSettings.subtitle}
                </h4>

                <p className="certificate-text">
                    {templateSettings.bodyText}
                </p>

                <h2 className="certificate-name">
                    {team?.name || "Team Name"}
                </h2>

                <p className="text-muted">
                    {team?.school || "School Name"}
                </p>

                <p className="mt-3">
                    Has successfully participated and achieved
                </p>

                <h4 className="text-primary fw-bold">Rank #{team?.rank}</h4>

                <div className="border-top mt-4 pt-3 w-75">
                    <small className="text-muted">
                        {templateSettings.footer}
                    </small>
                </div>

            </div>

        </div>
    )
}