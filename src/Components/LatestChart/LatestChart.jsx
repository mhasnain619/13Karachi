import { Bar } from 'react-chartjs-2';
import './LatestChart.css';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const LatestSalesChart = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Sales',
                data: [400, 500, 500, 400, 400, 250, 400, 0, 0, 0, 0, 0],
                backgroundColor: '#14532d',
                borderRadius: 5,
                barThickness: 8,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,  // Important for responsiveness
        plugins: {
            legend: { display: false },
        },
        scales: {
            y: {
                beginAtZero: true,
                min: 100,
                max: 500,
                ticks: { stepSize: 100 },
            },
        },
    };

    return (
        <div className="latest-sales-container">
            <div className="latest-sales-header">
                <h2>Latest Sales</h2>
                <div className="latest-sales-buttons">
                    <button className="active">Yearly</button>
                    <button>Monthly</button>
                    <button>Weekly</button>
                </div>
            </div>
            <div className="chart-wrapper">
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default LatestSalesChart;
