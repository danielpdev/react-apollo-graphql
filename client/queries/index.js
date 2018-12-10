import gql from 'graphql-tag';

const ADD_SONG = gql`
mutation AddSong($title: String!) {
  addSong(title: $title) {
    id
    title
  }
}
`;

const GET_SONGS = gql`
{
  songs{
    id
    title
  }
}
`;

const DELETE_SONGS = gql`
  mutation DeleteSong($ID: ID){
     deleteSong(id: $ID){
       id
     }
 }
`;

const GET_SONG = gql`
  query Song($id: ID!){
    song(id: $id){
    title
    id
  }
}`;

const ADD_LYRIC_TO_SONG = gql`
mutation AddLyricToSong($content: String, $songId: ID){
  addLyricToSong(content:$content, songId: $songId){
    lyrics {
      content
      likes
      id
    }
  }
}
`;
const GET_LYRICS_FOR_SONG = gql`
query GetLyrics($id: ID!){
  song(id: $id){
    id
    lyrics {
      id
      content
      likes
    }
  }
}
`;

const LYRIC_LIKE = gql`
mutation LyricLike($id:ID){
  likeLyric(id:$id)
  {
    id
    likes
  }
}
`;
export { GET_SONGS, ADD_SONG, DELETE_SONGS, GET_SONG, ADD_LYRIC_TO_SONG, GET_LYRICS_FOR_SONG, LYRIC_LIKE};
