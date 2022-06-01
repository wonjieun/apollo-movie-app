import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';

const MOVIES = gql`
  query getMovies {
    allMovies {
      id
      title
    }
  }
`;

export default function Movies() {
  const { data, loading, error } = useQuery(MOVIES);
  if (loading) {
    return <div>💬 Loading ...</div>;
  }
  if (error) {
    return <div>🚨 Error !</div>;
  }
  return (
    <ul>
      {data.allMovies.map((movie) => (
        <li key={movie.id}>
          - <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
}
