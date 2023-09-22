import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import CultivoSegTable from "./CultivoSegTable";
import ParcelasForm from "./ParcelasForm";
import SemillasForm from "./SemillasForm";
import ParcelasTable from "./ParcelasTable";
import CultivoSegForm from "./CultivoSegForm";
import SemillasTable from "./SemillasTable";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/cultivo-tabla' element={<CultivoSegTable />} />
        <Route path='/cultivo-forma' element={<CultivoSegForm />} />
        <Route path='/parcelas-forma' element={<ParcelasForm />} />
        <Route path='/parcelas-tabla' element={<ParcelasTable />} />
        <Route path='/semillas-forma' element={<SemillasForm />} />
        <Route path='/semillas-tabla' element={<SemillasTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
