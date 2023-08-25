import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './Sections/Header';
import TousLesPays from './components/TousLes_Pays/TousLesPays';
import PaysInfo from './components/LesPaysInfos/PaysInfo';
import Link from './Sections/Link';
function App() {
  return (
    
    <BrowserRouter>
    <>
    <Header />
    
    <Routes>
     <Route path='/' element={<TousLesPays/>} />
     <Route path='/country/:countryName' element={<PaysInfo/>} />  
     <Route path='Link' element={<Link />}/>
    </Routes>
    <link />
    </>
    </BrowserRouter>
  );
}

export default App;
