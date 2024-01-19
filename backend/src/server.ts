import express, { Application } from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import { ExpressContext } from 'apollo-server-express/dist/ApolloServer';
import resolvers from './resolvers/suppliersResolver';

// Criação da instância do Express
const app: Application = express();

// Definição do schema GraphQL usando o pacote gql do Apollo
export const typeDefs = gql`
  type Supplier {
    name: String
    logo: String
    state: String
    costPerKwh: Float
    minLimitKwh: Int
    numCustomers: Int
    averageRating: Float
  }

  type Query {
    getSuppliers(consumMonth: Int!): [Supplier]
  }
`;

// Rota para a raiz da aplicação
app.get('/', (req, res) => {
  res.send('Welcome to the Suppliers API!');
});


const server = new ApolloServer({
  typeDefs,
  resolvers,
});



const PORT = process.env.PORT || 4000;
app.listen(PORT, async () => {
  await server.start();
server.applyMiddleware({ app } as any);
  console.log(`GraphQL server running at http://localhost:${PORT}${server.graphqlPath}`);
});

module.exports = app
