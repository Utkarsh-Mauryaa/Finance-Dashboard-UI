import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";
import { getLast6Months } from "../../lib/features";

ChartJS.register(
  CategoryScale, LinearScale, PointElement, LineElement,
  Title, Tooltip, Legend, Filler, ArcElement,
);

const labels = getLast6Months();

const lineChartOptions = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: { display: false },
    title: { display: false },
    tooltip: {
      backgroundColor: "#13161e",
      borderColor: "#1e2330",
      borderWidth: 1,
      titleColor: "#e8eaf0",
      bodyColor: "#8890a8",
      titleFont: { family: "Syne", weight: "700" },
      bodyFont: { family: "DM Mono" },
      padding: 10,
      cornerRadius: 8,
      callbacks: {
        label: function (context) {
          let label = context.dataset.label || "";
          if (label) label += ": ";
          if (context.parsed.y !== null)
            label += "₹" + context.parsed.y.toLocaleString("en-IN");
          return label;
        },
      },
    },
  },
  scales: {
    x: {
      grid: { display: false },
      border: { color: "#1e2330" },
      ticks: { color: "#5a607a", font: { family: "DM Mono", size: 11 } },
    },
    y: {
      grid: { color: "rgba(255,255,255,0.04)", drawBorder: false },
      border: { display: false },
      min: 0,
      max: 100000,
      ticks: {
        color: "#5a607a",
        font: { family: "DM Mono", size: 11 },
        stepSize: 25000,
        callback: function (value) {
          if (value === 0) return "₹0";
          if (value === 100000) return "1.0L";
          return (value / 1000).toFixed(1) + "k";
        },
      },
    },
  },
};

const LineChart = ({ income = [], expense = [] }) => {
  const data = {
    labels,
    datasets: [
      {
        label: "Income",
        data: income,
        fill: true,
        backgroundColor: "rgba(99,220,190,0.08)",
        borderColor: "#63dcbe",
        borderWidth: 2,
        tension: 0.4,
        pointBackgroundColor: "#63dcbe",
        pointBorderColor: "#0d0f14",
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      {
        label: "Expense",
        data: expense,
        fill: true,
        backgroundColor: "rgba(249,49,85,0.08)",
        borderColor: "#f93155ff",
        borderWidth: 2,
        tension: 0.4,
        pointBackgroundColor: "#f93155ff",
        pointBorderColor: "#0d0f14",
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };
  return (
    <div style={{ height: 260 }}>
      <Line data={data} options={lineChartOptions} />
    </div>
  );
};

const doughnutChartOptions = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: { display: false },
    tooltip: {
      backgroundColor: "#13161e",
      borderColor: "#1e2330",
      borderWidth: 1,
      titleColor: "#e8eaf0",
      bodyColor: "#8890a8",
      titleFont: { family: "Syne", weight: "700" },
      bodyFont: { family: "DM Mono" },
      padding: 10,
      cornerRadius: 8,
    },
  },
  // "60%" = chunky ring. The old value of 110px was making it razor thin
  cutout: "76%",
};

const DoughnutChart = ({ value = [], labels = [] }) => {
  const data = {
    labels,
    datasets: [
      {
        data: value,
        backgroundColor: [
          "rgba(248, 245, 101, 0.95)",
          "rgba(0, 68, 255, 0.8)",
          "rgba(248, 43, 255, 0.8)",
          "rgba(244, 18, 18, 0.8)",
          "rgba(42, 250, 23, 0.8)",
          "rgba(220, 120, 5, 0.8)",
        ],
        borderColor: [
          "rgba(248, 245, 101, 0.95)",
          "rgba(0, 68, 255, 0.8)",
          "rgba(248, 43, 255, 0.8)",
          "rgba(244, 18, 18, 0.8)",
          "rgba(42, 250, 23, 0.8)",
          "rgba(220, 120, 5, 0.8)",
        ],
        borderWidth: 2,
        hoverOffset: 6,
        hoverBackgroundColor: [
          "rgba(248, 247, 189, 0.95)",
          "rgba(111, 150, 255, 0.8)",
          "rgba(252, 164, 255, 0.8)",
          "rgba(255, 118, 118, 0.8)",
          "rgba(169, 255, 161, 0.8)",
          "rgba(255, 174, 81, 0.8)",
        ],
      },
    ],
  };
  return <Doughnut data={data} options={doughnutChartOptions} />;
};

export { DoughnutChart, LineChart };