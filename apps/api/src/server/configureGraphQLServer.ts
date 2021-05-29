import { ApolloServer, AuthenticationError } from 'apollo-server-express';
import { baseResolvers, baseSchema, dataSources, generatedResolvers, generatedSchema } from '../graphql';
import { customResolvers, customSchema } from '../graphql/custom/operations';

import { Express } from 'express';
import { getUser } from '../utils';
import { plugins } from './plugins';

export const configureGraphQLServer = async (app: Express): Promise<void> => {
  const typeDefs = [baseSchema, ...generatedSchema, ...customSchema];
  const resolvers = [baseResolvers, ...generatedResolvers, ...customResolvers];

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources,
    context: ({ req }) => {
      const { headers = {} } = req;
      // Get the user token from the headers.
      const { token = '', ...restOfHeaders } = headers;

      // try to retrieve a user with the token
      const user = getUser(token);

      if (!user) throw new AuthenticationError('you must be logged in');

      // add the user to the context
      return { user, token, headers: restOfHeaders };
    },
    plugins,
  });

  apolloServer.applyMiddleware({ app, path: '/graphql' });
};
