import React, { useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Trophy } from "lucide-react"
import axios from "axios"

const TotalWickets = () => {
    const query = "SELECT SUM(team1_wickets + team2_wickets) AS total_wickets from icc2023";
    const [totalWickets, settotalWickets] = React.useState(0);
    useEffect(() => {
        function getTotalWickets() {
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
                settotalWickets(response.data.datarows[0]);
            }
            ).catch((error) => {
                console.log(error)
            }
            )
        }
        getTotalWickets();
    },[]
    )
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Total Wickets</CardTitle>
        <Trophy />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{totalWickets}</div>
      </CardContent>
    </Card>
  )
}

export default TotalWickets
