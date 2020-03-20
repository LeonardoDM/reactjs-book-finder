import React, {useState} from 'react'
import './App.css'
import api from './services/api'

function App() {
  const [books, setBooks] = useState('')
  const [arrBooks, setArrBooks] = useState([])
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event){
    event.preventDefault()
    const book = books
    const response = await api.get(`/volumes?q=${book}`)
    setArrBooks(response.data.items)
    setLoading(true)
    document.getElementsByClassName('book-list')[0].style.display = 'none'
  }

  function BooksArea(){
    function Loading(){
      if (loading === true) {
        setTimeout(() => {
          document.getElementsByClassName('lds-ellipsis')[0].style.display = 'none'
          document.getElementsByClassName('book-list')[0].style.display = 'flex'
        }, 2000)
        return (<div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>)
      }
    }

    if(arrBooks.length > 0){ 
      return (
        <>
          {Loading()}
          <ul className="book-list">
            {arrBooks.map(book => (
              <div className="book" key={book.id}>
                <li>
                  <div className="book_title">
                    <h2><a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">{book.volumeInfo.title}</a></h2>
                  </div>
                  <div className="book_img_div">
                    {book.volumeInfo.imageLinks ? <img src={book.volumeInfo.imageLinks.thumbnail} alt="thumbnail" className="book_img" /> : <img src="https://islandpress.org/sites/default/files/400px%20x%20600px-r01BookNotPictured.jpg" alt="thumbnail" className="book_img" />}
                  </div>
                  <div className="book_desc">
                    <div>
                      <strong>Author:</strong> {book.volumeInfo.authors}
                    </div>
                    <div>
                      <strong>Publisher:</strong> {book.volumeInfo.publisher}
                    </div>
                    <div>
                      <strong>Published:</strong> {book.volumeInfo.publishedDate}
                    </div>
                  </div>
                </li>
              </div>
            ))}
          </ul>
        </>
      )
    }
    return false
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Book Finder</h1>
        <div className="search-bar">
          <form onSubmit={handleSubmit}>
            <input id="text" type="text" value={books}
              onChange={event => {
                setBooks(event.target.value)
                setLoading(false)
              }}
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
        <BooksArea />
      </div>
      <footer><p>Made by <a href="https://github.com/LeonardoDM" target="_blank" rel="noopener noreferrer">LeonardoDM</a></p></footer>
    </div>
  )
}

export default App