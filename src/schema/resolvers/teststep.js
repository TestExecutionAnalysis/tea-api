const { Teststep, Testcase } = require('../../database/models');

module.exports = {
  Teststep: {
    testcase: async ({ testcase }) => {
      const res = await Testcase.findOne({ _id: testcase });
      return res;
    },
  },

  Query: {
    teststeps: async () => {
      const res = await Teststep.find();
      return res;
    },
  },

  Mutation: {
    createTeststep: async (root, args) => {
      const res = await Teststep.create(args.input);
      return res;
    },

    updateTeststep: async (root, args) => {
      await Teststep.update({ _id: args.id }, args.input);
      const res = await Teststep.findOne({ _id: args.id });
      return res;
    },
  },
};
