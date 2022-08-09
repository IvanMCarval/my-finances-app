import { Route, Routes } from "react-router-dom";
import { CadastrarUsuario } from "./pages/CadastrarUsuario";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastrar-usuario" element={<CadastrarUsuario />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}