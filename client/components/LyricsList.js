import React, { Component } from 'react';
import { Query } from "react-apollo";
import { Link,  } from "react-router-dom";

import { GET_LYRICS_FOR_SONG } from './../queries';
import LyricDelete from './LyricDelete';
const LyricsList = (props) => (
  <Query query={GET_LYRICS_FOR_SONG} variables={{id: props.id}} >
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;
      const { song: { lyrics } } = data;

      return (
        <div>
          <ul className="collection">
          
             {lyrics && lyrics.map(lyric => (<li className="collection-item" onClick={(e) =>
      {
        e.preventDefault();
      }
          } key={lyric.id}>
              {lyric.content}
              <LyricDelete id={lyric.id}/>
             </li>)) } 
          </ul>
        </div>
      );
    }
}
  </Query>
);

export default LyricsList;