import logo from './logo.svg';
import React from 'react';
import './App.css';
import Card from './component/Card';
import CardModal from './component/CardModal';

function App() {
  const [open, setOpen] = React.useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <div className="App">
     <Card open={open} onOpenModal={onOpenModal} onCloseModal={onCloseModal}></Card>
     <CardModal open={open} onOpenModal={onOpenModal} onCloseModal={onCloseModal}></CardModal>
    </div>
  );
}

export default App;
