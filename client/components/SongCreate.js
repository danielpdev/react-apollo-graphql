import { Mutation } from "react-apollo";
import React from  'react';

import { ADD_SONG, GET_SONGS } from './../queries';

const AddSong = () => {
    let input; 
    return (
        <Mutation mutation={ADD_SONG}
        update={(cache, { data: {addSong }}) => {
            const { songs } = cache.readQuery({query: GET_SONGS});
            cache.writeQuery({
                query: GET_SONGS, 
                data: { songs: songs.concat([addSong])}
            });
        }}>
        {(addSong, {data}) => (
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    addSong({variables: {title: input.value}});
                    input.value = '';
                    }
                }>
                <input ref={node=>input = node}/>
                <button type="submit">Create Song</button>
                </form>
            </div>
        )}
        </Mutation>
    );
}

export default AddSong;
