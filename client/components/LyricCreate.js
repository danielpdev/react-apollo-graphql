import React, { Component } from 'react';
import { ADD_LYRIC_TO_SONG, GET_LYRICS_FOR_SONG } from './../queries'
import { Mutation } from 'react-apollo';

class LyricCreate extends Component {
  constructor(props){
    super(props);
    this.state = { content: ''};
  }
  onSubmit(event) {
    event.preventDefault();
  }
  render() {
    return (
      <Mutation mutation={ADD_LYRIC_TO_SONG} 
        update={(cache, { data: { addLyricToSong }}) => {
            const  data = cache.readQuery({query: GET_LYRICS_FOR_SONG, variables: {
              id: this.props.id
            }});
            data.song.lyrics = addLyricToSong.lyrics;
            cache.writeQuery({
              query: GET_LYRICS_FOR_SONG, 
              variables: {
                id: this.props.id
              },
              data
          });
        }}>
       {(addLyricToSong, {data}) => (
             <form onSubmit={e => 
             {  e.preventDefault();
                addLyricToSong({variables: {songId: this.props.id, content: this.state.content}});
                this.setState({content: ''})
            }}>
              <label> Add a lyric </label>
              <input value={this.state.content} onChange={ev => this.setState({content: event.target.value})}/>

            </form>
        
        )}
          </Mutation>
      )
  }
}

export default LyricCreate;
