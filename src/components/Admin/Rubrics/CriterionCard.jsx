import { useState } from "react";
import { Edit , Trash } from "lucide-react";

export default function CriterionCard({ criterion, index, onUpdate, onDelete }) {

    const [editing, setEditing] = useState(false);
    const [local, setLocal] = useState(criterion);

    const handleSave = () => {

        onUpdate(local);
        setEditing(false);

    };

    return (

        <div className="card border-0 shadow-sm rounded-4 p-4 mb-3 bg-light">

            <div className="d-flex flex-column flex-sm-row gap-3 gap-sm-0 justify-content-between align-items-center mb-3">

                <span className="fw-semibold text-muted small">
                    Criterion {index + 1}
                </span>

                <div className="d-flex gap-1">

                    <button
                        className="btn btn-sm"
                        onClick={() => setEditing(!editing)}
                    >
                        <Edit size={20}/>
                    </button>

                    <button
                        className="btn btn-sm text-danger"
                        onClick={() => onDelete(criterion.id)}
                    >
                        <Trash size={22}/>
                    </button>

                </div>

            </div>

            {editing ? (

                <>
                    <input
                        className="form-control mb-2"
                        value={local.name}
                        placeholder="Criterion name"
                        onChange={(e) =>
                            setLocal({ ...local, name: e.target.value })
                        }
                    />

                    <textarea
                        className="form-control mb-2"
                        rows={2}
                        placeholder="Description"
                        value={local.description}
                        onChange={(e) =>
                            setLocal({ ...local, description: e.target.value })
                        }
                    />

                    <div className="row g-2 mb-2">

                        <div className="col-6">

                            <label className="small text-muted">Max Score</label>

                            <input
                                type="number"
                                className="form-control"
                                value={local.maxScore}
                                onChange={(e) =>
                                    setLocal({ ...local, maxScore: Number(e.target.value) })
                                }
                            />

                        </div>

                        <div className="col-6">

                            <label className="small text-muted">Weight</label>

                            <input
                                type="number"
                                className="form-control"
                                value={local.weight}
                                onChange={(e) =>
                                    setLocal({ ...local, weight: Number(e.target.value) })
                                }
                            />

                        </div>

                    </div>

                    <button
                        className="btn btn-primary btn-sm w-100"
                        onClick={handleSave}
                    >
                        Save
                    </button>
                </>

            ) : (

                <>
                    <div className="fw-semibold mb-1">
                        {criterion.name || "No title"}
                    </div>

                    <div className="text-muted small mb-2">
                        {criterion.description || "No description"}
                    </div>

                    <div className="d-flex justify-content-between small">

                        <span>
                            Max Score: <b>{criterion.maxScore}</b>
                        </span>

                        <span>
                            Weight: <b>{criterion.weight}</b>
                        </span>

                    </div>
                </>

            )}

        </div>

    );
}
