export default function StatusBadge({ status }) {

    const colors = {
        approved: "bg-success-subtle text-success",
        pending: "bg-warning-subtle text-warning",
        rejected: "bg-danger-subtle text-danger"
    }

    return (
        <span className={`badge ${colors[status]}`}>
            {status}
        </span>
    )

}