// Imports: GraphQL
import { ApolloServer } from "apollo-server-express";
import { importSchema } from "graphql-import";
import { RESOLVERS } from "./resolvers";
const TYPEDEFS = importSchema("graphql/typeDefs/mainSchema.graphql");

// GraphQL: Schema
const SERVER = new ApolloServer({
  typeDefs: TYPEDEFS,
  resolvers: RESOLVERS,
  playground: {
    settings: {
      "editor.theme": "dark",
      introspection: true
    }
  }
});
// Exports
export default SERVER;
