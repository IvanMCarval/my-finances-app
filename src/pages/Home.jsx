import { Link } from "react-router-dom";

export function Home() {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop:'100px'}}>
      <div className="card-2">
        <div className="jumbotron">
          <h1 className="display-3">Bem vindo!</h1>
          <p className="lead">Esse é seu sistema de finanças.</p>
          <p className="lead">Seu saldo para o mês atual é de R$ 5.325,21</p>
          <hr className="my-4" />
          <p>E essa é sua área administrativa, utilize um dos menus ou botões abaixo para navegar pelo sistema.</p>
          <p className="lead">
            <Link className="btn btn-info btn-lg" to={"/cadastrar-usuario"} style={{ marginRight: '15px' }}>Cadastrar Usuário</Link>
            <Link className="btn btn-danger btn-lg" to={"/"}>Cadastrar Lançamento</Link>
          </p>
        </div>
      </div>
    </div>


  )
}