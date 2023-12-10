import { apolloClient } from "@/utils/apollo/client";
import { ALLCOMPS } from "@/utils/apollo/queries";
import React from "react";
import Card from "./components/Card";
import { useQuery, gql } from '@apollo/client';
import axios from 'axios'

type Props = {};

function Competitions({ }: Props) {
  const { loading, error, data } = useQuery(ALLCOMPS);
  console.log("apollo",data)

  return (

    <div className="grid grid-cols-4 gap-2">
    {data?.tradingCompetitons
    .map((comp:any, index:any) => {
      return (<Card name={comp.name} address={comp.id}  />)
    })}
  </div>

  );
}

export default Competitions;
