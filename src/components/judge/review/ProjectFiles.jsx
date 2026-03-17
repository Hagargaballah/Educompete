import { FileText, Film, Archive, Download } from "lucide-react";

export default function ProjectFilesCard({ files }) {

    // icon accordind to file
    const getIcon = (name) => {
        if (name.endsWith(".mp4")) return Film;
        if (name.endsWith(".zip")) return Archive;
        return FileText;
    };

    return (
        <div className="card shadow-sm p-3 rounded-3">
            <h5 className="fw-bold mb-3">Project Files</h5>

            {files.map(file => {

                const Icon = getIcon(file.name);

                return (
                    <div
                        key={file.id}
                        className="d-flex flex-column flex-sm-row gap-3 gap-sm-0 justify-content-between align-items-center border rounded-3 p-3 mb-3"
                    >
                        <div className="d-flex align-items-center gap-3">
                            {/* icon */}
                            <div className="bg-primary-subtle text-primary p-2 rounded-3">
                                <Icon size={22} />
                            </div>
                            {/* file data */}
                            <div>
                                <p className="fw-semibold mb-0">
                                    {file.name}
                                </p>
                                <small className="text-muted">
                                    {file.size} • {file.type}
                                </small>
                            </div>
                        </div>
                        {/* download btn */}
                        <button className="btn btn-outline-secondary btn-sm fw-semibold">
                            <Download size={16} /> Download
                        </button>
                    </div>
                );
            })}

        </div>
    );
}