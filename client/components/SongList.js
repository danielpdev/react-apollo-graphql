import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from "react-apollo";

const GET_SONGS = gql`
{
  songs{
    id
    title
  }
}
`;

const SongList = ({ onSongSelected }) => (
  <Query query={GET_SONGS}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;
      
      const { songs } = data;

      return (
        <div>
            <h1>Lyrics</h1>
            {songs && songs.map(song => (<p key={song.id}>{song.title}</p>)) } 
        </div>
      );
    }
}
  </Query>
);

export default SongList;