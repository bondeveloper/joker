const resolvers = {
    Query: {
        joke: ( _, args, { dataSources }) => dataSources.chuckNorrisAPI.getJoke(args),
        categories: (_, __, { dataSources }) => dataSources.chuckNorrisAPI.getCategories()
    }
};

module.exports = resolvers;