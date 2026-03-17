import React from "react";

const rankCircleStyle = (rank) => {
    if (rank === 1) return { background: "#f9a825", color: "#fff" };
    if (rank === 2) return { background: "#9e9e9e", color: "#fff" };
    if (rank === 3) return { background: "#bf6900", color: "#fff" };
    return { background: "#e3e3e3", color: "#555" };
};

const RankingRow = ({ team }) => (
    <div
        className="d-flex flex-column flex-sm-row align-items-center justify-content-between py-3 px-2"
        style={{ borderBottom: "1px solid #f0f0f0" }}
    >
        <div className="d-flex flex-column flex-sm-row align-items-center gap-3">
            <div className="d-flex align-items-center gap-2">

                <div className="rounded-circle d-flex align-items-center justify-content-center fw-bold flex-shrink-0" style={{ width: 36, height: 36, fontSize: 13, ...rankCircleStyle(team.rank) }} >
                    {team.rank}
                </div>

                <span style={{ fontSize: 20 }}>
                    {team.rank === 1 ? "🏆" : team.rank === 2 ? "🥈" : team.rank === 3 ? "🥉" : ""}
                </span>
            </div>

            <div>
                <span className="fw-semibold">{team.name}</span>

                <div className="text-muted small">
                    {team.school}
                    <span className="mx-1">•</span>
                    {team.category}
                </div>
            </div>
        </div>

        <div className="text-end">
            <div className="fw-bold fs-5 text-primary">
                {team.score ?? "-"}
            </div>
            <div className="text-muted" style={{ fontSize: 11 }}>points</div>
        </div>
    </div>
);

const RankingTable = ({ teams }) => (
    <div className="card border-0 rounded-4 shadow-sm p-4">
        <h5 className="fw-bold mb-3">Complete Rankings</h5>

        {teams.length === 0 ? (
            <p className="text-muted text-center py-4">
                No teams found in this category.
            </p>
        ) : (
            teams.map((team) => (
                <RankingRow key={team.id} team={team} />
            ))
        )}
    </div>
);

export default RankingTable;
