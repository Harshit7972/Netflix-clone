import {
  Routes,
  Route,
  BrowserRouter,Link,
} from "react-router-dom";
import "./App.scss";
import Banner from "./component/Banner";
import Home from "./component/Home";
import Nav from "./component/Nav";
import Tvshow from "./component/Tvshow";
import Movies from "./component/Movies";
import { useEffect } from "react";

function App() {
  useEffect(()=>{
    console.log("appjs")
  },[])
  return (
    <>
      <BrowserRouter>
      <Nav />
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tv" element={<Tvshow />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
