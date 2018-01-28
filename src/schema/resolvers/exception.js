const { Execution, Suite, Testcase, Teststep, Exception } = require('../../database/models');

module.exports = {
  Exception: {
    execution: async ({ execution }) => {
      const res = await Execution.findOne({ _id: execution });
      return res;
    },

    suite: async ({ suite }) => {
      const res = await Suite.findOne({ _id: suite });
      return res;
    },

    testcase: async ({ testcase }) => {
      const res = await Testcase.findOne({ _id: testcase });
      return res;
    },

    teststep: async ({ teststep }) => {
      const res = await Teststep.findOne({ _id: teststep });
      return res;
    },
  },

  Query: {
    exceptions: async () => {
      const res = await Exception.find();
      return res;
    },
  },

  Mutation: {
    addExceptionToExecution: async (root, args) => {
      const res = await Exception.create(args.input);
      return res;
    },

    addExceptionToSuite: async (root, args) => {
      const res = await Exception.create(args.input);
      return res;
    },

    addExceptionToTestcase: async (root, args) => {
      const res = await Exception.create(args.input);
      return res;
    },

    addExceptionToTeststep: async (root, args) => {
      const res = await Exception.create(args.input);
      return res;
    },
  },
};
