import { Settings } from "lucide-react";

export default function CertificateTemplateEditor({
    templateSettings,
    setTemplateSettings
}) {

    const handleChange = (field, value) => {
        setTemplateSettings(prev => ({
            ...prev,
            [field]: value
        }))
    }

    return (

        <div className="card p-4 h-100">

            <div className="d-flex align-items-center gap-2 mb-3">
                <Settings size={18} />
                <h5 className="fw-bold mb-0">Template Settings</h5>
            </div>

            <div className="d-flex flex-column gap-3">

                <div>
                    <label className="form-label">Title</label>
                    <input
                        className="form-control"
                        value={templateSettings.title}
                        onChange={(e) => handleChange("title", e.target.value)}
                    />
                </div>

                <div>
                    <label className="form-label">Subtitle</label>
                    <input
                        className="form-control"
                        value={templateSettings.subtitle}
                        onChange={(e) => handleChange("subtitle", e.target.value)}
                    />
                </div>

                <div>
                    <label className="form-label">Body Text</label>
                    <input
                        className="form-control"
                        value={templateSettings.bodyText}
                        onChange={(e) => handleChange("bodyText", e.target.value)}
                    />
                </div>

                <div>
                    <label className="form-label">Footer</label>
                    <textarea
                        className="form-control"
                        rows="2"
                        value={templateSettings.footer}
                        onChange={(e) => handleChange("footer", e.target.value)}
                    />
                </div>

                <button className="btn btn-primary mt-2">
                    Save Template
                </button>

            </div>

        </div>

    )
}
