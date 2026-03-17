import Sidebar from "../../components/layout/navigation";
import '../../Styles/Admin/Admin.css'
import { useState } from "react";

export default function CompetitionSetup() {

    const [formData, setFormData] = useState({
        name: "",
        description: "",

        dates: {
            startDate: "",
            endDate: "",
            registrationOpen: "",
            registrationDeadline: "",
            submissionDeadline: "",
            judgingStart: "",
            judgingEnd: "",
            resultsAnnouncement: ""
        },

        teamSettings: {
            minTeamSize: 1,
            maxTeamSize: 5
        },

        categories: [],
        requiredFiles: [],
        rules: []
    })

    const [errors, setErrors] = useState({})
    const [categoryInput, setCategoryInput] = useState("")
    const [ruleInput, setRuleInput] = useState("")

    const [fileInput, setFileInput] = useState({
        name: "",
        key: "",
        extensions: "",
        required: false
    })

    /* ------------------ handlers ------------------ */

    const handleChange = e => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleDateChange = e => {
        const { name, value } = e.target

        setFormData({
            ...formData,
            dates: { ...formData.dates, [name]: value }
        })
    }

    const handleTeamChange = e => {
        const { name, value } = e.target

        setFormData({
            ...formData,
            teamSettings: { ...formData.teamSettings, [name]: value }
        })
    }

    /* ------------------ categories ------------------ */

    const addCategory = () => {

        if (!categoryInput.trim()) return

        setFormData({
            ...formData,
            categories: [...formData.categories, categoryInput]
        })

        setCategoryInput("")
    }

    const removeCategory = index => {
        setFormData({
            ...formData,
            categories: formData.categories.filter((_, i) => i !== index)
        })
    }

    /* ------------------ rules ------------------ */

    const addRule = () => {

        if (!ruleInput.trim()) return

        setFormData({
            ...formData,
            rules: [...formData.rules, ruleInput]
        })

        setRuleInput("")
    }

    const removeRule = index => {
        setFormData({
            ...formData,
            rules: formData.rules.filter((_, i) => i !== index)
        })
    }

    /* ------------------ files ------------------ */

    const handleFileInput = e => {
        const { name, value, type, checked } = e.target

        setFileInput({
            ...fileInput,
            [name]: type === "checkbox" ? checked : value
        })
    }

    const addFile = () => {

        if (!fileInput.name || !fileInput.key) return

        const newFile = {
            id: Date.now(),
            name: fileInput.name,
            key: fileInput.key,
            required: fileInput.required,
            extensions: fileInput.extensions.split(",")
        }

        setFormData({
            ...formData,
            requiredFiles: [...formData.requiredFiles, newFile]
        })

        setFileInput({
            name: "",
            key: "",
            extensions: "",
            required: false
        })
    }

    const removeFile = id => {
        setFormData({
            ...formData,
            requiredFiles: formData.requiredFiles.filter(f => f.id !== id)
        })
    }

    /* ------------------ validation ------------------ */

    const validate = () => {

        let newErrors = {}

        if (!formData.name.trim())
            newErrors.name = "Competition name is required"

        if (!formData.description.trim())
            newErrors.description = "Description is required"

        if (formData.categories.length === 0)
            newErrors.categories = "Add at least one category"

        if (formData.requiredFiles.length === 0)
            newErrors.files = "Add required files"

        if (formData.rules.length === 0)
            newErrors.rules = "Add at least one rule"

        if (formData.teamSettings.minTeamSize > formData.teamSettings.maxTeamSize)
            newErrors.team = "Min team cannot exceed max"

        setErrors(newErrors)

        return Object.keys(newErrors).length === 0
    }

    /* ------------------ submit ------------------ */

    const handleSubmit = e => {

        e.preventDefault()

        if (!validate()) return

        console.log("SEND TO API", formData)

    }

    return (
        <section className="container-fluid">
            <section className="row">

                {/* Sidebar */}
                <Sidebar role="admin" />
                {/* CompetitionSetup */}
                <section className="padding col py-4 px-5 px-lg-4 ms-4 ms-md-5 ms-lg-0 bg-light">
                    <form onSubmit={handleSubmit}>

                        {/* Competition Details */}

                        <div className="card mb-4 shadow-sm">
                            <div className="card-header fw-bold">
                                Competition Details
                            </div>

                            <div className="card-body">

                                <div className="mb-3">
                                    <label className="form-label">Competition Name</label>
                                    <input
                                        className={`form-control ${errors.name && "is-invalid"}`}
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                    <div className="invalid-feedback">
                                        {errors.name}
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Description</label>
                                    <textarea
                                        className={`form-control ${errors.description && "is-invalid"}`}
                                        rows="3"
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                    />
                                    <div className="invalid-feedback">
                                        {errors.description}
                                    </div>
                                </div>

                            </div>
                        </div>


                        {/* Timeline */}

                        <div className="card mb-4 shadow-sm">

                            <div className="card-header fw-bold">
                                Competition Timeline
                            </div>

                            <div className="card-body row g-3">

                                <div className="col-md-6">
                                    <label className="form-label">Start Date</label>
                                    <input type="date" className="form-control" name="startDate" onChange={handleDateChange} />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label">End Date</label>
                                    <input type="date" className="form-control" name="endDate" onChange={handleDateChange} />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label">Registration Open</label>
                                    <input type="date" className="form-control" name="registrationOpen" onChange={handleDateChange} />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label">Registration Deadline</label>
                                    <input type="date" className="form-control" name="registrationDeadline" onChange={handleDateChange} />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label">Submission Deadline</label>
                                    <input type="date" className="form-control" name="submissionDeadline" onChange={handleDateChange} />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label">Results Announcement</label>
                                    <input type="date" className="form-control" name="resultsAnnouncement" onChange={handleDateChange} />
                                </div>

                            </div>
                        </div>


                        {/* Categories */}

                        <div className="card mb-4 shadow-sm">

                            <div className="card-header fw-bold">
                                Categories
                            </div>

                            <div className="card-body">

                                <div className="input-group mb-3">

                                    <input
                                        className="form-control"
                                        placeholder="Add Category"
                                        value={categoryInput}
                                        onChange={e => setCategoryInput(e.target.value)}
                                    />

                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={addCategory}
                                    >
                                        Add
                                    </button>

                                </div>

                                {errors.categories && (
                                    <div className="text-danger mb-2">
                                        {errors.categories}
                                    </div>
                                )}

                                <ul className="list-group">

                                    {formData.categories.map((cat, i) => (
                                        <li key={i} className="list-group-item d-flex justify-content-between">

                                            {cat}

                                            <button
                                                type="button"
                                                className="btn btn-sm btn-danger"
                                                onClick={() => removeCategory(i)}
                                            >
                                                Remove
                                            </button>

                                        </li>
                                    ))}

                                </ul>

                            </div>
                        </div>


                        {/* Required Files */}

                        <div className="card mb-4 shadow-sm">

                            <div className="card-header fw-bold">
                                Required Files
                            </div>

                            <div className="card-body">

                                <div className="row g-2 mb-3">

                                    <div className="col-md-3">
                                        <input className="form-control" placeholder="File Name" name="name" value={fileInput.name} onChange={handleFileInput} />
                                    </div>

                                    <div className="col-md-3">
                                        <input className="form-control" placeholder="Key" name="key" value={fileInput.key} onChange={handleFileInput} />
                                    </div>

                                    <div className="col-md-3">
                                        <input className="form-control" placeholder="extensions (pdf,zip)" name="extensions" value={fileInput.extensions} onChange={handleFileInput} />
                                    </div>

                                    <div className="col-md-2 form-check mt-2">
                                        <input type="checkbox" className="form-check-input" name="required" onChange={handleFileInput} />
                                        <label className="form-check-label">
                                            Required
                                        </label>
                                    </div>

                                    <div className="col-md-1">
                                        <button type="button" className="btn btn-success w-100" onClick={addFile}>
                                            +
                                        </button>
                                    </div>

                                </div>

                                <ul className="list-group">

                                    {formData.requiredFiles.map(file => (
                                        <li key={file.id} className="list-group-item d-flex justify-content-between">

                                            {file.name} ({file.extensions.join(",")})

                                            <button
                                                className="btn btn-sm btn-danger"
                                                type="button"
                                                onClick={() => removeFile(file.id)}
                                            >
                                                Remove
                                            </button>

                                        </li>
                                    ))}

                                </ul>

                            </div>
                        </div>


                        {/* Rules */}

                        <div className="card mb-4 shadow-sm">

                            <div className="card-header fw-bold">
                                Competition Rules
                            </div>

                            <div className="card-body">

                                <div className="input-group mb-3">

                                    <input
                                        className="form-control"
                                        placeholder="Add rule"
                                        value={ruleInput}
                                        onChange={e => setRuleInput(e.target.value)}
                                    />

                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={addRule}
                                    >
                                        Add
                                    </button>

                                </div>

                                <ul className="list-group">

                                    {formData.rules.map((rule, i) => (
                                        <li key={i} className="list-group-item d-flex justify-content-between">

                                            {rule}

                                            <button
                                                type="button"
                                                className="btn btn-sm btn-danger"
                                                onClick={() => removeRule(i)}
                                            >
                                                Remove
                                            </button>

                                        </li>
                                    ))}

                                </ul>

                            </div>
                        </div>


                        <button className="btn btn-primary btn-lg">
                            Save Competition
                        </button>

                    </form>
                </section>

            </section>
        </section>
    )
}


