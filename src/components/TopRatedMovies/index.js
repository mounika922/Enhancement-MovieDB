import {Component} from 'react'
import MovieCard from '../MovieCard'

const API_KEY = '0bc45c754dfea8ea6a46e5b8f63e51ee'

class TopRatedMovies extends Component {
  state = {movies: [], page: 1}

  componentDidMount() {
    this.getMovies()
  }

  nextPage = () => {
    this.setState(prev => ({page: prev.page + 1}), this.getMovies)
  }

  prevPage = () => {
    this.setState(prevState => {
      if (prevState.page === 1) {
        return null
      }
      return {page: prevState.page - 1}
    }, this.getMovies)
  }

  getMovies = async () => {
    const {page} = this.state
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`,
    )
    const data = await response.json()

    this.setState({movies: data.results})
  }

  render() {
    const {movies, page} = this.state

    return (
      <div>
        <h2>Top Rated Movies</h2>
        <ul className="movies-container">
          {movies.map(movie => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </ul>
        <div>
          <button type="button" onClick={this.prevPage}>
            Prev
          </button>
          <p> {page} </p>
          <button type="button" onClick={this.nextPage}>
            Next
          </button>
        </div>
      </div>
    )
  }
}

export default TopRatedMovies
