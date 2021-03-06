const { gql } = require('apollo-server');

const typeDefs = gql`
    type Joke {
        url: String
        value: String!,
        categories: [ String ],
        icon_url: String
    },

    type Query {
        joke(category: String): Joke,
        categories: [ String ],

    }
`;

module.exports = typeDefs;