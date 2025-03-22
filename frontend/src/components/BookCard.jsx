import React from 'react'

const BookCard = ({ imageUrl, title, description, author, publishedDate, publisher, pages }) => {
  return (
    <div
      className='flex flex-col items-center border p-3.5 border-zinc-400 rounded-xl'
    >
      <img src={imageUrl} alt="books" className='w-48 h-48' />
      <h1 className='w-full'>Book Name: {title}</h1>
      <h2>Book Description: {description}</h2>
      <p>Author: {author}</p>
      <p>Date of Publication: {publishedDate}</p>
      <p>Publisher: {publisher}</p>
      <p>No. of Pages: {pages}</p>
      <button
        className='bg-amber-300 p-3 m-2 rounded-xl cursor-pointer'
      >
        Download E-Book
      </button>
    </div>
  )
}

export default BookCard