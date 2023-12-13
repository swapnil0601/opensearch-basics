import React, { useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Trophy } from "lucide-react"
import axios from "axios"

const TotalRuns = () => {
    const query = "SELECT SUM(team1_runs + team2_runs) AS total_runs from icc2023";
    const [totalRuns, setTotalRuns] = React.useState(0);
    useEffect(() => {
        function getTotalRuns() {
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
                setTotalRuns(response.data.datarows[0]);
            }
            ).catch((error) => {
                console.log(error)
            }
            )
        }
        getTotalRuns();
    },[]
    )
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Total Runs</CardTitle>
        <Trophy />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{totalRuns}</div>
      </CardContent>
    </Card>
  )
}

export default TotalRuns
