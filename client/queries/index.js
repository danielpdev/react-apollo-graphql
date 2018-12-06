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
export { GET_SONGS, ADD_SONG};
