import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Booking = () => {
    const [books, setBooks] = useState([]);
    useEffect(()=>{
        fetch("https://book-now-server-imoncoc.vercel.app/booking")
          .then((res) => res.json())
          .then((data) => {
            setBooks(data);
          })
          .catch((error) => {
            console.log(error.message);
          });
    }, [])
    return (
        <div className='container' >
            <div className="row">
                {
                    books && books.map((book) => <Book key={book.id} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Booking;