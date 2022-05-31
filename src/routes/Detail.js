import { useQuery, gql } from '@apollo/client';

const GET_MOVIE = gql`
  query ($movieId: ID!) {
    movie(id: $movieId) {
      id
      title
    }
  }
`;

export default function Detail() {
  const { data } = useQuery(GET_MOVIE, {
    variables: {
      movieId: '42445',
    },
  });
  return <div>Movie Detail</div>;
}
