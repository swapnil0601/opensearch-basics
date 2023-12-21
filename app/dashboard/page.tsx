"use client"
import { Metadata } from "next"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Award } from "lucide-react"
import TotalRuns from "@/components/statistics/TotalRuns"
import TotalWickets from "@/components/statistics/TotalWickets"
import TotalMatches from "@/components/statistics/TotalMatches"
import MatchList from "@/components/statistics/MatchList"

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
