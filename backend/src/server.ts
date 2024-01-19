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

// Criação e inicialização da instância do ApolloServer
export async function startServer(): Promise<ApolloServer<ExpressContext>> {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();
  server.applyMiddleware({ app } as any);

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`GraphQL server running at http://localhost:${PORT}${server.graphqlPath}`);
  });

  return server;
}

// Inicia o servidor
startServer();
