let { ApolloServer, gql } = require('apollo-server');

let data = [
  { name: 'evan', age: 12},
  { name: 'sam', age: 21},
  { name: 'ben', age: 52}
]

let typeDefs = gql`
  type Query {
    """
    根据名字查询年龄
    """
    person(name: String): User
  }

  type User {
    name: String
    age: Int
  }
`;
let person = (_, { name }) => data.find(x => x.name === name);
let resolvers = {
  Query: {
    person
  }
};

let server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(
  ({ url }) => console.log(`GraphQL Server ready at ${ url }`)
);