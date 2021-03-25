/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { client } from './src/client';
import './index.css'
import Navbar from './src/components/header';

export const wrapRootElement = ({ element }) => (
  <>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
  <ApolloProvider client={client}>
    <Navbar />
    {element}
  </ApolloProvider>
  </>
);