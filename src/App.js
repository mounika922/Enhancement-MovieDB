import './App.css'
import {Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import PopularMovies from './components/PopularMovies'
import TopRatedMovies from './components/TopRatedMovies'
import UpcomingMovies from './components/UpcomingMovies'
import SingleMovieDetails from './components/SingleMovieDetails'
import SearchedMovies from './components/SearchedMovies'

// write your code here
const App = () => (
  <div>
    <Header />

    <Switch>
      <Route exact path="/" component={PopularMovies} />
      <Route path="/top-rated" component={TopRatedMovies} />
      <Route path="/upcoming" component={UpcomingMovies} />
      <Route path="/movie/:id" component={SingleMovieDetails} />
      <Route path="/search" component={SearchedMovies} />
    </Switch>
  </div>
)

export default App
