import Sidebar from "../../components/layout/navigation";
import TeamRegistration from "../../components/student/TeamRegistration";


export default function MyTeam() {
    return (
        <section className="container-fluid">
            <section className="row">
                <Sidebar role="student" />
                <section className="col">
                    <TeamRegistration />
                </section>
            </section>
        </section>
    )
}