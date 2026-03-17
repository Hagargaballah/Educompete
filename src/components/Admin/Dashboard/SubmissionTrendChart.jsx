import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

export default function SubmissionTrendChart({ data }) {

    const chartData = {
        labels: data.map(item => item.label),
        datasets: [
            {
                label: "Submissions",
                data: data.map(item => item.value),
                borderColor: "#3b82f6",
                backgroundColor: "#3b82f6",
                tension: 0.4
            }
        ]
    };

    return (
        <div className="bg-white shadow-sm border p-4 rounded-4 chart-box">
            <h5 className="mb-4">Submission Trend</h5>
            <Line data={chartData} />
        </div>
    );
}