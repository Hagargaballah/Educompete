export default function ReviewProgress({ reviewed, total, progress }) {

    return (
        <div className="card shadow-sm rounded-3 mb-4 p-4">

            <div className="d-flex justify-content-between mb-3">
                <h5 className="fw-semibold">Review Progress</h5>
                <span className="text-muted">
                    {reviewed} of {total} completed
                </span>
            </div>

            <div className="progress" style={{ height: "10px" }}>
                <div
                    className="progress-bar bg-primary"
                    style={{ width: `${progress}%` }}
                />
            </div>

        </div>
    );
}