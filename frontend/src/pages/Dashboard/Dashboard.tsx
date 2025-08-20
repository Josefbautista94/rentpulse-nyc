import { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { getForecast } from "../../api/client";
import "./Dashboard.css";

type ISODateString = `${number}-${number}-${number}`;

type Point = {
  date: ISODateString;
  yhat: number;
};
export default function Dashboard() {
  const [data, setData] = useState<Point[]>([]);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    getForecast("BX", 12)
      .then((d) => setData(d.points))
      .catch((e) => setErr(String(e)));
  }, []);

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Rent Forecast — Bronx</h2>
      {err && <p style={{ color: "tomato" }}>{err}</p>}
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 20, left: 10, bottom: 28 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tickFormatter={(d: ISODateString) => d.slice(0, 7)} // yyyy-mm
              tickMargin={12}
            />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="yhat" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
