import { useState } from "react";
import { Card } from "../components/Card";

export function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function logar(e) {
    e.preventDefault();

    if (email != '' && senha != '') {
      setEmail(email);
      setSenha(senha);
    }
  }


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6" style={{ position: 'relative', left: '300px' }}>
          <div className="bs-docs-section">
            <Card title="Login">
              <div className="row">
                <div className="col-lg-12">
                  <div className="bs-component">
                    <form onSubmit={logar}>
                      <fieldset>
                        <div className="form-group" style={{ marginTop: '-50px' }}>
                          <div className="form-group">
                            <label class="form-label mt-4">Email address</label>
                            <input
                              type="email"
                              class="form-control"
                              placeholder="Enter email"
                              onChange={event => setEmail(event.target.value)}
                              value={email}>
                            </input>
                          </div>

                          <div className="form-group">
                            <label class="form-label mt-4">Password</label>
                            <input
                              type="password"
                              class="form-control"
                              placeholder="Password"
                              onChange={event => setSenha(event.target.value)}
                              value={senha}>
                            </input>
                          </div>

                          <div style={{ paddingTop: '20px' }}>
                            <button type="submit" class="btn btn-success" style={{ marginRight: '15px' }}>Login</button>
                            <button type="button" class="btn btn-danger">Cadastrar</button>
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