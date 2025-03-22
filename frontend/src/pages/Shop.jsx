import React, { useEffect, useState } from 'react'
import BookCard from '../components/BookCard'
import axios from 'axios'

const fetchBookData = async () => {
  const res = await axios.get("http://localhost:5555/get-all-books");
  const data = res.data;
  return data;
}

const Shop = () => {
  const [data, setData] = useState([]);

  const assignData = async () => {
    const fetchedData = await fetchBookData();
    setData(fetchedData);
  }

  useEffect(() => {
    assignData();
  }, []);

  return (
    <div
      className='grid grid-cols-3 place-items-center my-11 space-y-4'
    >
      {data.map((book, index) => {
        return (
          <BookCard 
            key={index}
            title={book.title}
            author={book.author}
            pages={book.pages}
            imageUrl={book.imageUrl}
          />
        );
      })}
    </div>
  )
}

export default Shop