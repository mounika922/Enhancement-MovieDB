import {Component} from 'react'
import MovieCard from '../MovieCard'

const API_KEY = '0bc45c754dfea8ea6a46e5b8f63e51ee'

class UpcomingMovies extends Component {
  state = {movies: [], page: 1}

  componentDidMount() {
    this.getUpcomingMovies()
  }

  getUpcomingMovies = async () => {
    const {page} = this.state
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`,
    )
    const data = await response.json()

    this.setState({movies: data.results})
  }

  nextPage = () => {
    this.setState(
      prevState => ({page: prevState.page + 1}),
      this.getUpcomingMovies,
    )
  }

  prevPage = () => {
    const {page} = this.state
    if (page > 1) {
      this.setState(
        prevState => ({page: prevState.page - 1}),
        this.getUpcomingMovies,
      )
    }
  }

  render() {
    const {movies, page} = this.state

    return (
      <div>
        <h1>Upcoming</h1>
        <ul className="movies-container">
          {movies.map(movie => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </ul>
        <div className="pagination">
          <button type="button" onClick={this.prevPage} disabled={page === 1}>
            Prev
          </button>

          <p>{page}</p>

          <button type="button" onClick={this.nextPage}>
            Next
          </button>
        </div>
      </div>
    )
  }
}

export default UpcomingMovies
