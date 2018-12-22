const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://daniel:dd2345@ds141924.mlab.com:41924/gql-daniel");
mongoose.connection.once("open", () => {
  console.log("Connected to db.");
});

// bind express with graphql
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("now listening for requests on port 4000");
});
