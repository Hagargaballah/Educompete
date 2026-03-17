import { FileText, Download, Send } from "lucide-react";

export default function CertificateStats({ teams }) {

    return (

        <div className="row mt-4 g-3">

            <div className="col-md-4">

                <div className="card p-3 d-flex flex-row align-items-center gap-3">

                    <FileText size={28} className="text-primary" />

                    <div>
                        <small className="text-muted">
                            Total Certificates
                        </small>

                        <h4 className="mb-0">
                            {teams.length}
                        </h4>
                    </div>

                </div>

            </div>


            <div className="col-md-4">

                <div className="card p-3 d-flex flex-row align-items-center gap-3">

                    <Download size={28} className="text-success" />

                    <div>
                        <small className="text-muted">
                            Generated
                        </small>

                        <h4 className="mb-0">
                            {teams.length}
                        </h4>
                    </div>

                </div>

            </div>


            <div className="col-md-4">

                <div className="card p-3 d-flex flex-row align-items-center gap-3">

                    <Send size={28} className="text-purple" />

                    <div>
                        <small className="text-muted">
                            Sent via Email
                        </small>

                        <h4 className="mb-0">
                            {teams.length - 1}
                        </h4>
                    </div>

                </div>

            </div>

        </div>

    )
}
