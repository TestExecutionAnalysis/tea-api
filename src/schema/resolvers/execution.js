const { Execution } = require('../../database/models');
const GraphQLJSON = require('graphql-type-json');

module.exports = {
  JSON: GraphQLJSON,

  Query: {
    Executions: async () => {
      const res = await Execution.find();
      return res;
    },
  },
};
