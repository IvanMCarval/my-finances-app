import { Route, Routes } from "react-router-dom";
import { Cadastrar } from "./pages/Cadastrar";
import { Login } from "./pages/Login";

export function Router() {
  return(
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/cadastrar" element={<Cadastrar/>}/>
    </Routes>
  )
}