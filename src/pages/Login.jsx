import { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "../components/Card";

export function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function logar(e) {
    e.preventDefault();

    if (email != '' && senha != '') {
      setEmail(email);
      setSenha(senha);
    } else {
      alert("informe email e senha")
    }
  }


  return (
    <div className="container" style={{padding: '100px'}}>
      <div className="column" style={{display: 'flex', justifyContent: 'center'}}>
        <div className="col-md-13">
          <div className="bs-docs-section">
            <Card title="Login">
              <div className="row">
                <div className="col-lg-12">
                  <div className="bs-component">
                    <form onSubmit={logar}>
                      <fieldset>
                        <div className="form-group" style={{ marginTop: '-50px' }}>
                          <div className="form-group">
                            <label className="form-label mt-4">Email</label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Digite o email"
                              onChange={event => setEmail(event.target.value)}
                              value={email}>
                            </input>
                          </div>

                          <div className="form-group">
                            <label className="form-label mt-4">Senha</label>
                            <input
                              type="password"
                              className="form-control"
                              placeholder="Digite a senha"
                              onChange={event => setSenha(event.target.value)}
                              value={senha}>
                            </input>
                          </div>

                          <div style={{ paddingTop: '20px' }}>
                            <button type="submit" className="btn btn-success" style={{ marginRight: '15px' }}>Login</button>
                            <Link to={"/cadastrar-usuario"} className="btn btn-info">Cadastrar</Link>
                          </div>

                        </div>
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}