import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import supertest from 'supertest';
import { startServer } from '../server';
import resolvers from '../resolvers/suppliersResolver';

const app = express();

const typeDefs = gql`
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

let server: ApolloServer;

beforeAll(async () => {
  server = await startServer();  // Remova o argumento 'app' daqui
});

afterAll(async () => {
  // Fechar o servidor após todos os testes
  await server.stop();
});

describe('GraphQL API', () => {
  test('Should return welcome message for root endpoint', async () => {
    const response = await supertest(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toContain('Welcome to the Suppliers API!');
  });

  test('Should get suppliers based on consumption month', async () => {
    const response = await supertest(app)
      .post('/graphql')
      .send({
        query: `
          query {
            getSuppliers(consumMonth: 6000) {
              name
            }
          }
        `,
      });

    expect(response.status).toBe(200);
    expect(response.body.data.getSuppliers).toBeDefined();
    expect(response.body.data.getSuppliers).toHaveLength(2);
    expect(response.body.data.getSuppliers[0].name).toBe('Supplier A');
    expect(response.body.data.getSuppliers[1].name).toBe('Supplier B');
  });

  // Testes para a função isSupplier
  describe('isSupplier function', () => {
    test('Should return true for a valid supplier object', () => {
      const validSupplier = {
        name: 'Supplier A',
        logo: 'logo_a.png',
        state: 'SP',
        costPerKwh: 0.20,
        minLimitKwh: 5000,
        numCustomers: 1000,
        averageRating: 4.5,
      };

      const result = resolvers.Query.getSuppliers(null, { consumMonth: 6000 });
      expect(result).toEqual([validSupplier]);
    });

    test('Should return false for an invalid supplier object', () => {
      const invalidSupplier = {
        name: 'Invalid Supplier',
        // Missing required fields
      };

      const result = resolvers.Query.getSuppliers(null, { consumMonth: 6000 });
      expect(result).toEqual([]);
    });
  });
});
