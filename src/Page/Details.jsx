import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from 'axios'
import { getMovieDetails } from "../api";

const Details = () => {
  const { id } = useParams();
  const [data,setData]=useState([])
  

  useEffect(()=>{
    getMovieDetails(id).then(({data})=>{
      const {movie}=data.data;
      setData(movie)
      
    })
  },[])
  console.log(data)

  
  return data &&  (

    <div className="flex-col md:flex-row flex items-center justify-between pt-20 container mx-auto px-4 ">
     
       <img s className=" w-full md:w-1/4 md:h-1/2 mt-8 object-contain" src={data.files?.poster_url} alt="logo" />
      <div className="md:ml-20 text-white text-2xl">
      <h1 className=" text-center md:text-left my-4 md:ml-20 text-3xl">{data.title}</h1>
       <p className=" text-center md:text-left my-4 md:ml-20">{data.year}</p>
       <p className="text-center md:text-left my-4 md:ml-20">{data.countries_str}</p>
       <p className="text-center md:text-left my-4 md:ml-20">{data.description}</p>
       <p className="text-center md:text-left my-4 md:ml-20 ">{data.genres_str}</p>
       <p>{data.files?.snapshoots}</p>
      </div>
       
     
    </div>
  );
};
export default Details;
