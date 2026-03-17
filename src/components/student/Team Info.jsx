import React from "react";

export default function TeamInfo({ school, grade, supervisor, members }) {
    return (
        <div className="card p-4 shadow-sm border mt-4 rounded-4">
            <h5 className="fw-bold mb-4">Team Information</h5>

            <div className="small">

                {/* School */}
                <div className="mb-3">
                    <p className="text-muted mb-1">School</p>
                    <p className="fw-semibold mb-0">{school}</p>
                </div>

                {/* Grade */}
                <div className="mb-3">
                    <p className="text-muted mb-1">Grade</p>
                    <p className="fw-semibold mb-0">{grade}</p>
                </div>

                {/* Supervisor */}
                <div className="mb-3">
                    <p className="text-muted mb-1">Supervisor</p>
                    <p className="fw-semibold mb-0">{supervisor}</p>
                </div>

                {/* Members */}
                <div className="mb-2">
                    <p className="text-muted mb-3">Members :</p>

                    {members?.map((member, index) => (
                        <div key={member.id || index} className="mb-2">
                            <span className="fw-semibold">{member.name}</span>
                            <br />
                            <small className="text-muted">{member.email}</small>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}