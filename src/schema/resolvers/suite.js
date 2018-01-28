const { Suite, Execution } = require('../../database/models');

module.exports = {
  Query: {
    suites: async () => {
      const res = await Suite.find();
      return res;
    },
  },

  Suite: {
    execution: async ({ execution }) => {
      const res = await Execution.findOne({ _id: execution });
      return res;
    },
  },
};
