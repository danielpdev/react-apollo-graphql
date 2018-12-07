import React from 'react';
import { Query } from 'react-apollo';
import { GET_SONG } from '../queries';

export default ({match: {params: { id }}}) => {
    console.log("ID ", id, id)
    return (
        <Query query={GET_SONG} variables={{id}}>
         {({ loading, error, data : { song } }) => {
            if (loading) return null;
            if (error) return `Error!: ${error}`;

            return (
                <div className="row">
                  <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                      <span className="card-title">{song.title}</span>
                      I am convenient because I require little markup to use effectively
                    </div>
                    <div className="card-action">
                      <a href="#">This is a link</a>
                      <a href="#">This is a link</a>
                    </div>
                </div>
              </div>                );
            }}
        </Query>
    );
};