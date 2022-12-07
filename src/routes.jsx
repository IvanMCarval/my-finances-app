import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";
import CadastrarUsuario from "./pages/CadastrarUsuario";
import Home from "./pages/Home";
import Login from "./pages/Login";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/cadastrar-usuario" component={CadastrarUsuario} />
        <Route path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router