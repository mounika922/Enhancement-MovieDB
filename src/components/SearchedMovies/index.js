import {Component} from 'react'
import MovieCard from '../MovieCard'

const API_KEY = '0bc45c754dfea8ea6a46e5b8f63e51ee'

class SearchedMovies extends Component {
  state = {movies: []}

  componentDidMount() {
    this.getSearchMovies()
  }

  getSearchMovies = async () => {
    const {location} = this.props
    const params = new URLSearchParams(location.search)
    const query = params.get('query')

    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`,
    )
    const data = await response.json()

    this.setState({movies: data.results})
  }

  render() {
    const {movies} = this.state

    return (
      <div>
        <h2>Search Results</h2>
        <ul className="moveis-container">
          {movies.map(movie => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default SearchedMovies
