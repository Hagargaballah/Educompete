import { useState } from "react";
import { mockTeams } from "../../data/mockData";
import './../../Styles/student/student.css'



export default function TeamRegistration() {
    const initialTeam = mockTeams[0];

    const initialMembers = initialTeam.members.map(m => ({
        name: typeof m === "string" ? m : m.name,
        email: typeof m === "string" ? "" : m.email || ""
    }));

    const membersInitial = initialMembers.slice(0, 5);

    const [formData, setFormData] = useState({
        name: initialTeam.name || "",
        school: initialTeam.school || "",
        grade: initialTeam.grade || "",
        supervisor: initialTeam.supervisor || "",
        members: membersInitial
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleMemberChange = (index, field, value) => {
        const updated = [...formData.members];
        updated[index][field] = value;
        setFormData({ ...formData, members: updated });
    };

    const addMember = () => {
        if (formData.members.length >= 5) return;
        setFormData({
            ...formData,
            members: [...formData.members, { name: "", email: "" }]
        });
    };

    const removeMember = (index) => {
        const updated = formData.members.filter((_, i) => i !== index);
        setFormData({ ...formData, members: updated });
    };

    const validate = () => {
        if (!formData.name || !formData.school) return "Please fill all required fields";
        if (formData.members.length < 2) return "Team must have at least 2 members";
        for (let m of formData.members) {
            if (!m.name || !m.email) return "All members must have name and email";
        }
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationError = validate();
        if (validationError) return setError(validationError);

        try {
            setLoading(true);
            setError("");
            const response = await fetch("http://localhost:5000/api/teams", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });
            if (!response.ok) throw new Error("Failed to submit");
            const data = await response.json();
            alert("Team Registered Successfully ✅");
            console.log("Success:", data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="TeamRegistration py-5 px-3 px-lg-0 ms-4 ms-md-5 ms-lg-0">
            <div className="container">
                <div className="ms-3 mb-4">
                    <h3 className="fw-bold">Team Registration</h3>
                    <p className="text-muted fw-semibold">Register your team for the competition</p>
                </div>
                {error && <div className="alert alert-danger">{error}</div>}

                <form onSubmit={handleSubmit} className="p-4 rounded-4 shadow-sm bg-white">
                    {/* Team Info */}
                    <div className="row g-4 mb-4">
                        <div className="col-md-6">
                            <label className="form-label text-muted">Team Name</label>
                            <input name="name" value={formData.name} onChange={handleChange} className="form-control rounded-3 bg-light" />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label text-muted">School</label>
                            <input name="school" value={formData.school} onChange={handleChange} className="form-control rounded-3 bg-light" />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label text-muted">Grade</label>
                            <input name="grade" value={formData.grade} onChange={handleChange} className="form-control rounded-3 bg-light" />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label text-muted">Supervisor</label>
                            <input name="supervisor" value={formData.supervisor} onChange={handleChange} className="form-control rounded-3 bg-light" />
                        </div>
                    </div>

                    {/* Members */}
                    <h5 className="mb-4 fw-semibold">Team Members</h5>
                    {formData.members.map((m, i) => (
                        <div
                            key={i}
                            className="mb-3 p-3 rounded-4"
                            style={{ background: "#f9fafb", border: "1px solid #e5e7eb" }}
                        >
                            <div className="row g-3 align-items-center">
                                <div className="col-md-5">
                                    <input
                                        placeholder="Name"
                                        className="form-control rounded-3"
                                        value={m.name}
                                        onChange={(e) => handleMemberChange(i, "name", e.target.value)}
                                    />
                                </div>
                                <div className="col-md-5">
                                    <input
                                        placeholder="Email"
                                        className="form-control rounded-3"
                                        value={m.email}
                                        onChange={(e) => handleMemberChange(i, "email", e.target.value)}
                                    />
                                </div>
                                <div className="col-md-2">
                                    <button
                                        type="button"
                                        onClick={() => removeMember(i)}
                                        className="w-100 rounded-3 p-2 border-1 border-danger text-danger bg-transparent fw-semibold"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="d-flex flex-column flex-md-row align-items-center gap-4 mt-5">
                        <button
                            type="button"
                            onClick={addMember}
                            disabled={formData.members.length >= 5}
                            className="btn btn-outline-primary rounded-3"
                        >
                            + Add Member
                        </button>

                        <button className="btn btn-primary px-4 rounded-3" disabled={loading}>
                            {loading ? "Submitting..." : "Submit"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}