import { Mutation } from "react-apollo";
import React from  'react';

import { DELETE_SONGS, GET_SONGS } from './../queries';
const DeleteSong = (props) => {
    return (
        <Mutation mutation={DELETE_SONGS}
        update={(cache, { data: { deleteSong }}) => {
            const { songs } = cache.readQuery({query: GET_SONGS});
            cache.writeQuery({
                query: GET_SONGS, 
                data: { songs: songs.filter(song => song.id !== props.id)}
            });
        }}>
         {(deleteSong, {data}) => (
                <i className="material-icons"
                    onClick={(e) => {
                        e.preventDefault();
                        deleteSong({variables: {ID: props.id}});
                        e.stopPropagation();
                        }}>delete</i>
        
        )}

        </Mutation>
    );
}

export default DeleteSong;
