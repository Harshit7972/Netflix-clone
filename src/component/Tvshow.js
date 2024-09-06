import {React,useState,useEffect} from 'react'
import Banner from './Banner'
import Row from './Row'
import axios from 'axios';

const Tvshow = () => {
  const api="a59ef36c6d14961c53427a9269d9be75";
  const base_url="https://api.themoviedb.org/3/";
  const [dataarr,setDataarr]=useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
     
        const responses = await Promise.all([
          axios.get(`${base_url}tv/top_rated?api_key=${api}`),
        axios.get(`${base_url}tv/popular?api_key=${api}&language=en-US&page=8`),
        axios.get(`${base_url}discover/tv?api_key=${api}&with_genres=35&page=2`),
        axios.get(`${base_url}discover/tv?api_key=${api}&with_genres=10749`),
        axios.get(`${base_url}discover/tv?api_key=${api}&with_genres=18&page=2`),
        axios.get(`${base_url}discover/tv?api_key=${api}&with_genres=80&sort_by=popularity.desc`)
        ]);
        const dataFromResponses = responses.map(response => response.data.results);
        setDataarr(dataFromResponses)
      
        
    };
    console.log("t")
    fetchData();
  },[]);
  return (
    <>
    <div className="main_tv">
    <Banner data={dataarr[0]}/>
    <Row title={"Top Rated TV Shows"} data={dataarr[0]} />
    <Row title={"Popular TV Shows"} data={dataarr[1]} />
    <Row title={"Comedy TV Shows"} data={dataarr[2]}/>
    <Row title={"Romance TV Shows"} data={dataarr[3]}/>
    <Row title={"Drama TV Shows"} data={dataarr[4]}/>
    <Row title={"Crime TV Shows"} data={dataarr[5]}/>
    </div>
    
    </>
  )
}

export default Tvshow