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
import TotalRuns from "@/components/statistics/TotalRuns"
import TotalWickets from "@/components/statistics/TotalWickets"
import TotalMatches from "@/components/statistics/TotalMatches"
import MatchList from "@/components/statistics/MatchList"

// export const metadata: Metadata = {
//   title: "Dashboard",
//   description: "Dashboard page",
// }

export default function Dashboard() {
  
  return (
    <>
      <div className="grid gap-4 p-5 md:grid-cols-2 lg:grid-cols-4">
        <TotalRuns/>
        <TotalWickets/>
        <TotalMatches/>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Winner</CardTitle>
            <Award />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Australia</div>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 p-4 px-16">

        <MatchList/>
        
      </div>
    </>
  )
}
