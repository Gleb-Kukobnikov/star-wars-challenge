import 'reset-css';
import React from 'react';
import ReactDOM from 'react-dom';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
} from "@apollo/client";
import {BrowserRouter} from "react-router-dom";
import App from './App';
import {APOLLO_CLIENT_URL} from "./constants";

const client = new ApolloClient({
    uri: APOLLO_CLIENT_URL,
    cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <ApolloProvider client={client}>
              <App />
          </ApolloProvider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
