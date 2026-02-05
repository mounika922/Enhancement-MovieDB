import './index.css'
import {Component} from 'react'
import MovieCard from '../MovieCard'

const API_KEY = '0bc45c754dfea8ea6a46e5b8f63e51ee'

class PopularMovies extends Component {
  state = {movies: [], page: 1}

  componentDidMount() {
    this.getPopularDetails()
  }

  getPopularDetails = async () => {
    const {page} = this.state
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    this.setState({movies: data.results})
  }

  render() {
    const {movies} = this.state
    return (
      <div>
        <h1>Popular</h1>
        <ul className="movies-container">
          {movies.map(movie => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default PopularMovies
