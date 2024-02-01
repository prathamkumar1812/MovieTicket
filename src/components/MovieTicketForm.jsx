// MovieTicketForm.js
import React, { useState } from 'react';
import { useData } from './DataProvider';

const MovieTicketForm = ({closeModal}) => {
    const {movie} = useData();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    numberOfTickets: 1,
    movie: movie.show.name,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form submitted:', formData);
    localStorage.setItem(movie.show.name,JSON.stringify(formData));
    closeModal();
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md relative">
      <button
        onClick={closeModal}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <h2 className="text-2xl font-bold mb-4">Movie Ticket Booking</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600 text-sm font-semibold mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 text-sm font-semibold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="movie" className="block text-gray-600 text-sm font-semibold mb-2">
            Movie:
          </label>
          <input
            type="text"
            id="movie"
            readOnly={true}
            name="movie"
            value={formData.movie}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter movie name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="numberOfTickets" className="block text-gray-600 text-sm font-semibold mb-2">
            Number of Tickets:
          </label>
          <input
            type="number"
            id="numberOfTickets"
            name="numberOfTickets"
            value={formData.numberOfTickets}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            min="1"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 mx-auto text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        >
          Book Tickets
        </button>
      </form>
    </div>
  );
};

export default MovieTicketForm;
