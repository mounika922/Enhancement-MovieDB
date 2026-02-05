import {Component} from 'react'

const API_KEY = '0bc45c754dfea8ea6a46e5b8f63e51ee'

class SingleMovieDetails extends Component {
  state = {movie: {}}

  componentDidMount() {
    this.getMovieDetails()
  }

  getMovieDetails = async () => {
    const {match} = this.props
    const {id} = match.params

    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`,
    )
    const data = await response.json()

    this.setState({movie: data})
  }

  render() {
    const {movie} = this.state

    return (
      <div>
        <h2>{movie.title}</h2>

        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width="200"
        />

        <p>Rating: {movie.vote_average}</p>
        <p>Release Date: {movie.release_date}</p>
        <p>{movie.overview}</p>
      </div>
    )
  }
}

export default SingleMovieDetails
