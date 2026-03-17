export default function RecentActivity({ activities }) {

    return (

        <div className="bg-white shadow-sm border p-4 rounded-4">

            <h5 className="mb-4">Recent Activity</h5>

            {activities.map(item => (

                <div key={item.id} className="d-flex mb-3">

                    <div className="me-2 mt-2"
                        style={{
                            width: "8px",
                            height: "8px",
                            background: "#3b82f6",
                            borderRadius: "50%"
                        }}
                    />

                    <div>

                        <p className="mb-1">
                            <strong>{item.team}</strong> {item.action}
                        </p>

                        <small className="text-muted">
                            {item.time}
                        </small>

                    </div>

                </div>

            ))}

        </div>

    );
}