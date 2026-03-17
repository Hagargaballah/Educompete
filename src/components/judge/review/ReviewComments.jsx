export default function ReviewCommentsCard({
    comments,
    setComments
}) {

    return (
        <div className="card shadow-sm p-4 rounded-4">
            {/* card title */}
            <h5 className="fw-semibold mb-4">
                Review Comments
            </h5>

            <textarea
                className="form-control"
                rows="5"
                placeholder="Provide constructive feedback..."
                value={comments}
                onChange={(e) =>
                    setComments(e.target.value)
                }
            />

            <small className="text-muted mt-3">
                Provide detailed feedback to help the team improve
            </small>

        </div>
    );
}