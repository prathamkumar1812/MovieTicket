import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { useData } from "../components/DataProvider";
import Loader from "../components/Loader";

function Home() {
  const { movies, setMovies } = useData();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <div className="w-full my-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {movies?.map((movie) => (
          <Card key={movie.show.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
