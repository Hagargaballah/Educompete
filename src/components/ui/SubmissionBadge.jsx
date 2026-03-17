export default function SubmissionBadge({ status }) {

    const labels = {
        "submitted": "Submitted",
        "in-progress": "In Progress",
        "not-started": "Not Started"
    }

    const colors = {
        "submitted": "bg-primary-subtle text-primary",
        "in-progress": "bg-purple-subtle text-black",
        "not-started": "bg-secondary-subtle text-black"
    }

    return (
        <span className={`badge ${colors[status]}`}>
            {labels[status]}
        </span>
    )

}