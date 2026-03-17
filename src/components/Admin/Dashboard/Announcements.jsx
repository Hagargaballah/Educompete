export default function Announcements({ announcements }) {

    return (

        <div className="Announcements bg-white shadow-sm border p-4 rounded-4">

            <h5 className="mb-4">Announcements</h5>

            {announcements.map(item => (

                <div
                    key={item.id}
                    className="p-3 mb-3 rounded-3 border"
                    style={{ background: "#eef6ff" }}
                >

                    <p className="fw-semibold mb-1">
                        {item.title}
                    </p>

                    <small className="text-muted">
                        {item.message}
                    </small>

                    <p className="text-muted mt-2 mb-0">
                        {item.date}
                    </p>

                </div>

            ))}

        </div>

    );
}