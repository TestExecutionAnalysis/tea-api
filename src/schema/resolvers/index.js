const { mergeResolvers } = require('merge-graphql-schemas');

const resolvers = [
  require('./execution'),
  require('./suite'),
];

module.exports = mergeResolvers(resolvers);
