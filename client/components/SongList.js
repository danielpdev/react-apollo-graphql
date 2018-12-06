import React, { Component } from 'react';
import { Query } from "react-apollo";

import { GET_SONGS } from './../queries';

const SongList = ({ onSongSelected }) => (
  <Query query={GET_SONGS} >
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;
      
      const { songs } = data;

      return (
        <ul className="collection">
           {songs && songs.map(song => (<li className="collection-item" key={song.id}>{song.title}</li>)) } 
        </ul>
      );
    }
}
  </Query>
);

export default SongList;