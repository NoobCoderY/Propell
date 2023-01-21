import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './component/Card';
import CardModal from './component/CardModal';
import WarningCard from './component/WarningCard';
import Unmarked from './component/Unmarked';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import Footer from './component/Footer';
import axios from 'axios';

function App() {
  const [portFolio,setPortfolio]=React.useState(150000)
  const [data,setdata]=useState([]);
  useEffect(()=>{
             axios.get("https://mocki.io/v1/61a36370-212d-4ac7-baf6-355a14262cb7").then((data)=>{
              setdata(data.data.portfolio)
             })
             

  },[])
  return (
    <div style={{position:"relative"}}>
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={<Card  portFolio={portFolio} setPortfolio={setPortfolio} data={data}/>}></Route>
    <Route exact path='/unmarked' element={<Unmarked  portFolio={portFolio} setPortfolio={setPortfolio} data={data}/>}></Route>
     </Routes>
     {/* <Footer></Footer> */}
     </BrowserRouter>
     </div>
    
  );
}

export default App;
