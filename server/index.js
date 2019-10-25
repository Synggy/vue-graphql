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
    getAge(name: String!): User
  }

  type User {
    name: String
    age: Int
  }
`;

let resolvers = {
  Query: {
    getAge: function(_, args) {
      let user = data.find(x => x.name === args.name)
      return user
    }
  }
};

let server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(
  ({ url }) => console.log(`GraphQL Server ready at ${ url }`)
);