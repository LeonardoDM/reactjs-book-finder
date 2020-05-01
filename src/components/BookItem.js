import React from 'react'

export default function BookItem({book}){
	return (
		<div className="book">
      <li>
        <div className="book_title">
          <h2><a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">{book.volumeInfo.title}</a></h2>
        </div>
        <div className="book_img_div">
          {book.volumeInfo.imageLinks ?
            <img src={book.volumeInfo.imageLinks.thumbnail} alt="thumbnail" className="book_img" /> :
            <img src="https://books.google.com.br/googlebooks/images/no_cover_thumb.gif" alt="No book cover available" className="book_img" />
          }
        </div>
        <div className="book_desc">
          <div>
            <strong>Author:</strong> {book.volumeInfo.authors ? book.volumeInfo.authors : 'n/a'}
          </div>
          <div>
            <strong>Publisher:</strong> {book.volumeInfo.publisher ? book.volumeInfo.publisher : 'n/a'}
          </div>
          <div>
            <strong>Published:</strong> {book.volumeInfo.publishedDate ? book.volumeInfo.publishedDate : 'n/a'}
          </div>
        </div>
      </li>
    </div>
	)
}