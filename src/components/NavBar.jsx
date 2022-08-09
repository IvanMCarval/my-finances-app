import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid" style={{margin: '0 300px 0 300px'}}>
        <Link className="navbar-brand" to={"/"}>Minhas Finanças</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link active" to={"/home"}>Home
                <span className="visually-hidden">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/cadastrar-usuario"}>Usuários</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/"}>Lançamentos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/"}>Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}