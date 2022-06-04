import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';

const GET_MOVIE = gql`
  query getMovie($movieId: ID!) {
    movie(id: $movieId) {
      id
      title
      genres
      summary
      isLiked @client
    }
  }
`;

export default function Detail() {
  const { id } = useParams();
  const {
    data,
    loading,
    error,
    client: { cache },
  } = useQuery(GET_MOVIE, {
    variables: {
      movieId: id,
    },
  });

  if (loading) {
    return <h1>💬 Loading ...</h1>;
  }
  if (error) {
    return <h1>🚨 Error !</h1>;
  }
  return (
    <main>
      <h1>{data.movie.title}</h1>
      {data.movie.genres.map((genre, index) => (
        <span key={index}>{genre}</span>
      ))}
      <p>{data.movie.summary}</p>
      <button>{data.movie.isLiked ? '♥︎' : '♡'}</button>
    </main>
  );
}
