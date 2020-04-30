import React, {useState} from 'react'
import './App.css'
import api from './services/api'
import BooksArea from './components/BooksArea'
import LoadingAnim from './components/LoadingAnim'

function App() {
  const [books, setBooks] = useState('')
  const [arrBooks, setArrBooks] = useState([])
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event){
    event.preventDefault()
    const response = await api.get(`/volumes?q=${books}`)
    setArrBooks(response.data.items)
    setLoading(true)
    document.getElementsByClassName('book-list')[0].style.display = 'none'
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Book Finder</h1>
        <div className="search-bar">
          <form onSubmit={handleSubmit}>
            <input id="text" type="text" value={books} spellCheck={false}
              onChange={event => {setBooks(event.target.value)}}
              placeholder="Book name, author, subject..."
              onFocus={event => event.target.placeholder = ""}
              onBlur={event => event.target.placeholder = "Book name, author, subject..."}
              autoComplete="off"
            />
            <button id="btn" type="submit">Find</button>
          </form>
        </div>
      </header>
      <div className="container">
        <LoadingAnim loading={loading} setLoading={setLoading}/>
        <BooksArea arrBooks={arrBooks}/>
      </div>
      <footer><p>Made by <a href="https://github.com/LeonardoDM" target="_blank" rel="noopener noreferrer">LeonardoDM</a></p></footer>
    </div>
  )
}

export default App