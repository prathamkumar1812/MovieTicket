//create a card component that will be used to display the movie details with image and title and a button at the bottom that view more details using tawilwind css give it proper styling like rouded corners and shadow and hover effect on the button and card also give it a margin and padding and width and height in react js
// add hover effect on card also



// Path: movieticket/src/components/Card.jsx
import React from 'react'
import { useData } from './DataProvider';
import { useNavigate } from 'react-router-dom';

function Card({movie}) {
    const {setMovie} = useData();
    const navigate = useNavigate();
  const  handlerview = () => {
        setMovie(movie);
        navigate('/detail');
 }
   
  return (
   
        <div className="bg-white shadow-lg md:w-[300px] w-[250px] rounded-lg overflow-hidden card mb-5 border border-gray-200 mx-auto pt-4 ">
  <img className=' mx-auto md:w-[250px] w-[200px] h-[300px] object-cover md:h-[340px] rounded-xl transition ease-in-out duration-500  hover:brightness-75' src={movie.show.image&&movie.show.image.original||"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9JD_sR76IDwEVu8hzJWIwr_9jDZZWKK5yYA&usqp=CAU"} alt="image"/>
  <div className="px-6 py-4 text-center">
    <div className="font-bold text-xl mb-2">{movie.show.name}</div>

    <p className="text-gray-700 text-base">
     {movie.show.premiered}
    </p>

  </div>
  <div className="px-6 pt-4 pb-2 flex items-center ">
    <button onClick={handlerview} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-auto rounded">
      View More
    </button>
  </div>
</div>
  
  )
}

export default Card

