"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "India",
    total: Math.floor(Math.random() * 3000) + 1000,
  },
  {
    name: "Australia",
    total: Math.floor(Math.random() * 3000) + 1000,
  },
  {
    name: "England",
    total: Math.floor(Math.random() * 3000) + 1000,
  },
  {
    name: "Pakistan",
    total: Math.floor(Math.random() * 3000) + 1000,
  },
  {
    name: "South Africa",
    total: Math.floor(Math.random() * 3000) + 1000,
  },
  {
    name: "New Zealand",
    total: Math.floor(Math.random() * 3000) + 1000,
  }
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
