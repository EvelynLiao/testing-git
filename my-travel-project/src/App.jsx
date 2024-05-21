import { useState } from 'react'
import Header from './Header.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
}

export default App
