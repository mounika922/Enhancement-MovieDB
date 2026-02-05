import {Component} from 'react'
import MovieCard from '../MovieCard'

const API_KEY = '0bc45c754dfea8ea6a46e5b8f63e51ee'

class TopRatedMovies extends Component {
  state = {movies: []}

  componentDidMount() {
    this.getMovies()
  }

  getMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    )
    const data = await response.json()

    this.setState({movies: data.results})
  }

  render() {
    const {movies} = this.state

    return (
      <div>
        <h2>Top Rated Movies</h2>
        <ul className="moveis-container">
          {movies.map(movie => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default TopRatedMovies
