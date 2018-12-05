import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongList extends React.Component{
  render() {
    console.log(this.props);
    const { songs } = this.props.data;
    return (<div>
            <h1>Lyrics</h1>
            {songs && songs.map(song => (<p key={song.id}>{song.title}</p>)) } 
            
            </div>);
  }
}

const query = gql`
{
  songs{
    id
    title
  }
}
`;

export default graphql(query)(SongList);