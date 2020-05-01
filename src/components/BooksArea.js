import React, {memo} from 'react'
import BookItem from './BookItem'

function BooksArea({arrBooks}){
    if(arrBooks.length > 0){ 
      return (
        <ul className="book-list">
          {arrBooks.map(book => <BookItem key={book.id} book={book} />)}
        </ul> 
      )
    }
    return null
}

export default memo(BooksArea)