const { Testcase, Suite, Teststep, Exception } = require('../../database/models');

module.exports = {
  Testcase: {
    suite: async ({ suite }) => {
      const res = await Suite.findOne({ _id: suite });
      return res;
    },

    teststeps: async ({ _id }) => {
      const res = await Teststep.find({ testcase: _id });
      return res;
    },

    exceptions: async ({ _id }) => {
      const res = await Exception.find({ execution: _id });
      return res;
    },
  },

  Query: {
    testcases: async () => {
      const res = await Testcase.find();
      return res;
    },
  },

  Mutation: {
    createTestcase: async (root, args) => {
      const res = await Testcase.create(args.input);
      return res;
    },

    updateTestcase: async (root, args) => {
      await Testcase.update({ _id: args.id }, args.input);
      const res = await Testcase.findOne({ _id: args.id });
      return res;
    },
  },
};
