import './style/style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom'

import App from './components/App';
const client = new ApolloClient({    
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
