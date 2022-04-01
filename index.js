import { ApolloServer } from 'apollo-server';
import typeDefs from './schema.js';
import db from './db/index.js';
import resolversIndex from './resolvers/index.js';

const resolvers = resolversIndex;
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
        products: db.products,
        categories: db.categories,
        reviews: db.reviews
    }
});

server.listen({ port: 5000 });