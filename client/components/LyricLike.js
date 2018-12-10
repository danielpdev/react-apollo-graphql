import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { LYRIC_LIKE, GET_LYRICS_FOR_SONG } from '../queries';

export default (props) => {
    return (
    <Mutation
        mutation={LYRIC_LIKE} 
        update={(cache, { data: {likeLyric}}) => {
            console.log(333, likeLyric)
            const  data = cache.readQuery({query: GET_LYRICS_FOR_SONG, variables: {
              id: props.songId
            }});
            data.song.lyrics.forEach(lyric => {
                if (lyric.id === props.id)
                    lyric.likes = likeLyric.likes;
            });
            console.log(555, data, props.songId);
        //     data.song.lyrics = addLyricToSong.lyrics;
        //     cache.writeQuery({
        //       query: GET_LYRICS_FOR_SONG, 
        //       variables: {
        //         id: props.id
        //       },
        //       data
        //   });
        }}
    >
    {(lyricLike, {data}) => {
        return (
        <i className="material-icons" onClick={e => {
            e.preventDefault();
            console.log(props.id, lyricLike);
            lyricLike({variables: {
            id: props.id
        }})}}>
            thumb_up
        </i>
        );
    }}
    </Mutation>
        );
};