require('dotenv').config();
const express = require('express');
const app = express();
const { ApolloServer } = require('apollo-server-express');
// const { ApolloServer } = require('apollo-server');
const typeDefs = require('./server/schema');
const resolvers = require('./server/resolvers');
const ChuckNorrisAPI = require('./server/datasource/chucknorris');



const server = new ApolloServer({ typeDefs, resolvers,
        dataSources: () => ({
            chuckNorrisAPI: new ChuckNorrisAPI(),
        })
    });

const PORT = process.env.PORT || 8080

server.applyMiddleware({ app });

if ( process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
    app.get('*', (req, res ) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
);