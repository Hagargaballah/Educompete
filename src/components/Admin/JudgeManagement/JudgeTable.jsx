import JudgeRow from "./JudgeRow";

export default function JudgeTable({ judges, onDelete }) {

    if (!judges.length) {

        return (
            <div className="card p-4 text-center mb-4">
                <p className="text-muted">
                    No judges have been registered yet
                </p>
            </div>
        );
    }

    return (

        <div className="card shadow-sm mb-4 pb-3">
            <div className="card-header shadow bg-light py-2">
                <strong>
                    Judges ( {judges.length} Total )
                </strong>
            </div>
            <div className="table-responsive px-4 bg-white ">
                <table className="table table-borderless align-middle mb-0">
                    <thead className="border-bottom">
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Expertise</th>
                            <th>Assigned Projects</th>
                            <th>Reviews</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {judges.map(judge => (
                            <JudgeRow
                                key={judge.id}
                                judge={judge}
                                onDelete={onDelete}
                            />
                        ))}
                    </tbody>
                </table>
            </div>

        </div>

    );

}