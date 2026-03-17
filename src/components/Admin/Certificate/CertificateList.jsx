import { Eye, Download, Send } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";


export default function CertificateList({ teams, setPreviewTeam }) {

    const generatePDF = async (team) => {

        // غير الشهادة للفريق المطلوب
        setPreviewTeam(team);

        // استنى الرياكت يحدث الواجهة
        setTimeout(async () => {

            const element = document.getElementById("certificate");

            const canvas = await html2canvas(element, { scale: 2 });

            const imgData = canvas.toDataURL("image/png");

            const pdf = new jsPDF("landscape", "mm", "a4");

            pdf.addImage(imgData, "PNG", 10, 10, 270, 180);

            pdf.save(`Certificate-${team.name}.pdf`);

        }, 300);

    };


    return (

        <div className="card mt-4">

            <div className="p-4 border-bottom">

                <h5 className="fw-bold mb-1">
                    Generate Certificates
                </h5>

                <small className="text-muted">
                    {teams.length} teams eligible for certificates
                </small>

            </div>


            {teams.map((team, index) => (

                <div
                    key={team.id}
                    className="d-flex flex-column flex-sm-row gap-3 gap-sm-0 justify-content-between align-items-center p-3 border-top"
                >

                    <div className="d-flex align-items-center gap-2 gap-sm-3">

                        <div className="rank-box">
                            {index + 1}
                        </div>

                        <div>
                            <div className="fw-semibold">
                                {team.name}
                            </div>

                            <small className="text-muted">
                                {team.school}
                            </small>
                        </div>

                        <span className="badge bg-warning text-dark">
                            Score: {team.score}
                        </span>

                    </div>


                    <div className="d-flex ps-sm-2 flex-column flex-sm-row gap-2">

                        <button
                            className="btn btn-outline-secondary btn-sm"
                            onClick={() => setPreviewTeam(team)}
                        >
                            <Eye size={16} /> Preview
                        </button>

                        <button
                            className="btn btn-primary btn-sm"
                            onClick={() => generatePDF(team)}
                        >
                            Generate PDF
                        </button>

                        <button className="btn btn-outline-secondary btn-sm">
                            <Send size={16} /> Email
                        </button>

                    </div>

                </div>

            ))}

        </div>

    )
}
