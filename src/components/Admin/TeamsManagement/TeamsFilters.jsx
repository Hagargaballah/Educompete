import { Search } from "lucide-react";

export default function TeamsFilters({
    search,
    setSearch,
    status,
    setStatus
}) {

    return (

        <div className="card p-3 mb-4">

            <div className="d-flex gap-3">

                <div className="position-relative flex-grow-1">

                    <Search
                        size={16}
                        className="position-absolute"
                        style={{ top: "10px", left: "10px" }}
                    />

                    <input
                        className="form-control ps-4 ms-2"
                        placeholder="Search teams or schools..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                </div>


                <select
                    className="form-select"
                    style={{ maxWidth: "200px" }}
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >

                    <option value="all">All Status</option>
                    <option value="approved">Approved</option>
                    <option value="pending">Pending</option>
                    <option value="rejected">Rejected</option>

                </select>

            </div>

        </div>

    )

}