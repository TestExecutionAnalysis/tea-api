const { Suite, Execution, Testcase, Exception } = require('../../database/models');

module.exports = {
  Suite: {
    execution: async ({ execution }) => {
      const res = await Execution.findOne({ _id: execution });
      return res;
    },

    testcases: async ({ _id }) => {
      const res = await Testcase.find({ suite: _id });
      return res;
    },

    exceptions: async ({ _id }) => {
      const res = await Exception.find({ execution: _id });
      return res;
    },
  },

  Query: {
    suites: async () => {
      const res = await Suite.find();
      return res;
    },
  },

  Mutation: {
    createSuite: async (root, args) => {
      const res = await Suite.create(args.input);
      return res;
    },

    updateSuite: async (root, args) => {
      await Suite.update({ _id: args.id }, args.input);
      const res = await Suite.findOne({ _id: args.id });
      return res;
    },
  },
};
