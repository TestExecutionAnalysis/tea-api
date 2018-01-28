const { mergeResolvers } = require('merge-graphql-schemas');

const resolvers = [
  require('./execution'),
  require('./suite'),
  require('./testcase'),
];

module.exports = mergeResolvers(resolvers);
