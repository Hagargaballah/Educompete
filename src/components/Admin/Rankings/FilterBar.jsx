import React from "react";

const FilterBar = ({ categories, selected, onChange }) => (
    <div
        className="d-flex flex-column flex-sm-row gap-3 gap-sm-0 align-items-center justify-content-between rounded-4 px-4 py-3 mb-5"
        style={{
            background: "#fff",
            boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
            border: "1px solid #eee",
        }}
    >
        <div className="d-flex align-items-center gap-2 text-muted">
            <span>⚙️</span>
            <span className="small fw-semibold">Filter by Category:</span>
        </div>

        <select
            className="form-select form-select-sm w-auto"
            value={selected}
            onChange={(e) => onChange(e.target.value)}
            style={{ minWidth: 160, borderRadius: 10 }}
        >
            <option value="All">All Categories</option>

            {categories.map((cat) => (
                <option key={cat} value={cat}>
                    {cat}
                </option>
            ))}
        </select>
    </div>
);

export default FilterBar;
