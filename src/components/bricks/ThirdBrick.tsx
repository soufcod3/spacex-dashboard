import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { BarChart } from "../BarChart";
import { Brick } from "../Brick";
import { ILaunch } from "../interfaces";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale } from "chart.js";

const ROCKETS = {
  '5e9d0d95eda69955f709d1eb' : 'Falcon 1',
  '5e9d0d95eda69973a809d1ec' : 'Falcon 9',
  '5e9d0d95eda69974db09d1ed' : 'Falcon Heavy',
  '5e9d0d96eda699382d09d1ee' : 'Starship'
}

export const ThirdBrick = () => {
  const { response, error, loading } = useAxios("/v5/launches");
  const [fetchedData, setFetchedData] = useState<Array<ILaunch>>([]);
  const [chartData, setChartData] = useState<any>();

  useEffect(() => {
    if (fetchedData) {
      const launchesPerYear: { [year: number]: { [rocketType: string]: number } } = {};
  
      fetchedData.forEach((launch) => {
        const date = new Date(launch.date_utc);
        const year = date.getFullYear();
  
        if (!launchesPerYear[year]) {
          launchesPerYear[year] = {};
        }
  
        if (!launchesPerYear[year][launch.rocket]) {
          launchesPerYear[year][launch.rocket] = 1;
        } else {
          launchesPerYear[year][launch.rocket] += 1;
        }
      });
  
      const rocketTypes: { [year: number]: string } = {};
  
      Object.keys(launchesPerYear).forEach((year) => {
        rocketTypes[year] = Object.keys(launchesPerYear[year])
          .map((rocketType) => `${ROCKETS[rocketType]}: ${launchesPerYear[year][rocketType]}`)
          .join(", ");
      });
  
      setChartData({
        labels: Object.keys(launchesPerYear),
        datasets: [
          {
            label: "Type de fusée",
            data: Object.values(launchesPerYear).map((rocketTypeCounts) => Object.values(rocketTypeCounts).reduce((a, b) => a + b, 0)),
            backgroundColor: "rgba(255, 255, 255, 0.6)",
          },
        ],
        rocketTypes: Object.values(rocketTypes),
      });
    }
  }, [fetchedData]);

  useEffect(() => response && setFetchedData(response), [response]);

  useEffect(() => console.log("chartData", chartData), [chartData]);

  return (
    <Brick style={{ height: "285px" }}>
      <div className="box p-2">
        <div className="box-title">Historique des lancements</div>
        <div className="box-body p-2">
          {chartData && <BarChart chartData={chartData} />}
        </div>
      </div>
    </Brick>
  );
};
