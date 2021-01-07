import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import 'SRC/style/global.js';
// import { setContext } from 'apollo-link-context';
// import { I18nextProvider } from 'react-i18next';
import { cache } from './cache';
import { ApolloClient, ApolloProvider } from '@apollo/client';
// import i18next from './i18n';
// import initialState from './store';

const history = createBrowserHistory();

const client = new ApolloClient({
  cache,
  headers: {
    authorization: localStorage.getItem('token') || '',
    'client-name': 'Space Explorer [web]',
    'client-version': '1.0.0'
  },
  // typeDefs,
  resolvers: {}
});

// ReactDOM.render(
//   // <ApolloProvider client={client}>
//   //   <I18nextProvider i18n={i18next}>
//   // <Router history={history}>
//   <App />,
//   // </Router>,
//   //   </I18nextProvider>
//   // </ApolloProvider>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router history={history}>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);
