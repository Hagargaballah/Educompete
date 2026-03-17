import { useState } from "react";
import { X } from "lucide-react";

export default function AddJudgeModal({ onClose, onAddJudge }) {

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        expertise: ""
    });

    // validation
    const isValid =
        form.name.trim() !== "" &&
        form.email.trim() !== "" &&
        form.password.trim() !== "" &&
        form.expertise.trim() !== "";

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        if (!isValid) return;

        const newJudge = {
            id: "J" + Date.now(),
            name: form.name,
            email: form.email,
            expertise: form.expertise,
            assignedProjects: [],
            reviewedCount: 0
        };

        onAddJudge(newJudge);

        // BACKEND (جاهز للربط)
        // fetch("/api/admin/judges",{
        //     method:"POST",
        //     body: JSON.stringify({
        //         ...form,
        //         role:"judge"
        //     })
        // })

        onClose();
    };

    return (

        <div className="modal-overlay px-4">
            <div className="modal-card">
                {/* header */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="fw-bold mb-0">
                        Add New Judge
                    </h5>
                    <button
                        className="btn btn-sm btn-light"
                        onClick={onClose}
                    >
                        <X size={18} />
                    </button>
                </div>

                {/* form */}
                <form onSubmit={handleSubmit}>

                    {/* name */}
                    <div className="mb-3">
                        <label className="form-label">
                            Judge Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Dr. John Smith"
                            value={form.name}
                            onChange={handleChange}
                        />
                    </div>

                    {/* email */}
                    <div className="mb-3">
                        <label className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="judge@email.com"
                            value={form.email}
                            onChange={handleChange}
                        />
                    </div>

                    {/* password */}
                    <div className="mb-3">
                        <label className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Enter password"
                            value={form.password}
                            onChange={handleChange}
                        />
                    </div>

                    {/* expertise */}
                    <div className="mb-4">
                        <label className="form-label">
                            Expertise
                        </label>
                        <input
                            type="text"
                            name="expertise"
                            className="form-control"
                            placeholder="AI, Robotics, Data Science"
                            value={form.expertise}
                            onChange={handleChange}
                        />
                    </div>

                    {/* buttons */}
                    <div className="d-flex justify-content-end gap-2">
                        <button
                            type="button"
                            className="btn btn-outline-secondary"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={!isValid}
                        >
                            Add Judge
                        </button>
                    </div>

                </form>
            </div>

        </div>

    );

}