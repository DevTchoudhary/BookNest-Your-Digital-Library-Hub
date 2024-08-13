import React, { useEffect, useState } from 'react'
import Cards from './Cards'
// import list from "../list.json"
import { Link } from 'react-router-dom'
import axios from "axios";
import { getBook } from '../../../../Backend/controller/booksController';

function Course() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data); 
      } catch (error) {
        console.log("Error fetching books", error); 
      }
    };

    getBook(); // Invoking the async function
  }, []);
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-32 items-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl'>
            We're delighted to have you <span className='text-pink-500'>Here!</span>
          </h1>
          <p className='mt-10'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla suscipit magni excepturi vel autem libero maxime rem eaque,
            totam doloremque? Quos reiciendis cupiditate, 
            laboriosam nostrum beatae voluptate voluptates.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi ipsa quasi dolor nisi accusamus perferendis consectetur ad quo.
          </p>
        <Link to="/">
        <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-500 hover:px-8 hover:py-2'>
            Back
          </button>
        </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
          {
            book.map((item) => (
              <Cards key={item.id} item={item}/>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Course
