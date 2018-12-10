import React from 'react';
import { Query } from 'react-apollo';
import { GET_SONG } from '../queries';
import LyricCreate from './LyricCreate';
import SongDelete from './SongDelete';
import LyricsList from './LyricsList';
export default (props) => {
  const {match: {params: { id }}} = props;
  const { history } = props;
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
                    </div>
                    <div className="card-action">
                      <SongDelete id={song.id} onDelete={()=>history.push('/')}/>
                    </div>
                </div>
                <LyricsList id={song.id}/>
                <LyricCreate id={song.id}/>
              </div>                
            );
            }}
        </Query>
    );
};