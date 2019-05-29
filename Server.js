// Imports: Express
import express from "express";
const APP = express();

// Imports: GraphQL
import SERVER from "./graphql/Schema";

// Middleware: GraphQL
SERVER.applyMiddleware({
  app: APP
});

// Express: Port
const PORT = process.env.PORT || 9000;

// Express: Listener
APP.listen({ port: PORT }, () => {
  if (PORT==9000){
    console.log(`http://localhost:${PORT}/graphql`);

  }
  console.log(`Server started on port: ${PORT}`);
});
export default APP;
