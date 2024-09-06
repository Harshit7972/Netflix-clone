import React from "react";
import "./styles/Banner.scss";

import { FaPlay } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";

const Banner = (props) => {
 const banner_data= props.data && props.data.length?props.data[ Math.floor(Math.random() * props.data.length - 1)]:""
 let overview = banner_data?banner_data.overview:""
 let name =  banner_data?banner_data?.title || banner_data?.name || banner_data?.original_name:""

 
  
  const base_url= "https://image.tmdb.org/t/p/original/"
  
  return (
    <>
      <div className="main_ban" style={{
        backgroundImage:banner_data ? `url(${base_url}${banner_data.backdrop_path})`:"",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center'
      }}>
        <div className="inner_div_ban">
        <h1  className='margin'>{name.length>20?name.slice(0,20)+"...":name}</h1>
        <p className='margin'>{overview.length>80?overview.slice(0,80) +'...':overview}</p>
          <div className="btn_div_ban">
            <button className="btn_1_ban"><h3><FaPlay />Play</h3></button>
            <button className="btn_2_ban"><h3><CiCircleInfo />More Info</h3></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
