import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Produtos from './Components/Produtos';
import Contato from './Contato';
import Produto from './Produto';
import './App.css'



const App = () => {
  return <div className='App'>
      <BrowserRouter>
      <Header />
        <div className='content'>
            <Routes>
                <Route path='/' element={<Produtos />} />
                <Route path="produto/:id" element={<Produto />} />
                <Route path='contato' element={<Contato />} />
            </Routes>
        </div>
      </BrowserRouter>
      <Footer />
  </div>
}

export default App;