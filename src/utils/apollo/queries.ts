import {gql} from '@apollo/client'

 export const ALLCOMPS = gql
     `query {tradingCompetitons{name,id}}`


 export const getLeaderBoard = gql 
    `query {userParticipatedTradingCompetition{name, id}}`