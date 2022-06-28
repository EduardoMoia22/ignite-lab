import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4w9yhlp27bz01uk65zv34q0/master',
  cache: new InMemoryCache()
})