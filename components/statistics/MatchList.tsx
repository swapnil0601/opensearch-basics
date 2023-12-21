import React, { useEffect, useState } from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import axios from 'axios';
import { useInsecureAxios } from '@/lib/utils';
import {MATCH_DATA} from '@/lib/data';
const MatchList = () => {
    const [matchType,setMatchType] = useState("qualifier");
    const [matchList, setMatchList] = useState(MATCH_DATA);
    useEffect(() => {
      const query = {
            "bool": {
              "must": [
                { "match": { "match_type": `${matchType}` }}
              ]
            }
        };
        setMatchList(MATCH_DATA.filter((match)=>match._source.match_type===matchType));
      function getMatchList() {
            axios.post(
                "https://localhost:9200/icc2023/_search",
                { "query": query },
                {
                    headers:
                    {
                        "Authorization": `Basic ${Buffer.from("admin:admin").toString("base64")}`,
                    },
                }
            ).then((response) => {
                console.log(response.data.hits.hits);
                setMatchList(response.data.hits.hits);
            }
            ).catch((error) => {
                console.log(error)
            }
            )
        }
        getMatchList();
    },[matchType]
    )
  return (
    <>
    <Select onValueChange={(value)=>setMatchType(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Match Type" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Match Type</SelectLabel>
          <SelectItem value="qualifier">Qualifers</SelectItem>
          <SelectItem value="quater">Quater Finals</SelectItem>
          <SelectItem value="semi">Semi Finals</SelectItem>
          <SelectItem value="final">Finals</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    <Table className='w-full'>
      <TableCaption>List of Matches</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">{matchType.toUpperCase()}</TableHead>
          <TableHead>Team 1</TableHead>
          <TableHead>Runs</TableHead>
          <TableHead>Wickets</TableHead>
          <TableHead className='text-center'>Winner</TableHead>
          <TableHead className="text-right">Wickets</TableHead>
          <TableHead className="text-right">Runs</TableHead>
          <TableHead className="text-right">Team 2</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {matchList.map((match) => (
            <TableRow key={match._id}>
                <TableCell>{match._source.match_type}</TableCell>
                <TableCell>{match._source.team1}</TableCell>
                <TableCell>{match._source.team1_runs}</TableCell>
                <TableCell>{match._source.team1_wickets}</TableCell>
                <TableCell className='text-center'>{match._source.winner}</TableCell>
                <TableCell className='text-right'>{match._source.team2_wickets}</TableCell>
                <TableCell className='text-right'>{match._source.team2_runs}</TableCell>
                <TableCell className='text-right'>{match._source.team2}</TableCell>
            </TableRow>
        ))}
      </TableBody>
    </Table>
    </>
  )
}

export default MatchList
