export default function TeamStatus({ stats }) {

    const submission = (stats.submittedProjects / stats.approvedTeams) * 100;
    const approved = (stats.approvedTeams / stats.totalTeams) * 100;
    const judging = (stats.reviewsCompleted / stats.submittedProjects) * 100;

    return (

        <div className="bg-white shadow-sm border p-4 rounded-4">

            <h5 className="mb-4">Team Status Overview</h5>

            <div className="mb-3">

                <div className="d-flex justify-content-between mb-2">
                    <span>Project Submissions</span>
                    <span>{stats.submittedProjects}/{stats.approvedTeams}</span>
                </div>

                <div className="progress">
                    <div className="progress-bar rounded-pill" style={{ width: `${submission}%` }} />
                </div>

            </div>


            <div className="mb-3">

                <div className="d-flex justify-content-between mb-2">
                    <span>Teams Approved</span>
                    <span>{stats.approvedTeams}/{stats.totalTeams}</span>
                </div>

                <div className="progress">
                    <div className="progress-bar rounded-pill bg-success" style={{ width: `${approved}%` }} />
                </div>

            </div>


            <div>

                <div className="d-flex justify-content-between mb-2">
                    <span>Judging Progress</span>
                    <span>{stats.reviewsCompleted}/{stats.submittedProjects}</span>
                </div>

                <div className="progress">
                    <div className="progress-bar rounded-pill bg-warning" style={{ width: `${judging}%` }} />
                </div>

            </div>

        </div>

    );
}