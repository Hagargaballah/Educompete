import { Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function CategoryPieChart({ data }) {

    const chartData = {
        labels: data.map(i => i.label),
        datasets: [
            {
                data: data.map(i => i.value),
                backgroundColor: [
                    "#3b82f6",
                    "#14b8a6",
                    "#8b5cf6",
                    "#f59e0b",
                    "#ef4444"
                ]
            }
        ]
    };

    return (
        <div className="bg-white shadow-sm border p-4 rounded-4 chart-box">
            <h5 className="mb-4">Projects by Category</h5>
            <Pie data={chartData} />
        </div>
    );
}