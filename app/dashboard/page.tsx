"use client"

import { useEffect } from "react"
import { Metadata } from "next"
import axios from "axios"

import { encodedToken } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Overview } from "@/components/overview"
import { PieDistribution } from "@/components/piechart"
import { Award, LayoutList, Trophy } from "lucide-react"

// export const metadata: Metadata = {
//   title: "Dashboard",
//   description: "Dashboard page",
// }

export default function Dashboard() {
  
  useEffect(() => {
    axios.post("https://localhost:9200/_plugins/_sql", { "query": "select * from worldcup" }, {
      headers:
        {
          "Content-Type": "application/json",
          "Authorization": `Basic ${Buffer.from("admin:admin").toString("base64")}`
        }
  }).then((res) => {
    console.log(res.data.datarows)
  })
  .catch((err) => {
    console.log(err)
  }
  );
    // const getMatchAll = async () => {
    //   try {
    //     const res = await axios.post(
    //       "https://localhost:9200/_plugins/_sql",
    //       { "query": "select * from worldcup" },
    //       {
    //         headers:
    //           {
    //               "Authorization": `Basic ${Buffer.from("admin:admin").toString("base64")}`,
    //           },
    //       }
    //     )
    //     console.log(res.data)
    //   } catch (e) {
    //     console.log("Error")
    //     console.log(e)
    //   }
    // }
    // getMatchAll()
  }, [])
  return (
    <>
      <div className="grid gap-4 p-5 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Highest Wickets</CardTitle>
            <Trophy />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
            {/* <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p> */}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Highest Runs</CardTitle>
            <Award />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2350</div>
            {/* <p className="text-xs text-muted-foreground">
              +180.1% from last month
            </p> */}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Matches</CardTitle>
            <LayoutList />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">40</div>
            {/* <p className="text-xs text-muted-foreground">
              +19% from last month
            </p> */}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Winner</CardTitle>
            <Award />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Australia</div>
            {/* <p className="text-xs text-muted-foreground">
              +201 since last hour
            </p> */}
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 p-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Total Runs</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <Overview />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Wicket Distribution</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <PieDistribution />
          </CardContent>
        </Card>
      </div>
    </>
  )
}
