import { Trash2 } from "lucide-react";

export default function JudgeRow({ judge, onDelete }) {

    return (

        <tr>
            <td>{judge.name}</td>
            <td>{judge.email}</td>
            <td>{judge.expertise}</td>
            <td>
                {judge.assignedProjects.length}
            </td>
            <td>
                {judge.reviewedCount}
            </td>
            <td>

                <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => onDelete(judge.id)}
                >
                    <Trash2 size={16} />
                </button>
            </td>
        </tr>

    );

}