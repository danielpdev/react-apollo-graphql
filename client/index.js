import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-boost";
  
import { ApolloProvider } from 'react-apollo';
import SongList from './components/SongList';
const client = new ApolloClient({})
console.log(SongList)
const Root = () => {
  return (
    <ApolloProvider client={client}>
      <SongList />
    </ApolloProvider>
  );
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
