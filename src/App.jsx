import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import CultivoSeg from "./CultivoSeg";
import Parcelas from "./Parcelas";
import Semillas from "./Semillas";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/cultivo' element={<CultivoSeg />} />
        <Route path='/parcelas' element={<Parcelas />} />
        <Route path='/semillas' element={<Semillas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
