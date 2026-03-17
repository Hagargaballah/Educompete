import Sidebar from "../../components/layout/navigation";
import { useState } from "react";
import { mockJudges, mockProjects } from "../../data/mockData";
import JudgeTable from "../../components/Admin/JudgeManagement/JudgeTable";
import BulkAssignCard from "../../components/Admin/JudgeManagement/BulkAssignCard";
import AddJudgeModal from "../../components/Admin/JudgeManagement/AddJudgeModal";
import { Plus } from "lucide-react";


export default function JudgeManagement() {

    // state
    const [judges, setJudges] = useState(mockJudges);
    const [showAddModal, setShowAddModal] = useState(false);
    // Delete Judge
    const handleDeleteJudge = (judgeId) => {
        // FRONTEND UPDATE
        setJudges(prev =>
            prev.filter(j => j.id !== judgeId)
        );

        // BACKEND
        // await fetch(`/api/admin/judges/${judgeId}`, { method:"DELETE" })
    };

    // Add Judge 
    const handleAddJudge = (newJudge) => {
        setJudges(prev => [...prev, newJudge]);

        // BACKEND
        // await fetch("/api/admin/judges", {
        //   method:"POST",
        //   body: JSON.stringify(newJudge)
        // })
    };

    // assign projects
    const handleAssignProjects = (judgeId, projectIds) => {

        setJudges(prev =>
            prev.map(j =>
                j.id === judgeId
                    ? { ...j, assignedProjects: projectIds }
                    : j
            )
        );

        // BACKEND
        // await fetch(`/api/admin/judges/${judgeId}/assign-projects`,{
        //   method:"POST",
        //   body: JSON.stringify(projectIds)
        // })
    };


    return (

        <section className="container-fluid">
            <section className="row">
                {/* Sidebar */}
                <Sidebar role="admin" />
                {/* JudgeManagement */}
                <section className="padding col py-4 px-5 px-lg-4 ms-4 ms-md-5 ms-lg-0 bg-light">
                    {/* Header */}
                    <div className="d-flex flex-column flex-sm-row gap-2 gap-sm-0 justify-content-between align-items-center mb-4">
                        <h2 className="fw-bold">
                            Judge Management
                        </h2>
                        <button
                            className="btn btn-primary d-flex align-items-center gap-2"
                            onClick={() => setShowAddModal(true)}
                        >
                            <Plus size={18} />
                            Add Judge
                        </button>
                    </div>
                    {/* Table */}
                    <JudgeTable
                        judges={judges}
                        onDelete={handleDeleteJudge}
                    />
                    {/* Assign Projects */}
                    <BulkAssignCard
                        judges={judges}
                        projects={mockProjects}
                        onAssign={handleAssignProjects}
                    />
                </section>
            </section>
            {/* Modal */}
            {showAddModal && (
                <AddJudgeModal
                    onClose={() => setShowAddModal(false)}
                    onAddJudge={handleAddJudge}
                />
            )}

        </section>


    )
}
