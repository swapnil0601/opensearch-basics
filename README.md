# Cricket World Cup Analyzer

This project analyzes Cricket World Cup match data stored in Opensearch. It provides statistics, aggregations, and insights into various match details.

## Overview

The project involves importing Cricket World Cup match data into Opensearch and performing data analysis using Opensearch's query DSL.

## Features

- **Index Creation**: Sets up an Opensearch index to store Cricket World Cup match data.
- **Data Import**: Loads Cricket World Cup match data into Opensearch.
- **Queries and Aggregations**: Performs DSL queries to retrieve various match statistics.
- **Visualization**: Generates visual representations of match data.

## Setup

### Opensearch Index Configuration

The Opensearch index is configured with the following mapping:

```json
{
  "settings": {
    "number_of_shards": 3,
    "number_of_replicas": 2
  },
  "mappings": {
    "properties": {
      "team1": { "type": "text" },
      "team2": { "type": "text" },
      "match_number": { "type": "integer" },
      "winner": { "type": "text" },
      "team1_runs": { "type": "integer" },
      "team2_runs": { "type": "integer" },
      "team1_wickets": { "type": "integer" },
      "team2_wickets": { "type": "integer" },
      "match_type": { "type": "text" }
    }
  }
}
