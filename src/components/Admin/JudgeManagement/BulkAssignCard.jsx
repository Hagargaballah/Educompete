import { useState } from "react";

export default function BulkAssignCard({
    judges,
    projects,
    onAssign
}) {

    const [selectedJudge, setSelectedJudge] = useState("");
    const [selectedProjects, setSelectedProjects] = useState([]);

    const handleSubmit = () => {

        if (!selectedJudge) return;

        onAssign(selectedJudge, selectedProjects);

    };

    return (

        <div className="card p-4 shadow-sm rounded-4">

            <h6 className="mb-4">
                Bulk Assignment
            </h6>

            {/* Select Judge */}

            <label className="mb-1">
                Select Judge
            </label>

            <select
                className="form-select mb-3"
                onChange={(e) => setSelectedJudge(e.target.value)}
            >

                <option value="">
                    Select Judge
                </option>

                {judges.map(j => (

                    <option
                        key={j.id}
                        value={j.id}
                    >
                        {j.name}
                    </option>

                ))}

            </select>

            {/* Select Projects */}

            <label className="mb-1">
                Select Projects
            </label>
            <select
                multiple
                className="form-select mb-3"
                onChange={(e) =>
                    setSelectedProjects(
                        [...e.target.selectedOptions].map(o => o.value)
                    )
                }
            >
                {projects.map(p => (
                    <option key={p.id} value={p.id} >
                        {p.title}
                    </option>
                ))}
            </select>

            <button
                className="btn btn-primary"
                onClick={handleSubmit}
            >
                Assign Projects
            </button>

        </div>

    );

}