import React from 'react';
// import list from "../../src/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios';
import { useState,useEffect } from 'react';

function Freebook() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data.filter((data) => data.category === "Free")); // Correctly closing the string "Free"
      } catch (error) {
        console.log("Error fetching books", error);
      }
    };
  
    getBook(); // Invoking the async function
  }, []);
  
  // const filterData = list.filter((data) => data.category === "Free");
  // console.log(filterData);

  // Move settings object outside of the Responsive function
  var settings = {
    dots: true,
    // infinite: true, // Uncomment if you want infinite scrolling
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    // initialSlide: 0, // Adjusted to 0 for better initial view
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1 // Adjusted to 1 for better initial view on smaller screens
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div>
          <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsam rerum excepturi optio perferendis voluptatum nihil soluta explicabo voluptatibus inventore?</p>
        </div>
     
        <div>
          <Slider {...settings}>
            {book.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;
