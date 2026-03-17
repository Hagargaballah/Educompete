import TeamRow from "./TeamRow";

export default function TeamsTable({
    teams,
    approveTeam,
    rejectTeam
}) {

    return (

        <div className="teamsManagement-table table-responsive card px-4 pb-4 pt-2">

            <table className="align-middle table table-borderless mb-0">

                <thead className="border-bottom">

                    <tr>
                        <th>Team</th>
                        <th>School</th>
                        <th>Category</th>
                        <th>Members</th>
                        <th>Status</th>
                        <th>Submission</th>
                        <th className="text-end">Actions</th>
                    </tr>

                </thead>

                <tbody>

                    {teams.map(team => (

                        <TeamRow
                            key={team.id}
                            team={team}
                            approveTeam={approveTeam}
                            rejectTeam={rejectTeam}
                        />

                    ))}

                </tbody>

            </table>

        </div>

    )

}