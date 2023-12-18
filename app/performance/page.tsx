"use client"
import { useRouter } from "next/navigation"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Performance() {
    const router = useRouter()
  
  return (
    <>
      <div className="grid gap-4 p-5 md:grid-cols-2 lg:grid-cols-4">
        {/* Can be made into a Card Component later */}
        <Card className="hover:cursor-pointer hover:bg-gray-300/50" onClick={()=>router.push("country/india")}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Team</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">India</div>
          </CardContent>
        </Card>
        <Card className="hover:cursor-pointer hover:bg-gray-300/50" onClick={()=>router.push("country/australia")}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Team</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Australia</div>
          </CardContent>
        </Card>
        <Card className="hover:cursor-pointer hover:bg-gray-300/50" onClick={()=>router.push("country/england")}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Team</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">England</div>
          </CardContent>
        </Card>
        <Card className="hover:cursor-pointer hover:bg-gray-300/50" onClick={()=>router.push("country/newzealand")}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Team</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">New Zealand</div>
          </CardContent>
        </Card>
        <Card className="hover:cursor-pointer hover:bg-gray-300/50" onClick={()=>router.push("country/pakistan")}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Team</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Pakistan</div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
