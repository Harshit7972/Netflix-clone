import {React,useState,useEffect} from 'react'
import './styles/Home.scss'
import Banner from './Banner'
import Row from './Row'
import axios from 'axios';
const Home = () => {
  const api="a59ef36c6d14961c53427a9269d9be75";
  const base_url="https://api.themoviedb.org/3/";
  const [dataarr,setDataarr]=useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
     
     
        const responses = await Promise.all([
          axios.get(`${base_url}trending/movie/day?api_key=${api}`),
          axios.get(`${base_url}discover/tv?api_key=${api}&with_networks=213`),
          axios.get(`${base_url}discover/movie?api_key=${api}&with_genres=27`),
          axios.get(`${base_url}discover/tv?api_key=${api}&with_genres=16`),
          axios.get(`${base_url}discover/movie?api_key=${api}&with_genres=28,12`),
          axios.get(`${base_url}discover/tv?api_key=${api}&with_genres=80`)
        ]);
        const dataFromResponses = responses.map(response => response.data.results);
        setDataarr(dataFromResponses)
      
        
    };

    fetchData();
    console.log("home")
  },[]);
 
  return (
    <>
    <div className="main_home">
    <Banner data={dataarr[0]}/>
    <Row data={dataarr[0]}  title={"Trending Now"}/>
    <Row data={dataarr[1]}  title={"Netflix Originals"}/>
    <Row data={dataarr[2]}  title={"Horror"}/>
    <Row data={dataarr[3]}  title={"Anime"}/>
    <Row data={dataarr[4]}  title={"Action & Adventure Movies"}/>
    <Row data={dataarr[5]}  title={"Crime TV Shows"}/>
    
    
   
    </div>
    
    </>
  )
}

export default Home