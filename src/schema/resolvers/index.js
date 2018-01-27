const { mergeResolvers } = require('merge-graphql-schemas');

const resolvers = [
  require('./execution'),
];

module.exports = mergeResolvers(resolvers);
