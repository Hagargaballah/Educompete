import { Upload } from 'lucide-react';

export default function UploadedFiles({ files }) {
    return (
        <div>
            {files && files.length > 0 ? (
                files.map((file) => (
                    <div style={{
                        background : "rgba(222, 231, 239, 0.223)"
                    }}
                        key={file.id}
                        className="list-group-item d-flex flex-column flex-sm-row justify-content-between align-items-center mt-3 px-3 py-2 rounded-4"
                    >
                        <div className="d-flex flex-column flex-sm-row align-items-center gap-3">
                            <div className='text-primary'>
                                <Upload size={20} />
                            </div>
                            <div>
                                <h6 className="mb-1">{file.name}</h6>
                                <small className="text-muted">
                                    {file.size} • Uploaded {file.uploadedAt}
                                </small>
                            </div>
                        </div>

                        <button className="btn fw-semibold">View</button>
                    </div>
                ))
            ) : (
                <p className="text-muted">No files uploaded</p>
            )}
        </div>
    );
}