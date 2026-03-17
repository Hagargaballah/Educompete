import Sidebar from "../../components/layout/navigation";
import AssignedProjects from "../../components/judge/DashBoard/AssignedProjects";
import { mockProjects } from "../../data/mockData";
import '../../Styles/Admin/Admin.css'


export default function ProjectManagement() {
    return (
        <section className="container-fluid">
            <section className="row">

                {/* Sidebar */}
                <Sidebar role="admin" />
                {/* ProjectManagement */}
                <section className="padding col py-4 px-5 px-lg-4 ms-4 ms-md-5 ms-lg-0 bg-light">
                    {/* Header */}
                    <h2 className="fw-bold mb-4">
                        Project Management
                    </h2>
                    {/* AssignedProjects */}
                    <AssignedProjects
                        projects={mockProjects}
                        role="admin"
                        viewPath="/admin/projects"
                    />
                </section>

            </section>
        </section>
    )
}
