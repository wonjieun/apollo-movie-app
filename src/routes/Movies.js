import { useQuery, gql } from '@apollo/client';

const MOVIES = gql`
  {
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
        <li key={movie.id}>- {movie.title}</li>
      ))}
    </ul>
  );
}
