import React from "react";
import { Calendar } from "lucide-react";

export default function Timeline({ timeline }) {
    return (
        <div className="container mt-5">
            <div className="card p-4 shadow-sm border rounded-4">

                {/* Header */}
                <div className="d-flex align-items-center gap-2 mb-4">
                    <Calendar size={20} className="text-primary" />
                    <h5 className="mb-0 fw-bold">Competition Timeline</h5>
                </div>

                {/* Timeline */}
                {timeline && timeline.map((item, index) => (
                    <div key={index} className="d-flex gap-3 mb-4">

                        {/* Dot + Line */}
                        <div className="d-flex flex-column align-items-center">

                            {/* Dot */}
                            <div
                                className="rounded-circle"
                                style={{
                                    width: "12px",
                                    height: "12px",
                                    backgroundColor:
                                    // function to pick color based on status
                                        item.status === "completed"
                                            ? "#198754"
                                            : item.status === "upcoming"
                                                ? "#0d6efd"
                                                : "#adb5bd",
                                }}
                            ></div>

                            {/* Line */}
                            {index < timeline.length - 1 && (
                                <div
                                    style={{
                                        width: "2px",
                                        height: "50px",
                                        backgroundColor: "#dee2e6",
                                        marginTop: "6px",
                                    }}
                                ></div>
                            )}
                        </div>

                        {/* Content */}
                        <div className="flex-grow-1">
                            <p className="mb-1 fw-semibold">{item.event}</p>
                            <small className="text-muted">{item.date}</small>
                        </div>

                    </div>
                ))}

            </div>
        </div>
    );
}