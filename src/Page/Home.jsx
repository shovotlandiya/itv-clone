import React from "react";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { getMoviesList } from "../api";

const Home = () => {
  const [data, setData] = useState();
  const [page,setPage]=useState(0);
  const [loading, setLoading] = useState(true);
  const getStart = (page) => {
    setLoading(true)
    getMoviesList(page).then(({ data }) => {
      const { movies,items_per_page,total_items } = data.data;
      setData(movies);
      setPage(Math.ceil(total_items/items_per_page))
      setLoading(false);
    });
  };

  useEffect(() => getStart(1), []);

  const handlePageClick=({selected})=>{
    getStart(selected+1)
  }
  return (
    <div className=" grid grid-cols-3 sm:grid-cols-4 mt-12 md:grid gap-x-4 md:grid-cols-6 container mx-auto px-4">
      {data &&
        data.map((x) => (
          <div key={x.id} className=" mt-8 max-w-xs min-h-52">
            <Link to={"/details/" + x.id}>
              <img className="rounded-md w-48" src={x.files.poster_url} alt="img" />
              <h1 className="text-xs md:text-lg text-white  mt-2  ">{x.title}</h1>
            </Link>
          </div>
        ))}
      <ReactPaginate
        containerClassName=" w-96 flex gap-2 flex-row text-white  text-center mx-auto mt-12 "
        breakLabel="..."
        nextLabel ="next >"
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        pageCount={page}
        previousLabel="< prev"
        renderOnZeroPageCount={null}
      />

      {/* Loading */}
      {loading && (
        <>
          <button
            type="button"
            class="bg-indigo-500 ... mt-16 flex justify-center items-center"
            disabled
          >
            <svg
              class="animate-spin h-5 w-5 mr-3 ..."
              viewBox="0 0 24 24"
            ></svg>
            Processing...
          </button>
        </>
      )}
    </div>
  );
};
export default Home;
