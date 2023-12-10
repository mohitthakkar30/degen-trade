import { ApolloClient } from "@apollo/client";
import { InMemoryCache } from "@apollo/client";
import { HttpLink } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: "https://api.studio.thegraph.com/query/40005/test-scroll/version/latest",
  cache: new InMemoryCache(),
});
