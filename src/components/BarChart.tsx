import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";

// Register the CategoryScale
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

type BarChartProps = {
  chartData: any;
};

const ROCKETS = {
  "5e9d0d95eda69955f709d1eb": "Falcon 1",
  "5e9d0d95eda69973a809d1ec": "Falcon 9",
  "5e9d0d95eda69974db09d1ed": "Falcon Heavy",
  "5e9d0d96eda699382d09d1ee": "Starship",
};

export const BarChart = ({ chartData }: BarChartProps) => {
  const options = {
    scales: {
      x: {
        ticks: {
          color: 'white'
        }
      },
      y: {
        ticks: {
          color: 'white'
        }
      }
    },
    interaction: {
      intersect: false,
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            const index = context.dataIndex ?? 0;

            // Get the rocket types for the corresponding year
            const rocketTypes = chartData?.rocketTypes ?? [];
            const rocketType = rocketTypes[index] || "";

            // Convert the rocketType to a string before accessing the ROCKETS object
            const rocketName = ROCKETS[String(rocketType)] || rocketType;

            // Return the label with the rocket type name
            return `${rocketName}`;
          },
        },
      },
    }
  };

  return <Bar data={chartData} options={options} />;
};
