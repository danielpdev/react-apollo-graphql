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
  }
}`;
export { GET_SONGS, ADD_SONG, DELETE_SONGS, GET_SONG};
