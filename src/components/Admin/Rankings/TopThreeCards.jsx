import React from "react";

const medalConfig = {
    1: {
        icon: "🏆",
        label: "1st",
        bg: "linear-gradient(135deg, #fff9c4, #ffe082)",
        border: "2px solid #f9a825",
        textColor: "#f57f17",
        elevated: true,
    },
    2: {
        icon: "🥈",
        label: "2nd",
        bg: "linear-gradient(135deg, #f5f5f5, #e0e0e0)",
        border: "2px solid #bdbdbd",
        textColor: "#616161",
    },
    3: {
        icon: "🥉",
        label: "3rd",
        bg: "linear-gradient(135deg, #fff3e0, #ffe0b2)",
        border: "2px solid #ef6c00",
        textColor: "#e65100",
    },
};

const TopCard = ({ team }) => {
    const config = medalConfig[team.rank];

    return (
        <div
            className="card border-0 rounded-4 text-center p-4 h-100"
            style={{
                background: config.bg,
                border: config.border,
                transform: team.rank === 1 ? "translateY(-16px)" : "none",
                boxShadow:
                    team.rank === 1
                        ? "0 12px 40px rgba(249,168,37,0.3)"
                        : "0 4px 16px rgba(0,0,0,0.08)",
                position: "relative",
            }}
        >
            {team.rank === 1 && (
                <div
                    style={{
                        position: "absolute",
                        top: -16,
                        left: "50%",
                        transform: "translateX(-50%)",
                        fontSize: 26,
                    }}
                >
                    ⭐
                </div>
            )}

            <div style={{ fontSize: 46 }}>{config.icon}</div>

            <h3
                className="fw-bold mt-2"
                style={{ color: config.textColor, fontSize: "2rem" }}
            >
                {config.label}
            </h3>

            <h5 className="fw-semibold mt-2 mb-1">{team.name}</h5>

            <p className="text-muted small mb-2">{team.school}</p>

            <h4
                className="fw-bold mt-2"
                style={{ color: config.textColor, fontSize: "1.8rem" }}
            >
                {team.score ?? "-"}
            </h4>

            <div className="text-muted small">points</div>
        </div>
    );
};

const TopThreeCards = ({ teams }) => {
    if (!teams || teams.length < 3) return null;

    const top3 = teams.slice(0, 3);


    const podiumOrder = [top3[1], top3[0], top3[2]];

    return (
        <div className="row g-4 align-items-end justify-content-center mb-5">
            {podiumOrder.map((team) => (
                <div key={team.id} className="col-12 col-sm-6 col-md-4">
                    <TopCard team={team} />
                </div>
            ))}
        </div>
    );
};

export default TopThreeCards;
