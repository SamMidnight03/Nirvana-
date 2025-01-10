import { BrowserRouter, Route, Routes } from "react-router";
import Contactos from "./Pages/Contactos";
import Index from "./Pages/Index";
import Header from "./components/Header";
import "./App.css"

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route index element={<Index />} />
          <Route path="Contactos" element={<Contactos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
