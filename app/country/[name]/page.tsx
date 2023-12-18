"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import axios from 'axios';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CountryPage({params}: {params: {name: string}}) {

    const router = useRouter();

    const country = params.name;
    const [playerList, setPlayerList] = useState([]);
    useEffect(() => {
      const query = {
        "match": {
          "country": `${country}`
        }
      };
      function getPlayerList() {
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
                console.log(response.data.hits.hits);
                setPlayerList(response.data.hits.hits);
            }
            ).catch((error) => {
                console.log(error)
            }
            )
        }
        getPlayerList();
    },[country]
    )

  
  return (
    <>
      <div className="grid gap-4 p-5 md:grid-cols-2 lg:grid-cols-4">
        
        {playerList.map((player: any) => {
          return (
            <Card className="hover:cursor-pointer hover:bg-gray-300/50" onClick={()=>router.push(`/player/${player._source.firstname}}`)}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Player</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{player._source.firstname} {player._source.lastname}</div>
              </CardContent>
            </Card>
          )
        }
        )}
      </div>
      
    </>
  )
}

