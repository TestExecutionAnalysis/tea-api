const { mergeResolvers } = require('merge-graphql-schemas');

const resolvers = [
  require('./execution'),
  require('./suite'),
  require('./testcase'),
  require('./teststep'),
];

module.exports = mergeResolvers(resolvers);
