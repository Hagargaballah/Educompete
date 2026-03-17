import { useState } from "react";
import { Upload, AlertCircle } from "lucide-react";
import { mockCompetition, mockTeams, mockProjects } from "../../data/mockData";
import { guidelines } from "../../data/mockData";
import '../../Styles/student/student.css'




export default function ProjectSubmission() {

    // team (اول تيم)
    const team = mockTeams[0];

    // project لو موجود
    const project = mockProjects.find(p => p.teamId === team.id);

    // state project information
    const [projectTitle, setProjectTitle] = useState(project?.title || "");
    const [category, setCategory] = useState(project?.category || "");
    const [description, setDescription] = useState(project?.description || "");
    const [submitted, setSubmitted] = useState(false);
    // file 
    const [files, setFiles] = useState(project?.files || []);


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!projectTitle || !category || !description || files.length === 0) return;
        setSubmitted(true);
    };

    // success UI
    if (submitted) {
        return (
            <div className="d-flex align-items-center justify-content-center bg-light" style={{ minHeight: "100vh" }}>
                <div className="card p-5 text-center shadow" style={{ maxWidth: "600px", width: "100%" }}>

                    <div className="mx-auto mb-4 d-flex align-items-center justify-content-center rounded-circle"
                        style={{ width: "80px", height: "80px", background: "#d1fae5" }}>
                        <span style={{ fontSize: "32px", color: "#16a34a" }}>✔</span>
                    </div>

                    <h3 className="fw-semibold mb-3">Project Submitted Successfully!</h3>

                    <p className="text-muted mb-4">
                        Your project has been submitted for review. You will receive updates via email.
                    </p>

                    <div className="p-3 rounded text-start mb-4" style={{ background: "#eff6ff" }}>
                        <p><strong>Project Title:</strong> {projectTitle}</p>
                        <p><strong>Category:</strong> {category}</p>
                        <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
                    </div>

                    <button className="btn btn-primary" onClick={() => setSubmitted(false)}>
                        Return
                    </button>
                </div>
            </div>
        );
    }


    // upload-box

    // ✅ لما تختار فايل
    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);

        if (files.length + selectedFiles.length > 10) {
            alert("Max 10 files only");
            return;
        }

        setFiles([...files, ...selectedFiles]);
    };

    // ✅ حذف فايل
    const removeFile = (index) => {
        const updated = files.filter((_, i) => i !== index);
        setFiles(updated);
    };

    // ✅ drag & drop (اختياري)
    const handleDrop = (e) => {
        e.preventDefault();
        const droppedFiles = Array.from(e.dataTransfer.files);

        setFiles((prev) => [...prev, ...droppedFiles].slice(0, 10));
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };



    // main UI
    return (
        <div className="ProjectSubmission p-4 bg-light ps-5 ms-3">

            {/* Header */}
            <div className="mb-4">
                <h2 className="fw-semibold mb-1">Submit Your Project</h2>
                <p className="text-muted">
                    Complete all required fields and upload your project files
                </p>
            </div>

            {/* Notice */}
            <div className="alert d-flex flex-column gap-2"
                style={{
                    backgroundColor: "#eff6ff",
                    border: "1px solid #bfdbfe",
                }}>
                <div className="d-flex align-items-center gap-2">
                    <AlertCircle size={17} />
                    <span className="small text-primary">Submission deadline:</span>
                </div>
                <div className="d-flex flex-column ms-4 gap-1">
                    <span className="fw-bold text-primary">
                        {new Date(mockCompetition.endDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                    </span>
                    <span className="small text-primary">
                        Make sure all files are uploaded before submitting.
                    </span>
                </div>
            </div>

            <div className="row g-4">

                {/* FORM */}
                <div className="col-lg-8">
                    <form onSubmit={handleSubmit} className="bg-white rounded-4 p-4 shadow-sm">

                        {/* Title */}
                        <div className="mb-3">
                            <label className="form-label">Project Title *</label>
                            <input
                                type="text"
                                className="form-control bg-light"
                                placeholder="Enter your project title"
                                value={projectTitle}
                                onChange={(e) => setProjectTitle(e.target.value)}
                            />
                        </div>

                        {/* Category */}
                        <div className="mb-3">
                            <label className="form-label">Category *</label>
                            <select
                                className="form-select bg-light"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option value="">Select a category</option>
                                {mockCompetition.categories.map((cat) => (
                                    <option key={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>

                        {/* Description */}
                        <div className="mb-3">
                            <label className="form-label">Project Description *</label>
                            <textarea
                                maxLength={1000}
                                className="form-control bg-light"
                                rows={6}
                                placeholder="Describe your project..."
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <small className="text-muted">{description.length}/1000 characters</small>
                        </div>


                        {/* Upload */}
                        <div className="mb-4">
                            <label className="form-label">Upload Project Files *</label>

                            <div
                                className="upload-box text-center p-4 rounded-4"
                                onDrop={handleDrop}
                                onDragOver={handleDragOver}
                                style={{
                                    border: "2px dashed #d1d5db",
                                    background: "#f9fafb",
                                    cursor: "pointer",
                                    transition: "0.3s"
                                }}
                            >

                                {/* ✅ input مخفي */}
                                <input
                                    type="file"
                                    multiple
                                    className="d-none"
                                    id="fileInput"
                                    onChange={handleFileChange}
                                />

                                {/* ✅ label عشان لما تدوس يفتح الفايل */}
                                <label htmlFor="fileInput" className="w-100 h-100">

                                    {/* أيقونة */}
                                    <div
                                        className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle"
                                        style={{
                                            width: "60px",
                                            height: "60px",
                                            background: "#e0f2fe"
                                        }}
                                    >
                                        <Upload size={28} color="#0284c7" />
                                    </div>

                                    {/* النص */}
                                    <p className="mb-1 fw-medium">
                                        Click to upload or drag and drop
                                    </p>

                                    <p className="text-muted small mb-0">
                                        PDF, DOC, ZIP, MP4, JPG (Max 10 files)
                                    </p>

                                </label>
                            </div>

                            {/* ✅ عرض الفايلات */}
                            {files.length > 0 && (
                                <div className="mt-3">

                                    {files.map((file, index) => (
                                        <div
                                            key={index}
                                            className="d-flex justify-content-between align-items-center p-2 mb-2 rounded-3"
                                            style={{
                                                background: "#f1f5f9",
                                                border: "1px solid #e5e7eb"
                                            }}
                                        >
                                            <span className="small">
                                                {file.name}
                                                {!file.lastModified && " (saved)"}
                                            </span>

                                            <button
                                                type="button"
                                                className="btn btn-sm btn-outline-danger"
                                                onClick={() => removeFile(index)}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    ))}

                                </div>
                            )}

                        </div>


                        {/* Buttons */}
                        <div className="d-flex flex-column flex-md-row gap-3 pt-3 border-top">
                            <button type="submit"
                                className="btn btn-primary fw-semibold flex-grow-1 d-flex align-items-center justify-content-center gap-2"
                                disabled={!projectTitle || !category || !description || files.length === 0}                            >
                                <Upload size={20} />
                                Submit Project
                            </button>

                            <button type="button" className="btn btn-outline-secondary">
                                Save as Draft
                            </button>
                        </div>

                    </form>
                </div>

                {/* GUIDELINES */}
                <div className="col-lg-4">
                    <div className="card rounded-4 p-4 shadow-sm mb-3">

                        <h5 className="fw-semibold mb-3">Submission Guidelines</h5>

                        <div className="mb-3">
                            <p className="fw-medium mb-2">Required Documents:</p>
                            <ul className="ps-3">
                                {guidelines.documents.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="mb-3">
                            <p className="fw-medium mb-2">File Size Limits:</p>
                            <ul className="ps-3">
                                {guidelines.sizes.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <p className="fw-medium mb-2">Important Notes:</p>
                            <ul className="ps-3">
                                {guidelines.notes.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>

                    </div>

                    {/* Help Card */}
                    <div className="card HelpCard rounded-4 p-4">
                        <h6 className="fw-semibold mb-2">Need Help?</h6>
                        <p className="text-muted small mb-3">
                            Check our documentation or contact support if you have questions.
                        </p>
                        <button className="btn btn-outline-primary btn-sm w-100">
                            View Documentation
                        </button>
                    </div>
                </div>

            </div>
        </div >
    );
}