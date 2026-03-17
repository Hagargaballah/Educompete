import Sidebar from "../../components/layout/navigation";
import ProjectSubmission from "../../components/student/ProjectSubmission";


export default function SubmitProject() {
    return (
        <section className="container-fluid">
            <section className="row">
                <Sidebar role="student" />
                <section className="col">
                    <ProjectSubmission />
                </section>
            </section>
        </section>
    )
}