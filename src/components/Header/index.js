import './index.css'
import {Link, useHistory} from 'react-router-dom'
import {useState} from 'react'

const Home = () => {
  const [searchValue, setSearch] = useState('')
  const history = useHistory()

  const onChangeSearch = event => setSearch(event.target.value)
  const onSearchClick = () => {
    if (searchValue.trim()) {
      history.push(`/search?query=${searchValue}`)
    }
  }

  return (
    <nav className="head-container">
      <h1>MovieDB</h1>
      <div>
        <input
          type="text"
          placeholder="search"
          value={searchValue}
          onChange={onChangeSearch}
        />
        <button type="button" onClick={onSearchClick}>
          search
        </button>
      </div>
      <ul className="list-container">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/top-rated">Top Rated</Link>
        </li>
        <li>
          <Link to="/upcoming">UpComing</Link>
        </li>
      </ul>
    </nav>
  )
}
export default Home
