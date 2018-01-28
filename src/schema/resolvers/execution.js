const { Execution, Suite } = require('../../database/models');
const GraphQLJSON = require('graphql-type-json');

module.exports = {
  JSON: GraphQLJSON,

  Query: {
    executions: async () => {
      const res = await Execution.find();
      return res;
    },
  },

  Execution: {
    suites: async ({ executionId }) => {
      const res = await Suite.find({ execution: executionId });
      return res;
    },
  },
};
