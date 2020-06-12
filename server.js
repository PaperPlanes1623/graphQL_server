const express = require('express');
const expressGraphQl = require('express-graphql');
const schema = require('./schema.js');

const app = express();

app.use('/graphql', expressGraphQl({
  schema: schema,
  graphiql: true
}))

app.listen(3000, () => {
  console.log('server running on port 3000');
})