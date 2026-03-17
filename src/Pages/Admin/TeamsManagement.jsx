import { useState } from "react";
import { Download } from "lucide-react";
import { mockTeams } from "../../data/mockData";
import Sidebar from "../../components/layout/navigation";
import TeamsFilters from "../../components/Admin/TeamsManagement/TeamsFilters";
import TeamsTable from "../../components/Admin/TeamsManagement/TeamsTable";
import TeamsStats from "../../components/Admin/TeamsManagement/TeamsStats";
import '../../Styles/Admin/Admin.css'

export default function TeamsManagement() {

    const [teams, setTeams] = useState(mockTeams);
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("all");


    const filteredTeams = teams.filter(team => {

        const matchSearch =
            team.name.toLowerCase().includes(search.toLowerCase()) ||
            team.school.toLowerCase().includes(search.toLowerCase());

        const matchStatus =
            status === "all" || team.status === status;

        return matchSearch && matchStatus;

    });


    const approveTeam = (id) => {

        setTeams(prev =>
            prev.map(team =>
                team.id === id
                    ? { ...team, status: "approved" }
                    : team
            )
        );

        // backend ready
        // await api.patch(`/teams/${id}/approve`)
    };

    const rejectTeam = (id) => {

        setTeams(prev =>
            prev.map(team =>
                team.id === id
                    ? { ...team, status: "rejected" }
                    : team
            )
        );

    };


    return (


        <section className="container-fluid">
            <section className="row">
                {/* Sidebar */}
                <Sidebar role="admin" />
                {/* TeamsManagement */}
                <section className="padding col py-4 px-5 px-lg-4 ms-4 ms-md-5 ms-lg-0 bg-light">
                    <div>
                        <div className="d-flex flex-column flex-sm-row gap-3 gap-sm-0 justify-content-between align-items-center mb-4">

                            <div>
                                <h2 className="fw-bold">Teams Management</h2>
                                <p className="text-muted mb-0">
                                    Manage team registrations and approvals
                                </p>
                            </div>

                            <button className="btn btn-outline-secondary d-flex align-items-center gap-2">
                                <Download size={18} />
                                Export
                            </button>

                        </div>

                        <TeamsFilters
                            search={search}
                            setSearch={setSearch}
                            status={status}
                            setStatus={setStatus}
                        />

                        <TeamsTable
                            teams={filteredTeams}
                            approveTeam={approveTeam}
                            rejectTeam={rejectTeam}
                        />

                        <TeamsStats teams={filteredTeams} />

                    </div>
                </section>
            </section>
        </section>



    );

}