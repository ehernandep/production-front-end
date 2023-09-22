import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import CultivoSegTable from "./CultivoSegTable";
import ParcelasForm from "./ParcelasForm";
import Semillas from "./Semillas";
import ParcelasTable from "./ParcelasTable";
import CultivoSegForm from "./CultivoSegForm";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/cultivo-table' element={<CultivoSegTable />} />
        <Route path='/cultivo-form' element={<CultivoSegForm />} />
        <Route path='/parcelas-form' element={<ParcelasForm />} />
        <Route path='/parcelas-table' element={<ParcelasTable />} />
        <Route path='/semillas' element={<Semillas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
