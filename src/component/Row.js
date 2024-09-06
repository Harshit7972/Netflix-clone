import {React} from 'react'
import './styles/Row.scss'
import Card from './Card'



const Row = (props) => {
 

 
  
  return (
    <>
    <div className="top_row">
     <h2>{props.title}</h2></div>
    <div className="main_row">
    {
      props.data&&props.data.map((itm,index)=>{
       return <Card key={index} img_url={itm.poster_path} />
        

      })
    }
    </div>
  
    </>
  )
}

export default Row