import {React,useState,useEffect} from 'react'
import Banner from './Banner'
import Row from './Row'
import axios from 'axios';

const Movies = () => {
  const api="a59ef36c6d14961c53427a9269d9be75";
  const base_url="https://api.themoviedb.org/3/";
  const [dataarr,setDataarr]=useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
     
        const responses = await Promise.all([
          axios.get(`${base_url}movie/top_rated?api_key=${api}`),
        axios.get(`${base_url}movie/popular?api_key=${api}&language=en-US&page=6`),
        axios.get(`${base_url}discover/movie?api_key=${api}&with_genres=35`),
        axios.get(`${base_url}discover/movie?api_key=${api}&with_genres=10749`),
        axios.get(`${base_url}discover/movie?api_key=${api}&with_genres=18&page=2`),
        axios.get(`${base_url}discover/movie?api_key=${api}&with_genres=80&sort_by=popularity.desc`)
        ]);
        const dataFromResponses = responses.map(response => response.data.results);
        setDataarr(dataFromResponses)
      
        
    };
    console.log("m")
    fetchData();
  },[]);
  return (
    <> 
    <div className="main_movie">
    <Banner data={dataarr[0]}/>
    <Row title={"Top Rated Movies"} data={dataarr[0]} />
    <Row title={"Popular Movies"}  data={dataarr[1]}/>
    <Row title={"Comedy Movies"}data={dataarr[2]}/>
    <Row title={"Romance Movies"}data={dataarr[3]}/>
    <Row title={"Drama Movies"}data={dataarr[4]}/>
    <Row title={"Crime Movies"}data={dataarr[5]}/>
    
    </div>
    </>
  )
}

export default Movies