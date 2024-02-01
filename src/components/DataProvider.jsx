// DataContext.js
import { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState({});

  return (
    <DataContext.Provider value={{ movie,setMovie,setMovies,movies }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
