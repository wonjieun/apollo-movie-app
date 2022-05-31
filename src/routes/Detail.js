import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';

const GET_MOVIE = gql`
  query ($movieId: ID!) {
    movie(id: $movieId) {
      id
      title
    }
  }
`;

export default function Detail() {
  const { id } = useParams();
  const { data, loading } = useQuery(GET_MOVIE, {
    variables: {
      movieId: id,
    },
  });
  if (loading) {
    return <div>💬 Loading ...</div>;
  }
  return <div>{data.movie.title}</div>;
}
