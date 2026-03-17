import { Check, X, MoreVertical } from "lucide-react";
import StatusBadge from "../../ui/StatusBadge";
import SubmissionBadge from "../../ui/SubmissionBadge";

export default function TeamRow({
    team,
    approveTeam,
    rejectTeam
}) {

    return (

        <tr>

            <td>

                <div>

                    <div className="fw-semibold">
                        {team.name}
                    </div>

                    <small className="text-muted">
                        {team.id}
                    </small>

                </div>

            </td>


            <td>

                <div>

                    <div>{team.school}</div>

                    <small className="text-muted">
                        {team.grade}
                    </small>

                </div>

            </td>


            <td>{team.category}</td>


            <td>

                <div>

                    <div className="fw-semibold">
                        {team.members.length} members
                    </div>

                    <small className="text-muted">
                        {team.members[0].name || team.members[0]}
                    </small>

                </div>

            </td>


            <td>
                <StatusBadge status={team.status} />
            </td>


            <td>
                <SubmissionBadge status={team.submissionStatus} />
            </td>


            <td className="text-end">

                {team.status === "pending" && (

                    <>
                        <button
                            className="btn btn-sm btn-light text-success"
                            onClick={() => approveTeam(team.id)}
                        >
                            <Check size={16} />
                        </button>

                        <button
                            className="btn btn-sm btn-light text-danger ms-2"
                            onClick={() => rejectTeam(team.id)}
                        >
                            <X size={16} />
                        </button>
                    </>

                )}

                <button className="btn btn-sm btn-light ms-2">
                    <MoreVertical size={16} />
                </button>

            </td>

        </tr>

    )

}