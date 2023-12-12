"use client"

import { Cell, Pie, PieChart, ResponsiveContainer, Sector } from "recharts"

const data = [
  { name: "India", value: 400 },
  { name: "Australia", value: 300 },
  { name: "South Africa", value: 300 },
  { name: "Pakistan", value: 200 },
  { name: "England", value: 200 },
  { name: "New Zealand", value: 200 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

export function PieDistribution() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, percent }) =>
            `${name} ${(percent * 100).toFixed(0)}%`
          }
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}
