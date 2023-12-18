"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import axios from 'axios';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function CountryPage({params} : {params: {id: string}}) {
  const router = useRouter();
    const playerId = params.id;
    console.log(playerId)
    const [player, setPlayer] = useState();
    useEffect(() => {
      const query = {
        "match": {
          "firstname": `${playerId}`
        }
      };
      function getPlayer() {
            axios.post(
                "https://localhost:9200/player_data/_search",
                { "query": query },
                {
                    headers:
                    {
                        "Authorization": `Basic ${Buffer.from("admin:admin").toString("base64")}`,
                    },
                }
            ).then((response) => {
                console.log(response.data.hits.hits[0]);
                setPlayer(response.data.hits.hits[0]);
            }
            ).catch((error) => {
                console.log(error)
            }
            )
        }
        getPlayer();
    },[playerId]
    )

  
  return (
    <>
      <div className="grid gap-4 p-5 md:grid-cols-2 lg:grid-cols-4">
       
        <Card className="hover:cursor-pointer hover:bg-gray-300/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Name</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{player?._source.firstname} {player?._source.lastname}</div>
          </CardContent>
        </Card>
        <Card className="hover:cursor-pointer hover:bg-gray-300/50" onClick={()=>router.back()}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Team</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{player?._source.country}</div>
          </CardContent>
        </Card>
        <Card className="hover:cursor-pointer hover:bg-gray-300/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Runs Scored</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{player?._source.runs_scored}</div>
          </CardContent>
        </Card>
        <Card className="hover:cursor-pointer hover:bg-gray-300/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Wickets Taken</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{player?._source.wickets_taken}</div>
          </CardContent>
        </Card>
        <Card className="hover:cursor-pointer hover:bg-gray-300/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Matches Player</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{player?._source.matches_played}</div>
          </CardContent>
        </Card>
        <Card className="hover:cursor-pointer hover:bg-gray-300/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Fifties</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{player?._source.fifties}</div>
          </CardContent>
        </Card>
        <Card className="hover:cursor-pointer hover:bg-gray-300/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Centuries</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{player?._source.centuries}</div>
          </CardContent>
        </Card>
      </div>
      
    </>
  )
}

