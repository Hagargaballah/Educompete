export default function TeamsStats({ teams }) {

    const approved =
        teams.filter(t => t.status === "approved").length

    const pending =
        teams.filter(t => t.status === "pending").length

    return (

        <div className="row mt-4 g-3">

            <div className="col-md-4">
                <div className="card p-3">
                    <small className="text-muted">Total Teams</small>
                    <h3>{teams.length}</h3>
                </div>
            </div>

            <div className="col-md-4">
                <div className="card p-3">
                    <small className="text-muted">Approved</small>
                    <h3 className="text-success">{approved}</h3>
                </div>
            </div>

            <div className="col-md-4">
                <div className="card p-3">
                    <small className="text-muted">Pending</small>
                    <h3 className="text-warning">{pending}</h3>
                </div>
            </div>

        </div>

    )

}