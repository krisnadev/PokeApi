import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Card from './page/Card';
import Detail from "./page/Detail";

import { BrowserRouter as Router,
  Routes,
  Route,
  Link } from "react-router-dom";

  function Detaildata() {
    return (

           <Detail />


    );
  }

const App =() => {

  const [data,setData] = useState([]);
 const fecthData = async()=>{
  try{
    await axios.get('http://localhost:8000/list').then((response)=>{
      const result= response.data
      setData(result);
    })
  }catch(error){
    console.log("error",error)
  }
 }
 useEffect(()=>{
  fecthData()
 },[])

  return (
    <>
    <Router>

        
        <br/>
        <h2 align="center">PokeApi</h2>
        <br/>
        <div className="container">
          <div className='row'>
            <div className='col-lg-8'>
            <div className="row">
              {
                data.map((i,index)=>{
                  return(
                    <div className="col-lg-3 col-md-3 my-2" key={index}>
                          <div className='card'>
                        {/* <img alt="Sample" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${index+1}.png`} /> */}
                        <div className="card-header">
                        <Card id={index+1} name={i.name} />
                        </div>
                        <div className="card-body">
                          <h6 className="card-title text-wrap" style={{ textTransform: 'uppercase'}}>{i.name}</h6>
                          
                          <Link to={`detail/${index+1}`} className="btn btn-primary float-end"  >Detail</Link>
                          
                          
                        </div>
                        </div>
                    </div>
                  )
                })
              }
            
            </div>
            </div>
            <div className='col-lg-4'>
            <Routes>
              <Route path="detail/:detailId" element={<Detaildata />} />
            </Routes>
            </div>
          </div>
          
        </div>
   
      
                      
      
    </Router>
      
    
    </>
  );
}
export default App;
