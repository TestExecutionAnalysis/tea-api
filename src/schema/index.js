const { makeExecutableSchema } = require('graphql-tools');
// const resolvers = require('./resolvers');
// const typeDefs = require('./types');

const resolvers = require('./resolvers/execution');

const typeDefs = `
  scalar JSON

  type Execution {
    _id: ID!
    name: String!
    description: String
    status: String
    testApi: String
    executionType: String
    configuration: JSON
    exception: String
    createdAt: String
    updatedAt: String
  }

  type Query {
    Executions: [Execution]
  }
`;

module.exports = makeExecutableSchema({ typeDefs, resolvers });
