"use client"

import React, { useEffect, useState } from "react"
import axios from "axios"
import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

import { COUNTRY_STATS } from "@/lib/data"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Statistics() {
  const [countryStat, setCountryStat] = useState(COUNTRY_STATS)
  const COLORS = ['#ced4da', '#adb5bd', '#6c757d', '#495057'];
  const chartData = Object.keys(countryStat).map((country) => ({
    name: country,
    totalRuns: countryStat[country].totalRuns,
    totalWickets: countryStat[country].totalWickets,
  }))
  useEffect(() => {

    function getMatchList() {
          axios.get(
              "https://localhost:9200/icc2023/_search",
              {
                  headers:
                  {
                      "Authorization": `Basic ${Buffer.from("admin:admin").toString("base64")}`,
                  },
              }
          ).then((response) => {
              console.log(response.data.hits);
              setCountryStat(response.data.hits);
          }
          ).catch((error) => {
              console.log(error)
          }
          )
      }
      getMatchList();
      console.log(countryStat);
  },[]
  )
  return (
    <div className="grid gap-4 p-5 md:grid-cols-1 lg:grid-cols-2">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Run Distribution</CardTitle>
        </CardHeader>
        <ResponsiveContainer width="100%" height={500}>
          <BarChart data={chartData}>
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
            <Tooltip
              formatter={(value) => [`${value} runs`]}
              labelFormatter={(label) => `${label}`}
            />
            <Bar dataKey="totalRuns" radius={[4, 4, 0, 0]}  >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Wicket Distribution</CardTitle>
        </CardHeader>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart data={chartData}>
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
          <Tooltip
            formatter={(value) => [`${value} wickets`]}
            labelFormatter={(label) => `${label}`}
          />
          <Bar dataKey="totalWickets" radius={[4, 4, 0, 0]}  >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
        </BarChart>
      </ResponsiveContainer>
      </Card>
    </div>
  )
}
