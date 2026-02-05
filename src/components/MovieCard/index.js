import {Link} from 'react-router-dom'

const MovieCard = ({movie}) => (
  <li className="movie-card">
    <img
      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      alt={movie.title}
      width="150"
    />
    <h4>{movie.title}</h4>
    <p> {movie.vote_average}</p>

    <Link to={`/movie/${movie.id}`}>
      <button type="button">View Details</button>
    </Link>
  </li>
)

export default MovieCard
