import { useState } from "react";
import { mockRubric } from "../../data/mockData";
import Sidebar from "../../components/layout/navigation";
import CriterionCard from "../../components/Admin/Rubrics/CriterionCard";
import RubricPreview from "../../components/Admin/Rubrics/RubricPreview";
import '../../Styles/Admin/Admin.css'


export default function RubricsPage() {

    const [rubric, setRubric] = useState(mockRubric);
    const [saved, setSaved] = useState(false);

    // update criterion
    const handleUpdate = (updatedCriterion) => {

        setRubric(prev => ({
            ...prev,
            criteria: prev.criteria.map(c =>
                c.id === updatedCriterion.id ? updatedCriterion : c
            )
        }));

    };

    // delete criterion
    const handleDelete = (id) => {

        setRubric(prev => ({
            ...prev,
            criteria: prev.criteria.filter(c => c.id !== id)
        }));

    };

    // add new criterion
    const handleAdd = () => {

        const newCriterion = {
            id: "C" + Date.now(),
            name: "",
            description: "",
            maxScore: 10,
            weight: 0.1
        };

        setRubric(prev => ({
            ...prev,
            criteria: [...prev.criteria, newCriterion]
        }));

    };

    // save rubric (ready for backend)
    const handleSave = async () => {

        try {

            console.log("Send to backend:", rubric);

            // example API
            // await axios.post("/api/rubric", rubric)

            setSaved(true);

            setTimeout(() => setSaved(false), 2000);

        } catch (error) {

            console.error("Save failed", error);

        }

    };

    return (
        <section className="container-fluid">
            <section className="row">
                {/* Sidebar */}
                <Sidebar role="admin" />
                {/* Rubrics */}
                <section className="padding col py-4 px-5 px-lg-4 ms-4 ms-md-5 ms-lg-0 bg-light">
                    <div className="container py-4">

                        {/* header */}
                        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start mb-5">

                            <div>
                                <h2 className="fw-bold mb-1">Rubrics Management</h2>
                                <p className="text-muted small">
                                    Create and manage evaluation criteria
                                </p>
                            </div>

                            <button
                                className="btn btn-primary rounded-3"
                                onClick={handleAdd}
                            >
                                + Add Criterion
                            </button>

                        </div>

                        <div className="row g-4">

                            {/* edit */}
                            <div className="col-lg-6">

                                <div className="card border-0 shadow-sm rounded-4 p-4">

                                    <h5 className="fw-bold mb-4">Edit Rubric</h5>

                                    {/* rubric name */}
                                    <div className="mb-4">

                                        <label className="form-label small fw-semibold">
                                            Rubric Name
                                        </label>

                                        <input
                                            className="form-control rounded-3"
                                            value={rubric.name}
                                            onChange={(e) =>
                                                setRubric({ ...rubric, name: e.target.value })
                                            }
                                        />

                                    </div>

                                    {/* criteria */}
                                    {rubric.criteria.map((criterion, index) => (

                                        <CriterionCard
                                            key={criterion.id}
                                            criterion={criterion}
                                            index={index}
                                            onUpdate={handleUpdate}
                                            onDelete={handleDelete}
                                        />

                                    ))}

                                    {/* save */}
                                    <button
                                        className="btn btn-primary w-100 mt-3 rounded-3"
                                        onClick={handleSave}
                                    >
                                        {saved ? "Saved!" : "Save Rubric"}
                                    </button>

                                </div>

                            </div>

                            {/* preview */}
                            <div className="col-lg-6">

                                <RubricPreview rubric={rubric} />

                            </div>

                        </div>

                    </div>
                </section>
            </section>
        </section>
    );
}
