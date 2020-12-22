import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { setContext } from 'apollo-link-context';
import { I18nextProvider } from 'react-i18next';
import { cache } from './cache';
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  ApolloLink,
  concat,
  from
} from '@apollo/client';
// import { ApolloProvider } from "@apollo/react-hooks";
import i18next from './i18n';
import initialState from './store';

const history = createBrowserHistory();

const httpLink = createHttpLink({
  uri: `http://localhost:4000\graphql`
});

const authLink = setContext(async () => {
  // get the authentication token from local storage if it exists
  const token = await localStorage.getItem('token');
  const refreshToken = await localStorage.getItem('refreshToken');
  // return the headers to the context so httpLink can read them
  if (token || refreshToken) {
    return {
      headers: {
        'x-token': token || '',
        'x-refresh-token': refreshToken || ''
      }
    };
  }
});

const client = new ApolloClient({
  link: concat(authLink, httpLink),
  cache
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <I18nextProvider i18n={i18next}>
      <Router history={history}>
        <App />
      </Router>
    </I18nextProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
