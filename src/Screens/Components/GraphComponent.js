import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default class Example extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/simple-bar-chart-tpz8r";

  render() {
    const data = this.props.SlicedData;
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={100}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="open" fill="#8884d8" />
          <Bar dataKey="high" fill="#00FF00" />
          <Bar dataKey="low" fill="#F70000" />
          <Bar dataKey="close" fill="#BE3835" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
