import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const TopProductsBarChart = ({ top5 }) => {
  const data = top5;

  return (
    <div>
      <BarChart
        width={600}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 10,
          bottom: 5,
        }}
        barSize={40}
      >
        <XAxis
          dataKey="name"
          scale="point"
          padding={{ left: 20, right: 10 }}
          label={{
            value: "products",
            position: "insideBottomRight",
            offset: -20,
          }}
        />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar
          dataKey="units sold"
          fill="#5bc0de"
          background={{ fill: "#eee" }}
        />
      </BarChart>
    </div>
  );
};

export default TopProductsBarChart;
