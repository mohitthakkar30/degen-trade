import { gql } from "@apollo/client";

export const ALLCOMPS = gql`
  query {
    tradingCompetitons {
      name
      id
    }
  }
`;
export const GET_COMPETITION_LEADERBOARD = gql`
  query GetCompetitionLeaderBoard($id: ID!) {
    tradingCompetiton(id: $id) {
      id
      name
      totalTxns
      totalBuyTxnsToken0
      totalBuyTxnsToken1
      token0 {
        symbol
      }
      token1 {
        symbol
      }
      endTime
      startTime
      regTime
    }

    userParticipatedTradingCompetitons(where: { competition: $id }) {
      id
      participant
      totalTxns
      competitionAddress
      totalVolumeInToken0
      totalBuyTxnsToken0
      totalBuyTxnsToken1
      totalVolumeInToken1
    }
  }
`;
export const getLeaderBoard = gql`
  query {
    userParticipatedTradingCompetition {
      name
      id
    }
  }
`;
