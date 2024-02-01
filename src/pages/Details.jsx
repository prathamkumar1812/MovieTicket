import React from 'react'
import { useData } from '../components/DataProvider';
import Modal from 'react-modal';
import MovieTicketForm from '../components/MovieTicketForm';
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
function Details() {
    const { movie } = useData();
    const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
    function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className='w-screen h-screen' >
      <div className=' mx-3 md:mx-5 lg:mx-10'>
        <div className='flex justify-between mt-5'>
          <div className='  mb-3'>
            <h1 className='text-2xl md:text-3xl lg:text-5xl my-3'>{movie.show.name
            }</h1>
            <ul className=' font-semibold text-gray-500 flex gap-3'>
              <li>{movie.show.premiered}</li>
              <li>{movie.show.runtime} min</li>
            </ul>
          </div>
          <div className="px-6 pt-4 pb-2 flex items-center ">
  
  </div>
          <ul className='flex gap-3 mt-5 my-2'>
            <div>
              <span className=' hidden md:block text-gray-400'>Vote Avg</span>
              <div className='flex gap-2 '>
                <svg xmlns="http://www.w3.org/2000/svg" className=' text-yellow-300' width="24" height="24" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path></svg>
                <li>

                  {movie.show.rating.average}</li>
              </div>
            </div>
            <div>
              <span className='hidden md:block text-gray-400'>Popularity</span>
              <div className='flex gap-2 '>
                <svg xmlns="http://www.w3.org/2000/svg" className='text-red-500' width="24" height="24" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8 0-1.4.4-2.8 1-3.9L8.4 12c.4.4 1 .4 1.4 0l1.4-1.5 2.4 2.6-1.4 1.4c-.3.3-.1.9.4.9h4.3c.3 0 .5-.2.5-.5v-4.3c0-.4-.5-.7-.9-.3L15 11.6l-3.1-3.3c-.4-.4-1-.4-1.4 0L9.2 9.8 6.3 6.4C7.7 4.9 9.7 4 12 4c4.4 0 8 3.6 8 8s-3.6 8-8 8z"></path></svg>
                <li>{movie.weight}</li>
              </div>
            </div>
  
  


          </ul>
        </div>
        <div className=' flex  gap-2 mb-5'>
          <img
            alt="Card background"
            className="object-cover h-[360px] rounded-xl transition ease-in-out duration-500  hover:brightness-75"
            src={movie.show.image && `${movie.show.image.original}`}
            width={270}
          />
        </div>
        <div>

          <div className=' flex  flex-wrap gap-2 md:gap-5 my-3 md:my-5'>{
            movie.show.genres?.map(( name ) => {
              return (<div key={name} className='border-blue-500 text-blue-500 border rounded-md px-4 py-2'>{name}</div>)
            })}
           
            </div>
           <div className='my-3 flex  items-end w-full justify-end'>
           <button onClick={openModal} className=" bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 mx-auto   rounded">
      Book Ticket
    </button>
           </div>

          <p className='mb-5 border p-5 md:p-3 border-primary rounded-md'>{movie.show.summary}</p>
        </div>
      </div>
      <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
       >
      <MovieTicketForm  closeModal={closeModal}/>
      </Modal>
    </div>
  )
}

export default Details