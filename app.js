require('dotenv').config();
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./server/schema');
const resolvers = require('./server/resolvers');
const ChuckNorrisAPI = require('./server/datasource/chucknorris');


const server = new ApolloServer({ typeDefs, resolvers,
        dataSources: () => ({
            chuckNorrisAPI: new ChuckNorrisAPI(),
        })
    });
console.log(process.env.PORT);
const PORT = process.env.PORT || 9000
server.listen({ port: PORT })
        .then( data => console.log(`Server started on port ${ data.port }`));