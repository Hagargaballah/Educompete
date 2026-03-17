import { useState } from "react";
import Sidebar from "../../components/layout/navigation";
import CertificateTemplateEditor from "../../components/Admin/Certificate/CertificateTemplateEditor";
import CertificatePreview from "../../components/Admin/Certificate/CertificatePreview";
import CertificateList from "../../components/Admin/Certificate/CertificateList";
import CertificateStats from "../../components/Admin/Certificate/CertificateStats";
import { mockTeams } from "../../data/mockData";
import { Download, Send } from "lucide-react";

export default function CertificateManagement() {

    const [previewTeam, setPreviewTeam] = useState(null);

    const [templateSettings, setTemplateSettings] = useState({
        title: "Certificate of Achievement",
        subtitle: "STEM Innovation Challenge 2026",
        bodyText: "This is to certify that",
        footer: "Awarded on February 15, 2026",
    });

    // الفرق اللي اتقيمت بس
    const awardedTeams = mockTeams
        .filter(team => team.score !== undefined)
        .sort((a, b) => b.score - a.score);


    return (
        <section className="container-fluid">
            <section className="row">

                {/* Sidebar */}
                <Sidebar role="admin" />
                {/* CertificateManagement */}
                <section className="padding col py-4 px-5 px-lg-4 ms-4 ms-md-5 ms-lg-0 bg-light">
                    {/* Header */}
                    <div className="d-flex flex-column flex-sm-row gap-3 gap-sm-0 justify-content-between align-items-center mb-4">
                        <div>
                            <h2 className="fw-bold mb-1">
                                Certificate Management
                            </h2>
                            <p className="text-muted mb-0">
                                Design, generate, and distribute certificates
                            </p>
                        </div>

                        <div className="d-flex ps-4 ps-sm-0 gap-2">
                            <button className="btn btn-primary d-flex align-items-center gap-2">
                                <Download size={18} />
                                Download All
                            </button>
                            <button className="btn btn-outline-secondary d-flex align-items-center gap-2">
                                <Send size={18} />
                                Email All
                            </button>
                        </div>
                    </div>

                    {/* Template + Preview */}
                    <div className="row g-4">
                        {/* Template Editor */}
                        <div className="col-lg-4">
                            <CertificateTemplateEditor
                                templateSettings={templateSettings}
                                setTemplateSettings={setTemplateSettings}
                            />
                        </div>
                        {/* Preview */}
                        <div className="col-lg-8">
                            <CertificatePreview
                                templateSettings={templateSettings}
                                team={previewTeam}
                            />
                        </div>
                    </div>
                    {/* Teams List */}
                    <CertificateList
                        teams={awardedTeams}
                        templateSettings={templateSettings}
                        setPreviewTeam={setPreviewTeam}
                    />
                    {/* Stats */}
                    <CertificateStats
                        teams={awardedTeams}
                    />
                </section>
            </section>
        </section>
    );
}