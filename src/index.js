import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { ApolloProvider } from '@apollo/client';
import client from './apollo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
