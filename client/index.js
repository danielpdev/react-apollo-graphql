import './style/style.css';
import { InMemoryCache } from 'apollo-cache-inmemory';

import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom'
const cache = new InMemoryCache({
  dataIdFromObject: object => {
    console.log(444, object) 
    object.id || null
  }
});

import App from './components/App';
const client = new ApolloClient({    
  cache
//   uri: `http://0.0.0.0:4000/graphql`
})

const Root = () => {
  return (
    <ApolloProvider client={client}>
    <BrowserRouter>
      <App/>
      </BrowserRouter>
    </ApolloProvider>
  );
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
