import React, { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Trophy } from "lucide-react"
import axios from "axios"

const TotalMatches = () => {
    const query = "Select Count(*) as total_matches from icc2023";
    const [totalMatches, setTotalMatches] = useState(15);
    useEffect(() => {
        function getTotalMatches() {
            axios.post(
                "https://localhost:9200/_plugins/_sql",
                { "query": query },
                {
                    headers:
                    {
                        "Authorization": `Basic ${Buffer.from("admin:admin").toString("base64")}`,
                    },
                }
            ).then((response) => {
                // console.log(response.data);
                setTotalMatches(response.data.datarows[0]);
            }
            ).catch((error) => {
                console.log(error)
            }
            )
        }
        getTotalMatches();
    },[]
    )
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Total Matches</CardTitle>
        <Trophy />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{totalMatches}</div>
      </CardContent>
    </Card>
  )
}

export default TotalMatches
