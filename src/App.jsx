import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import CultivoSeg from "./CultivoSeg";
import ParcelasForm from "./ParcelasForm";
import Semillas from "./Semillas";
import ParcelasTable from "./ParcelasTable";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/cultivo' element={<CultivoSeg />} />
        <Route path='/parcelas-form' element={<ParcelasForm />} />
        <Route path='/parcelas-table' element={<ParcelasTable />} />
        <Route path='/semillas' element={<Semillas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
