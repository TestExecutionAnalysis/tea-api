const { mergeResolvers } = require('merge-graphql-schemas');

const resolvers = [
  require('./common'),
  require('./execution'),
  require('./suite'),
  require('./testcase'),
  require('./teststep'),
  require('./exception'),
];

module.exports = mergeResolvers(resolvers);
