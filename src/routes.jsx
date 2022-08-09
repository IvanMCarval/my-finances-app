import { Route, Routes } from "react-router-dom";
import { CadastrarUsuario } from "./pages/CadastrarUsuario";
import { Login } from "./pages/Login";

export function Router() {
  return(
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/cadastrar-usuario" element={<CadastrarUsuario/>}/>
    </Routes>
  )
}