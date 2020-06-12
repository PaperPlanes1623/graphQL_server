const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = require('graphql');

//hardcode data
const customers = [
  { id: '1', name: 'John Doe', email: 'jdoe@gmail.com', age: 35 },
  { id: '2', name: 'Bob Cobb', email: 'bcobb@gmail.com', age: 16 },
  { id: '3', name: 'Dylan Taft', email: 'dtaft@gmail.com', age: 29 }
]

//customer type
const CustomerType = new GraphQLObjectType({
  name: 'Customer',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    age: { type: GraphQLInt }
  })
})

//root query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  customer: {
    type: CustomerType,
    args: {
      id: { GraphQLString }
    },
    resolve(parentValue, args) {
      for (let i = 0; i < customers.length; i++) {
        if (customers[i].id == args.id) {
          return customers[i];
        }
      }
    }
  }
});

module.exports = new GraphQLSchema({

});