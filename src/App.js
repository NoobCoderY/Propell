import logo from './logo.svg';
import React from 'react';
import './App.css';
import Card from './component/Card';
import CardModal from './component/CardModal';
import WarningCard from './component/WarningCard';
import Unmarked from './component/Unmarked';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import Footer from './component/Footer';

function App() {
  const [open, setOpen] = React.useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <div style={{position:"relative"}}>
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={<Card />}></Route>
    <Route exact path='/unmarked' element={<Unmarked />}></Route>
     </Routes>
     {/* <Footer></Footer> */}
     </BrowserRouter>
     </div>
    
  );
}

export default App;
