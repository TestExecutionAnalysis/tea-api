const { Suite, Execution } = require('../../database/models');

module.exports = {
  Suite: {
    execution: async ({ execution }) => {
      const res = await Execution.findOne({ _id: execution });
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
