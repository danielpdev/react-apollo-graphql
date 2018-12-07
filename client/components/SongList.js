import React, { Component } from 'react';
import { Query } from "react-apollo";
import { Link,  } from "react-router-dom";

import { GET_SONGS } from './../queries';
import SongDelete from './SongDelete';
console.log(SongDelete);
const SongList = (props) => (
  <Query query={GET_SONGS} >
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;
      
      const { songs } = data;

      return (
        <div>
          <ul className="collection">
          
             {songs && songs.map(song => (<li className="collection-item" onClick={(e) =>
      {
        e.preventDefault();
        props.history.push(`/song/${song.id}`);
      }
} key={song.id}>{song.title}
             <SongDelete id={song.id}/>
             </li>)) } 
          </ul>
          <Link to="/songs/new"
            className="btn-floating btn-large red right"
          >
        <i className="material-icons">add</i>
          </Link>
        </div>
      );
    }
}
  </Query>
);

export default SongList;